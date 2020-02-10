import React from "react";
const IDcard = porps => {
  return (
    <div>
      <div>{porps.user.name}</div>
      <div>{porps.user.age}</div>
      <img src={porps.user.img} alt="porps.user.name" />
    </div>
  );
};

export default IDcard;
