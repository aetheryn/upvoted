import React, { useState, useEffect } from "react";
import members from "../helper/members";
import MemberOption from "../components/MemberOption";
import LoadingSpinner from "../components/LoadingSpinner";

const Rating = (props) => {
  const [displayedName, setDisplayedName] = useState("");
  const [displayedList, setDisplayedList] = useState([]);
  const [userRatings, setUserRatings] = useState({});
  const [img, setImg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const filterMembers = () => {
    const userData = members.find((member) => member.username === props.user);
    setDisplayedName(userData.name);
    setImg(userData.img);

    const filteredArr = members.filter(
      (member) => member.username !== props.user
    );
    setDisplayedList(filteredArr);
  };

  const getData = async () => {
    setIsLoading(true);
    try {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_KEY}`,
        },
      };

      const response = await fetch(
        import.meta.env.VITE_AIRTABLE_SERVER + "/" + props.userId,
        options
      );

      if (response.ok) {
        const data = await response.json();
        delete data.fields.password;
        setUserRatings(data.fields);
      }
    } catch (error) {
      if (error.name !== "AbortError") {
        console.log(error.message);
      }
    }
    setIsLoading(false);
  };

  const handleLogout = () => {
    props.setUser("");
  };

  useEffect(() => {
    getData();
    filterMembers();
  }, []);

  return (
    <div className="rating-background">
      <div className="profile-navbar">
        <img
          src="/logout.png"
          style={{
            width: "8vw",
            height: "8vw",
          }}
          onClick={handleLogout}
        ></img>

        <div style={{ fontWeight: "bolder" }}>{props.user}</div>

        <img
          src={img}
          style={{ width: "10vw", height: "10vw" }}
          className="profile-img"
        ></img>
      </div>

      <div className="rating-contents">
        <div>
          <div style={{ color: "#a56d94" }}>
            Hi, <span style={{ fontWeight: "bolder" }}>{displayedName}</span>.
          </div>
          <div style={{ color: "#a56d94" }}>Who are you rating for today?</div>
        </div>

        {isLoading && (
          <div>
            <br />
            <LoadingSpinner loaderstyle={"rating-page"}></LoadingSpinner>
          </div>
        )}
        {!isLoading && (
          <div>
            {displayedList.map((member) => {
              return (
                <MemberOption
                  key={member.name}
                  member={member}
                  userRatings={userRatings}
                  getData={getData}
                  userId={props.userId}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Rating;
