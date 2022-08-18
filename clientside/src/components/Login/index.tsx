import React, { Fragment, useState } from "react";

import { useNavigate } from "react-router-dom";

// const submit = () => {};

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const Register = () => {
    navigate("/register");
  };

  const Home = async (user: string, pass: string) => {
    if (username !== "" && password !== "")
      try {
        const response = await fetch(
          `http://localhost:5000/users/${username}${password}`
        );
        const jsonData = await response.json();
        if (jsonData !== null) navigate("/home");
      } catch (err) {
        console.log(err);
      }
    else alert("All fields need to be filled");
  };

  return (
    <Fragment>
      <div
        className="border "
        style={{
          marginTop: "10vh",
          height: "85vh",
          width: "65vh",
          marginLeft: "65vh",
        }}
      >
        <h1 className="mt-5 text-center">Login</h1>
        <div style={{ height: "5vh" }}></div>

        <div
          className="mt-2 "
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginLeft: "8vh",
          }}
        >
          <form>
            <div className="container mt-2 center">
              {" "}
              <label htmlFor="username">Username</label>
              <input
                id="username"
                className="form-control"
                placeholder="username"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              ></input>
            </div>
            <div className="container mt-4">
              <label htmlFor="password">Password </label>
              <input
                placeholder="password"
                id="password"
                type="password"
                className="form-control"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              ></input>
            </div>
            <div className="mt-5 p-3 text-center">
              <button
                className="btn btn-primary p-2"
                onClick={() => Home(username, password)}
              >
                Login
              </button>
              <button
                className="btn btn-warning p-2 "
                style={{ marginLeft: "30px" }}
                onClick={() => {
                  Register();
                }}
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
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

export default Login;
