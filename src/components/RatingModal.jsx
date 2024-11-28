import React, { useState } from "react";
import ReactDOM from "react-dom";
import styles from "./RatingModal.module.css";
import LoadingSpinner from "./LoadingSpinner";
import { color } from "@cloudinary/url-gen/qualifiers/background";

const Overlay = (props) => {
  const [ratingValue, setRatingValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleClick = () => {
    props.setShowModal(false);
  };

  const handleChange = (event) => {
    setRatingValue(event.target.value);
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const options = {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_KEY}`,
        },
        body: JSON.stringify({
          records: [
            {
              id: props.userId,
              fields: {
                [props.member.username]: Math.round(ratingValue * 100) / 100,
              },
            },
          ],
        }),
      };

      const response = await fetch(
        import.meta.env.VITE_AIRTABLE_SERVER,
        options
      );

      if (response.ok) {
        setIsLoading(false);
        setIsSubmitted(true);
        setTimeout(() => props.setShowModal(false), 2000);
        props.getData();
      }
    } catch (error) {
      if (error.name !== "AbortError") {
        console.log(error.message);
      }
    }

    setIsLoading(false);
  };

  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        {isLoading && <LoadingSpinner />}
        {!isLoading && (
          <>
            <img
              src={props.member.img}
              alt={props.member.name}
              style={{
                width: "50dvw",
                height: "50dvw",
                borderRadius: "50%",
                borderColor: "white",
                borderWidth: "2dvw",
                borderStyle: "solid",
              }}
            ></img>
            <div
              style={{
                fontSize: "250%",
                color: "white",
                fontWeight: "bolder",
              }}
            >
              {props.member.name}
            </div>
            <div style={{ color: "white", fontStyle: "italic" }}>
              @{props.member.username}
            </div>

            <br />

            {!isSubmitted && (
              <>
                <div className={styles.rating}>
                  <input
                    type="radio"
                    name="rating"
                    id="star-5"
                    className={styles.radio}
                    value="5"
                    onClick={(event) => handleChange(event)}
                  ></input>
                  <label htmlFor="star-5">
                    <i className="fa-solid fa-star"></i>
                  </label>

                  <input
                    type="radio"
                    name="rating"
                    id="star-4"
                    className={styles.radio}
                    value="4"
                    onClick={(event) => handleChange(event)}
                  ></input>
                  <label htmlFor="star-4">
                    <i className="fa-solid fa-star"></i>
                  </label>

                  <input
                    type="radio"
                    name="rating"
                    id="star-3"
                    className={styles.radio}
                    value="3"
                    onClick={(event) => handleChange(event)}
                  ></input>
                  <label htmlFor="star-3">
                    <i className="fa-solid fa-star"></i>
                  </label>

                  <input
                    type="radio"
                    name="rating"
                    id="star-2"
                    className={styles.radio}
                    value="2"
                    onClick={(event) => handleChange(event)}
                  ></input>
                  <label htmlFor="star-2">
                    <i className="fa-solid fa-star"></i>
                  </label>

                  <input
                    type="radio"
                    name="rating"
                    id="star-1"
                    className={styles.radio}
                    value="1"
                    onClick={(event) => handleChange(event)}
                  ></input>
                  <label htmlFor="star-1">
                    <i className="fa-solid fa-star"></i>
                  </label>
                </div>
                <br />
                <div className={styles.buttons}>
                  <div className={styles.submit} onClick={handleSubmit}>
                    Submit
                  </div>
                  <div className={styles.cancel} onClick={handleClick}>
                    Cancel
                  </div>
                </div>{" "}
              </>
            )}
            {isSubmitted && (
              <div
                style={{
                  color: "white",
                  maxWidth: "70dvw",
                  textAlign: "center",
                }}
              >
                You have submitted a rating of <span>{ratingValue}</span>/5 for{" "}
                <span style={{ color: "#a56d94", fontWeight: "bold" }}>
                  {props.member.name}.
                </span>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

const RatingModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Overlay
          member={props.member}
          getData={props.getData}
          userRatings={props.userRatings}
          setShowModal={props.setShowModal}
          userId={props.userId}
        ></Overlay>,
        document.querySelector("#modal-root")
      )}
    </>
  );
};

export default RatingModal;