import "./ThingsInCommonEditPage.scss";
import axios from "axios";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast, Flip } from "react-toastify";
import Header from "../../components/Header/Header";
import Heading from "../../components/Heading/Heading";
import SubHeading from "../../components/SubHeading/SubHeading";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import ListItem from "../../components/ListItem/ListItem";
import trashIcon from "../../assets/icons/trash.svg";

export default function ThingsInCommonEditPage({
  friendshipDetails,
  setDetailEdited,
}) {
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate("/");
  };

  const friendshipId = friendshipDetails["friendship-id"];
  const thingsInCommon = friendshipDetails["things-in-common"];
  const [newThingInput, setNewThingInput] = useState("");

  const handleChange = (event) => {
    setNewThingInput(event.target.value);
  };

  //   Toastify
  const notifyError = () =>
    toast.error("✍️ Please write a new thing", {
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

  const addNewThing = async (event) => {
    const form = event.target;
    event.preventDefault();
    if (!newThingInput.trim()) {
      notifyError();
      form["thing"].parentElement.classList.add("input--error");
    } else {
      try {
        await axios.post(`${import.meta.env.VITE_API_URL}/things-in-common/`, {
          "friendship-id": friendshipId,
          description: newThingInput,
        });
        setDetailEdited(true);
        Swal.fire({
          icon: "success",
          title: "New thing in common has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
      } catch (error) {
        console.error("unable to add a new thing in common", error);
      }
    }
  };

  const handleDelete = async (event) => {
    event.preventDefault();
    const thingId = event.target.id;
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ff4343",
      cancelButtonColor: "#DC818C",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(
            `${import.meta.env.VITE_API_URL}/things-in-common/${thingId}`
          );
          Swal.fire({
            title: "Deleted!",
            text: "This thing in common has been deleted.",
            icon: "success",
          });
          setDetailEdited(true);
        } catch (error) {
          console.error(
            `unable to delete the thing in common with ID: ${thingId}`,
            error
          );
        }
      }
    });
  };

  useEffect(() => {
    if (newThingInput) {
      const newThingInputField = document.querySelector("#thing");
      newThingInputField.parentElement.classList.remove("input--error");
    }
  }, [newThingInput]);

  return (
    <>
      <ToastContainer />
      <Header friendshipDetails={friendshipDetails} />
      <div className="things-in-common-edit">
        <Heading heading="things in common" />

        <form className="things-in-common-edit__form" onSubmit={addNewThing}>
          <div className="things-in-common-edit__image">
            <SubHeading text="add more" />
            <Input
              id="thing"
              type="input"
              name="thing"
              value={newThingInput}
              onChange={handleChange}
            />
          </div>
          <Button label="add" addClass="button" />
        </form>
        <div className="things-in-common-edit__current">
          <SubHeading text="current items" />
          <div className="things-in-common-edit__things">
            {thingsInCommon.map((thing) => (
              <div key={thing.id} className="things-in-common-edit__thing">
                <ListItem text={thing.description} />
                <img
                  id={thing.id}
                  className="things-in-common-edit__icon"
                  src={trashIcon}
                  alt="trash"
                  onClick={handleDelete}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="things-in-common-edit__buttons">
          <Button
            label="cancel"
            addClass="button--secondary button--fullwidth"
            onClick={navigateToHome}
          />
          <Button
            label="confirm"
            addClass="button--fullwidth"
            onClick={navigateToHome}
          />
        </div>
      </div>
    </>
  );
}
