import React from "react";
const IDcard = porps => {
  return (
    <div>
      <div>{porps.user.name}</div>
      <div>{porps.user.age}</div>
    </div>
  );
};

export default IDcard;
