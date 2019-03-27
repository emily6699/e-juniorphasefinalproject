/* eslint-disable quotes */
import React from "react";
// eslint-disable-next-line quotes
import { Link } from "react-router-dom";

const Student = props => {
  const { firstName, lastName, email, imageUrl, gpa, campus } = props.student;
  return (
    <div>
      <h2>
        {firstName} {lastName}
      </h2>
      <h3>Email: {email}</h3>
      <h4>GPA: {gpa}</h4>
      <img src={imageUrl} />
      {campus && campus.name ? (
        <Link to={`/campuses/${campus.id}`}>
          <h4>{campus.name}</h4>
        </Link>
      ) : (
        <h4>No campus available</h4>
      )}
    </div>
  );
};

export default Student;
