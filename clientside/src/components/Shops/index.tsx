import React, { Fragment } from "react";
import "./index.css";
const Shops = () => {
  return (
    <Fragment>
      <div className="shops">
        <div className="backgroundImg">
          <h1>HELLo</h1>
        </div>
      </div>
      <div>
        <h1 className="minititre">Our shops</h1>
      </div>

      <div className="contentMagasins">
        {" "}
        <div className="magasins">
          <a href="http://localhost:3000/">
            <figure>
              <div className="date">
                <span className="card-date-day">Open</span>
                <span className="card-date-month">{"   "}</span>
              </div>
              <figcaption>
                <h4>
                  {" "}
                  <span>Tacoday Lac2</span>
                </h4>
                <p></p>
              </figcaption>
            </figure>
          </a>
          <a href="http://localhost:3000/">
            <figure>
              <div className="date">
                <span className="card-date-day">Open</span>
                <span className="card-date-month">{"   "}</span>
              </div>
              <figcaption>
                <h4>
                  {" "}
                  <span>Tacoday Nasr</span>
                </h4>
                <p></p>
              </figcaption>
            </figure>
          </a>
          <a href="http://localhost:3000/">
            <figure>
              <div className="date">
                <span className="card-date-day">Open</span>
                <span className="card-date-month">{"   "}</span>
              </div>
              <figcaption>
                <h4>
                  {" "}
                  <span>Tacoday Douz</span>
                </h4>
                <p></p>
              </figcaption>
            </figure>
          </a>
        </div>
        <div className="magasins">
          <a href="http://localhost:3000/">
            <figure>
              <div className="date">
                <span className="card-date-day">Open</span>
                <span className="card-date-month">{"   "}</span>
              </div>
              <figcaption>
                <h4>
                  {" "}
                  <span>Tacoday Marsa</span>
                </h4>
                <p></p>
              </figcaption>
            </figure>
          </a>
          <a href="http://localhost:3000/">
            <figure>
              <div className="date">
                <span className="card-date-day">Open</span>
                <span className="card-date-month">{"   "}</span>
              </div>
              <figcaption>
                <h4>
                  {" "}
                  <span>Tacoday Menzah6</span>
                </h4>
                <p></p>
              </figcaption>
            </figure>
          </a>
        </div>
      </div>

      <div
        style={{
          position: "fixed",
          left: 0,
          bottom: 0,
          right: 0,
          backgroundColor: "#292929",
        }}
      >
        <h6
          className="text-center"
          style={{ color: "white", fontWeight: "lighter" }}
        >
          Borhen Benltaief © TacoDay © 2022/2023{" "}
        </h6>
      </div>
    </Fragment>
  );
};

export default Shops;
