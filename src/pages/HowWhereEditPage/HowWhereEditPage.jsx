import "./HowWhereEditPage.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import Heading from "../../components/Heading/Heading";
import SubHeading from "../../components/SubHeading/SubHeading";
import Input from "../../components/Input/Input";
import PhotoCardSmall from "../../components/PhotoCardSmall/PhotoCardSmall";

export default function HowWhereEditPage({ friendshipDetails }) {
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const cancelButton = form.querySelector(".button--secondary");
    if (event.nativeEvent.submitter === cancelButton) {
      navigate("/");
    } else {
      try {
        const formData = new FormData();
        formData.append("imageFile", file);
        formData.append("image-title", titleInput);
        formData.append("description", descriptionInput);
        await axios.put(
          `${import.meta.env.VITE_API_URL}/how-where/${howWhereId}`,
          formData,
          {
            header: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
      } catch (error) {
        console.error("Error in updating how & where we met", error);
      }
    }
  };

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
