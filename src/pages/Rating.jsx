import React, { useState, useEffect } from "react";
import members from "../helper/members";
import MemberOption from "../components/MemberOption";

const Rating = (props) => {
  const [displayedName, setDisplayedName] = useState("");
  const [displayedList, setDisplayedList] = useState([]);
  const [userRatings, setUserRatings] = useState({});

  const filterMembers = () => {
    const userData = members.find((member) => member.username === props.user);
    setDisplayedName(userData.name);

    const filteredArr = members.filter(
      (member) => member.username !== props.user
    );
    setDisplayedList(filteredArr);
  };

  const getData = async () => {
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
        console.log(data);
        delete data.fields.password;
        setUserRatings(data.fields);
      }
    } catch (error) {
      if (error.name !== "AbortError") {
        console.log(error.message);
      }
    }
  };

  useEffect(() => {
    getData();
    filterMembers();
  }, []);

  return (
    <div className="rating-background">
      <div>
        Hi, {displayedName}. {JSON.stringify(userRatings)}
      </div>
      <div>Who are you rating for today?</div>
      {displayedList.map((member) => {
        return (
          <MemberOption
            key={member.name}
            member={member}
            userRatings={userRatings}
            getData={getData}
          />
        );
      })}
    </div>
  );
};

export default Rating;
