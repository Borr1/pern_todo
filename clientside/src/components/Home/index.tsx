import React, { Fragment } from "react";

const Home = () => {
  return (
    <Fragment>
      <h1 className="text-center">Home</h1>

      <div
        style={{
          position: "fixed",
          left: 0,
          bottom: 0,
          right: 0,
          backgroundColor: "grey",
        }}
      >
        <h6
          className="text-center"
          style={{ color: "white", fontWeight: "lighter" }}
        >
          Borhen Benltaief © Pern_todo © 2022/2023{" "}
        </h6>
      </div>
    </Fragment>
  );
};

export default Home;
