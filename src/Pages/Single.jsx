import React from "react";
import { useLocation, useParams } from "react-router-dom";

function Single() {
  const { id } = useParams();
  const location = useLocation();
  console.log(location);

  return (
    <div>
      <p className="text-2xl">{location.state.title}</p>
      <p>{location.state.body}</p>
    </div>
  );
}

export default Single;
