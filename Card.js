import React from "react";
import BodyCard from "./BodyCard";
import HeaderCard from "./HeaderCard";
import ButtonCard from "./ButtonCard";

function Card(props) {
  return (
    <>
      <div key={props.cardObject.profileId}>
        <HeaderCard
          profileImg={props.cardObject.profileImg}
          profileName={props.cardObject.profileName}
        />
      </div>
      <div class="card-content">
        <BodyCard profileBio={props.cardObject.profileBio} />
        <ButtonCard />
      </div>
    </>
  );
}

export default Card;
