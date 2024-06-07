import "./HowWhereEditPage.scss";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import Heading from "../../components/Heading/Heading";
import SubHeading from "../../components/SubHeading/SubHeading";
import Input from "../../components/Input/Input";
import PhotoCardSmall from "../../components/PhotoCardSmall/PhotoCardSmall";

export default function HowWhereEditPage({
  friendshipDetails,
  setDetailEdited,
}) {
  const navigate = useNavigate();
  const howWhere = friendshipDetails["how-where"];
  const howWhereId = friendshipDetails["how-where"].id;
  const [file, setFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(howWhere["image"]);
  const [titleInput, setTitleInput] = useState(howWhere["image-title"]);
  const [descriptionInput, setDescriptionInput] = useState(
    howWhere.description
  );

  const handleChangeTitle = (event) => {
    setTitleInput(event.target.value);
  };

  const handleChangeDescription = (event) => {
    setDescriptionInput(event.target.value);
  };

  const isFormValid = () => titleInput.trim() && descriptionInput.trim();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    console.log(form);
    console.log(form["image-title"].parentElement);
    const cancelButton = form.querySelector(".button--secondary");
    // if user clicks the cancel button, go to the home page
    if (event.nativeEvent.submitter === cancelButton) {
      navigate("/");
    } else {
      if (isFormValid()) {
        try {
          const formData = new FormData();
          formData.append("title", titleInput);
          formData.append("description", descriptionInput);
          if (file) {
            formData.append("image", file);
          }
          console.log("formData", formData);
          await axios.put(
            `${import.meta.env.VITE_API_URL}/how-where/${howWhereId}`,
            formData,
            {
              header: {
                "Content-Type": "multipart/form-data",
              },
            }
          );
          setDetailEdited(true);
          navigate("/");
        } catch (error) {
          console.error("Error in updating how & where we met", error);
        }
      } else if (!titleInput.trim() && !descriptionInput.trim()) {
        // if both input fields are empty, add error styling to both fields
        form["image-title"].parentElement.classList.add("input--error");
        form["description"].parentElement.classList.add("input--error");
      } else if (!titleInput.trim()) {
        // if title input is empty, add error styling to title input
        form["image-title"].parentElement.classList.add("input--error");
      } else if (!descriptionInput.trim()) {
        // if description input is empty, add error styling to description input
        form["description"].parentElement.classList.add("input--error");
      }
    }
  };

  // if title field is not empty, remove the error styling
  useEffect(() => {
    if (titleInput) {
      const titleInputField = document.querySelector("#image-title");
      titleInputField.parentElement.classList.remove("input--error");
    }
  }, [titleInput]);

  // if description field is not empty, remove the error styling
  useEffect(() => {
    if (descriptionInput) {
      const descriptionInputField = document.querySelector("#description");
      descriptionInputField.parentElement.classList.remove("input--error");
    }
  }, [descriptionInput]);

  return (
    <>
      <Header friendshipDetails={friendshipDetails} />
      <div className="how-where-edit">
        <Heading heading="how & where we met" />
        <form className="how-where-edit__form" onSubmit={handleSubmit}>
          <div className="how-where-edit__image">
            <SubHeading text="update image" />
            <PhotoCardSmall source={imagePreview} />
            <Input
              type="file"
              name="image"
              setFile={setFile}
              setImagePreview={setImagePreview}
            />
          </div>
          <div className="how-where-edit__image-title-section">
            <SubHeading text="update image title" />
            <Input
              type="input"
              name="image-title"
              value={titleInput}
              onChange={handleChangeTitle}
            />
          </div>
          <div className="how-where-edit__description-section">
            <SubHeading text="update description" />
            <Input
              type="textarea"
              name="description"
              value={descriptionInput}
              onChange={handleChangeDescription}
            />
          </div>
          <div className="how-where-edit__buttons">
            <Button
              label="cancel"
              addClass="button--secondary button--fullwidth"
            />
            <Button label="confirm" addClass="button--fullwidth" />
          </div>
        </form>
      </div>
    </>
  );
}
