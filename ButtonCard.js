import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPen } from "@fortawesome/free-solid-svg-icons";
import { faBomb } from "@fortawesome/free-solid-svg-icons";

function ButtonCard() {
  function handleEdit() {
    alert("you are about to edit this person");
  }

  function handleDelete() {
    alert("you are about to delete this person");
  }

  return (
    <>
      <div class="buttons columns mt-1">
        <div class="column is-half">
          <button class="button is-info is-fullwidth mb-0" onClick={handleEdit}>
            <span class="icon">
              <FontAwesomeIcon icon={faUserPen} />
            </span>
            <span>Edit</span>
          </button>
        </div>
        <div class="column is-half">
          <button
            class="button is-danger is-fullwidth mb-0"
            onClick={handleDelete}
          >
            <span class="icon">
              <FontAwesomeIcon icon={faBomb} />
            </span>
            <span>Delete</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default ButtonCard;
