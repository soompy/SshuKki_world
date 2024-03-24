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
        <span>
          <img src="" alt="배경1"></img>
        </span>
      </section>
      <Button></Button>
    </div>
  );
};

export default Home;
