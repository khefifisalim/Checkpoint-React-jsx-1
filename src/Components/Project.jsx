import React from "react";
import free from "../Logo/free.jpg";

const Project = () => {
  return (
    <div>
      <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
        <h1 className="Title">Salim Khefifi</h1>
        <p>
          <img src={free} width="100px" alt="" />
        </p>
        <p>
          <img src="/Images/palestine.jpg" alt="" />
        </p>
      </div>
      <video width="320" height="240" controls />
      <source src="../video/V1.mp4" type="video/mp4" />
    </div>
  );
};

export default Project;
