import React, { Fragment, useState, useEffect } from "react";

import "./index.css";
import { useLocation, useNavigate } from "react-router-dom";

const Shops = () => {
  type Shop = {
    uid: string;
    designation: string;
    schedule: JSON;
    address: string;
    image: string;
    mdp: { cash: string; card: string };
    mdv: { delivery: string };
  };
  const [day, setDay] = useState("");
  const [time, setTime] = useState("");
  useEffect(() => {
    const date = new Date();
    setDay(`${date.getDay()}`);
    let hours: string;
    let mins: string;
    if (date.getHours() >= 10) hours = `${date.getHours()}`;
    else hours = "0" + date.getHours();

    if (date.getMinutes() >= 10) mins = `${date.getMinutes()}`;
    else mins = "0" + date.getMinutes();

    const hor = hours + ":" + mins;
    setTime(hor);
  }, []);

  const location = useLocation();
  const shops: any = location.state;

  const navigate = useNavigate();

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
          {shops.map((shop: Shop, index: number) => {
            // return time;

            const avaiable = () => {
              let bool = "Close";
              const sched: any = shop.schedule;
              console.log(day);
              for (let i = 0; i < sched["0"].length; i++) {
                if (time >= sched["0"][i].start && time <= sched["0"][i].finish)
                  bool = "Open";
                else bool = "Close";
              }
              return bool;
            };

            const mdp_mdv = () => {
              let output = "";
              if (shop.mdp.cash === "true") output += "💵";
              if (shop.mdp.card === "true") output += "💳";
              if (shop.mdv.delivery === "true") output += "🚚";
              return output;
            };

            return (
              <div
                onClick={() => {
                  navigate("/shop", { state: shop });
                }}
                key={index}
              >
                <figure>
                  <div className="date">
                    <span className="card-date-day">{avaiable()}</span>
                    <span className="card-date-month">{mdp_mdv()}</span>
                  </div>

                  <figcaption className="text-center">
                    <h4>
                      <span>{shop.designation}</span>
                    </h4>
                    <div className="address">
                      <h5>{shop.address}</h5>
                    </div>
                  </figcaption>
                </figure>
              </div>
            );
          })}

          {/*
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
          </a> */}
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
