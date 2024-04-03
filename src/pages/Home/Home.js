import React from "react";
import "./Home.scss";
import Button from "../../components/Button/Button";

const Home = () => {
  return (
    <div className="main-container">
      <section className="area-common">
        <div className="center-text">
          <p>쓔끼</p>
          <p>월드</p>
        </div>
      </section>

      <section className="area-common">
        <div className="bg-box">
          <span className="bg bg-01">
            <img src="" alt="배경1"></img>
          </span>
          <span className="bg bg-02">
            <img src="" alt="배경2"></img>
          </span>
          <span className="bg bg-03">
            <img src="" alt="배경3"></img>
          </span>
          <span className="bg bg-04">
            <img src="" alt="배경4"></img>
          </span>
        </div>
      </section>
      <Button></Button>
    </div>
  );
};

export default Home;
