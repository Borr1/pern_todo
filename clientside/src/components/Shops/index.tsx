import React, { Fragment } from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";
const Shops = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/shop");
  };
  return (
    <Fragment>
      <div className="shops">
        <div className="backgroundImg">
          <div className="logo"></div>
        </div>
      </div>
      <div className="mt-2">
        <h1 className="minititre text-center">Our shops</h1>
      </div>

      <div className="contentMagasins">
        {" "}
        <div className="magasins">
          <a href="http://localhost:3000/shop">
            <figure>
              <div className="date">
                <span className="card-date-day">Open</span>
                <span className="card-date-month">{"💵"}</span>
              </div>

              <figcaption className="text-center">
                <h4>
                  <span>Tacoday Lac2</span>
                </h4>
                <div className="address">
                  <h5>Lac2 12542 CarthqsdqsdageLand</h5>
                </div>
              </figcaption>
            </figure>
          </a>
          <a href="http://localhost:3000/shop">
            <figure>
              <div className="date">
                <span>Open</span>
                <span>{"💵💳🚚"}</span>
              </div>
              <figcaption>
                <h4>
                  {" "}
                  <span>Tacoday Nasr</span>
                </h4>
                <div className="address">
                  <h5>Nasr 12542 CssageLand</h5>
                </div>
              </figcaption>
            </figure>
          </a>
          <div onClick={(e) => onClick()} className="mouseOver">
            <figure>
              <div className="date">
                <span className="card-date-day">Open</span>
                <span className="card-date-month">{"💵🚚"}</span>
              </div>
              <figcaption>
                <h4>
                  <span>Tacoday Douz</span>
                </h4>
                <div className="address">
                  <h5>Douz 12542 qsdCssageLand</h5>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
        <div className="magasins">
          <a href="http://localhost:3000/shop">
            <figure>
              <div className="date">
                <span className="card-date-day">Open</span>
                <span className="card-date-month">{"💵💳🚚"}</span>
              </div>
              <figcaption>
                <h4>
                  {" "}
                  <span>Tacoday Marsa</span>
                </h4>
                <div className="address">
                  <h5>Marsa 12542 CssageLand</h5>
                </div>
              </figcaption>
            </figure>
          </a>
          <a href="http://localhost:3000/shop">
            <figure>
              <div className="date">
                <span className="card-date-day">Close</span>
                <span className="card-date-month">{"💵💳"}</span>
              </div>
              <figcaption>
                <h4>
                  <span>Tacoday Menzah6</span>
                </h4>
                <div className="address">
                  <h5>Menzah6 12542 CssageLand</h5>
                </div>
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
