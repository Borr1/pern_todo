import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

const Home = () => {
  /* const useCountdown = () => {
    const countDownDate = new Date().getTime();

    const [countDown, setCountDown] = useState(
      countDownDate - new Date().getTime()
    );

    useEffect(() => {
      const interval = setInterval(() => {
        setCountDown(countDownDate - new Date().getTime());
      }, 1000);

      return () => clearInterval(interval);
    }, [countDownDate]);
  };
  */
  const navigate = useNavigate();
  const onShop = () => {
    navigate("/shops");
  };
  return (
    <Fragment>
      <div className="backgroundImg">
        <h1 className="text-center">
          <div className="logo text-center"></div>TacoDay
        </h1>

        <h1 className="a mt-3">Where everyday is a taco day</h1>
        <div className="intro border ">
          <div className="content">
            <div className="flx">
              <h1 className="nb1">5 shops</h1>
              <div className="shop"></div>
            </div>
            <div className="flx">
              <h1 className="nb2">10 meals</h1>
              <div className="meal"></div>
            </div>
          </div>
          <button className="mt-5 btn button" onClick={onShop}>
            <h1 className="bouton">SHOP NOW</h1>
          </button>
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
          Borhen Benltaief © TacoDay © 2022/2023{" "}
        </h6>
      </div>
    </Fragment>
  );
};

export default Home;
