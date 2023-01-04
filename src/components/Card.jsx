import { useState } from "react";

const Card = ({ userData }) => {
  const userRandom = Math.floor(Math.random() * userData.length);
  const [index, setIndex] = useState(userRandom);

  const usersChange = () => {
    const randomUser = Math.floor(Math.random() * userData.length);
    setIndex(randomUser);
  };

  const colors = [
    "#FDB137",
    "#785964",
    "#6D6875",
    "#B5838D",
    "#E5989B",
    "#7E9680",
    "#C73866",
    "#FFB4A2",
    "#79616F",
    "#EAB595",
  ];

  const colorRandom = Math.floor(Math.random() * colors.length);

  document.body.style = `background: ${colors[colorRandom]}`;

  return (
    <div className="card">
      <div className="users">
        <h1>
          {userData[index].name.title} {userData[index].name.first}{" "}
          {userData[index].name.last}
        </h1>
        <img src={userData[index].picture.large} alt="" />
        <ul>
          <li>
            <i className="fa-solid fa-envelope"></i>
            {userData[index].email}
          </li>
          <li>
            <i className="fa-solid fa-phone"></i>
            {userData[index].phone}
          </li>
          <li>
            <i className="fa-solid fa-location-dot"></i>
            {userData[index].location.country} {userData[index].location.state}{" "}
            {userData[index].location.city}
          </li>
        </ul>
      </div>
      <div className="button">
        <button onClick={usersChange}>
          <i className="fa-solid fa-shuffle"></i>
        </button>
      </div>
    </div>
  );
};

export default Card;
