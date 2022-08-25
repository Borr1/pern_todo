import React, { Fragment } from "react";
// import {useEffect, useRef, useState } from "react";
import "./index.css";
import { useLocation, useNavigate } from "react-router-dom";

const Shops = () => {
  type Shop = {
    uid: string;
    designation: string;
    schdule: JSON;
    address: string;
    image: string;
    mdp: JSON;
    mdv: JSON;
  };

  const location = useLocation();
  const shops: any = location.state;

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
          {shops.map((shop: Shop, index: number) => {
            // function timeOpen(): boolean {
            //   const date = new Date();
            //   const time = date.getHours() + ":" + date.getMinutes();
            //   const day = date.getDay();
            //   let bool = false;
            //   const sched = shop.schedule.day;
            //   for (let i = 0; i < sched.length; i++)
            //     if (time >= sched[i].start && time <= sched[i].finish)
            //       bool = true;
            //   return bool;
            // }
            return (
              <a href="http://localhost:3000/shop" key={index}>
                <figure>
                  <div className="date">
                    <span className="card-date-day">{}</span>
                    <span className="card-date-month">{"💵"}</span>
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
              </a>
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
