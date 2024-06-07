import "./FirstImpressionEditPage.scss";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import Heading from "../../components/Heading/Heading";
import SubHeading from "../../components/SubHeading/SubHeading";
import Input from "../../components/Input/Input";
import PhotoCardSmall from "../../components/PhotoCardSmall/PhotoCardSmall";

export default function FirstImpressionEditPage({
  friendshipDetails,
  setDetailEdited,
  currentUserId,
}) {
  const navigate = useNavigate();
  const firstImpressions = friendshipDetails["first-impressions"];
  const firstImpressionOfCurrentUser = firstImpressions.find((impression) => {
    return impression["created-by"] === currentUserId;
  });
  //   console.log("firstImpressionOfCurrentUser", firstImpressionOfCurrentUser);
  const firstImpressionId = firstImpressionOfCurrentUser.id;

  const [file, setFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(
    firstImpressionOfCurrentUser["image"]
  );
  const [titleInput, setTitleInput] = useState(
    firstImpressionOfCurrentUser["image-title"]
  );
  const [descriptionInput, setDescriptionInput] = useState(
    firstImpressionOfCurrentUser.description
  );

  //   Toastify
  const notifyBothFields = () =>
    toast.error("✍️ Please fill out both fields", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Flip,
    });

  const notifyTitle = () =>
    toast.error("✍️ Please fill out the title", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Flip,
    });

  const notifyDescription = () =>
    toast.error("✍️ Please fill out the description", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Flip,
    });

  const notifySuccess = () =>
    toast.success("✨ Your first impression updated successfully", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Flip,
    });

  const handleChangeTitle = (event) => {
    setTitleInput(event.target.value);
  };

  const handleChangeDescription = (event) => {
    setDescriptionInput(event.target.value);
  };

  const navigateToHome = () => {
    navigate("/");
  };

  const isFormValid = () => titleInput.trim() && descriptionInput.trim();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const cancelButton = form.querySelector(".button--secondary");
    if (event.nativeEvent.submitter === cancelButton) {
      // if user clicks the cancel button, go to the home page
      navigateToHome();
    } else {
      if (isFormValid()) {
        try {
          const formData = new FormData();
          formData.append("title", titleInput);
          formData.append("description", descriptionInput);
          if (file) {
            formData.append("image", file);
            const originalFileName = firstImpressionOfCurrentUser.image
              .split("/")
              .pop();
            formData.append("originalFileName", originalFileName);
          }
          await axios.put(
            `${
              import.meta.env.VITE_API_URL
            }/first-impression/${firstImpressionId}`,
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          );
          setDetailEdited(true);
          notifySuccess();
          setTimeout(navigateToHome, 2000);
        } catch (error) {
          console.error("Error in updating the first impression", error);
        }
      } else if (!titleInput.trim() && !descriptionInput.trim()) {
        // if both input fields are empty, add error styling to both fields
        form["image-title"].parentElement.classList.add("input--error");
        form["description"].parentElement.classList.add("input--error");
        notifyBothFields();
      } else if (!titleInput.trim()) {
        // if title input is empty, add error styling to title input
        form["image-title"].parentElement.classList.add("input--error");
        notifyTitle();
      } else if (!descriptionInput.trim()) {
        // if description input is empty, add error styling to description input
        form["description"].parentElement.classList.add("input--error");
        notifyDescription();
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
      <ToastContainer />
      <Header friendshipDetails={friendshipDetails} />
      <div className="first-impression-edit">
        <Heading heading="my first impression" />
        <form className="first-impression-edit__form" onSubmit={handleSubmit}>
          <div className="first-impression-edit__image">
            <SubHeading text="update image" />
            <PhotoCardSmall source={imagePreview} />
            <Input
              type="file"
              name="image"
              setFile={setFile}
              setImagePreview={setImagePreview}
            />
          </div>
          <div className="first-impression-edit__image-title-section">
            <SubHeading text="update image title" />
            <Input
              type="input"
              name="image-title"
              value={titleInput}
              onChange={handleChangeTitle}
            />
          </div>
          <div className="first-impression-edit__description-section">
            <SubHeading text="update description" />
            <Input
              type="textarea"
              name="description"
              value={descriptionInput}
              onChange={handleChangeDescription}
            />
          </div>
          <div className="first-impression-edit__buttons">
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
