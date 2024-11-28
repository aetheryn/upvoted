import React, { useState, useEffect } from "react";
import RatingModal from "./RatingModal";

const MemberOption = (props) => {
  const [isRated, setIsRated] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const checkRating = () => {
    if (props.member.username in props.userRatings) {
      setIsRated(true);
    }
  };

  useEffect(() => {
    checkRating();
  }, [props.userRatings]);

  return (
    <>
      {showModal && (
        <RatingModal
          member={props.member}
          getData={props.getData}
          userRatings={props.userRatings}
          setShowModal={setShowModal}
          userId={props.userId}
        ></RatingModal>
      )}
      <div
        className={`banner ${isRated ? "unclickable" : ""}`}
        onClick={() => setShowModal(true)}
        aria-disabled={isRated}
      >
        <img
          src={props.member.img}
          alt={props.member.name}
          style={{
            width: "15dvw",
            height: "15dvw",
            borderStyle: "solid",
          }}
        />

        <div style={{ justifySelf: "flex-start" }}>
          <div style={{ fontSize: "4vw", fontWeight: "bolder" }}>
            {props.member.name}
          </div>
          <div style={{ fontSize: "2vw", fontStyle: "italic" }}>
            @{props.member.username}
          </div>
          {isRated && (
            <div style={{ fontSize: "2vw" }}>
              You have rated for this person.
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default MemberOption;
