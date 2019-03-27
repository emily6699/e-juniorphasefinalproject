import React from "react";

const Campus = props => {
  const { name, imageUrl, address, description } = props.campus;
  return (
    <div>
      <h1>{name}</h1>
      <img src={imageUrl} />
      <h2>{address}</h2>
      <h4>{description}</h4>
    </div>
  );
};

export default Campus;
