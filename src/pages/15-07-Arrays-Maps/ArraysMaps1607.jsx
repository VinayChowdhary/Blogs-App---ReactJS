import React from "react";

export const ArraysMaps1607 = () => {
  const userName = "John";
  const userAge = 25;
  const users = ["John", "Adam", "Vinay", "Namratha", "Chowdhary"];
  const userDetails = {
    name: "Vinay",
    age: 23,
    address: "ABC Colony  , Hyderabad",
    mobNo: 8839488398384,
  };
  return (
    <div>
      <h1>This is comming from ArrayMaps 16-07</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, soluta.
        Iusto laudantium eaque odit eligendi repellat accusantium aspernatur
        voluptatibus veniam corrupti, impedit exercitationem blanditiis aliquid
        error ipsum velit ut laboriosam?
      </p>
      User Name is : <b>{userName}</b>
      User Age is : <b>{userAge}</b>
      <ul>
        {users
          // .sort((a, b) => a.localeCompare(b))
          // .filter((user) => user.length < 5)
          .map((user, index) => {
            return <li key={index}>{user}</li>;
          })}
      </ul>
      <ul>
        <h4>Name = {userDetails.name}</h4>
        <p>Age = {userDetails.age}</p>
        <p>Address = {userDetails.address}</p>
        <p>Mobile Number = {userDetails.mobNo}</p>
      </ul>
    </div>
  );
};
