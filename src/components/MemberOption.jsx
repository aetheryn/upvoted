import React, { useState, useEffect } from "react";

const MemberOption = (props) => {
  const [isRated, setIsRated] = useState(false);

  const checkRating = () => {
    if (props.member.username in props.userRatings) {
      setIsRated(true);
    }
  };

  useEffect(() => {
    checkRating();
  });

  return (
    <div className="banner">
      <img
        src={props.member.img}
        alt={props.member.name}
        style={{
          width: "15dvw",
          height: "15dvw",
          borderRadius: "50%",
          borderColor: "white",
          borderWidth: "0.5dvw",
          borderStyle: "solid",
        }}
      />

      <div style={{ justifySelf: "flex-start" }}>
        <div style={{ fontSize: "3vw", color: "white", fontWeight: "bolder" }}>
          {props.member.name}
        </div>
        <div style={{ fontSize: "1.5vw", color: "white", fontStyle: "italic" }}>
          @{props.member.username}
        </div>
        {isRated && (
          <div style={{ fontSize: "1vw", color: "white" }}>
            You have rated for this person.
          </div>
        )}
      </div>
    </div>
  );
};

export default MemberOption;
