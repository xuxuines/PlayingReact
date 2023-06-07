import React from "react";

function HeaderCard(props) {
  return (
    <>
      <figure class="image is-4by3">
        <img src={props.profileImg} alt="" />
      </figure>
      <h1 className="title is-5 mt-5">{props.profileName}</h1>
    </>
  );
}

export default HeaderCard;
