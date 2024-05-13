import React from "react";
import "./Home.scss";
import Button from "../../components/Button/Button";
import bg1 from '../../assets/images/bg1.png';
// import bg2 from '../../assets/images/bg2.png';
// import bg3 from '../../assets/images/bg3.png';
// import bg4 from '../../assets/images/bg4.png';

const Home = () => {
  const numStrokes = 20;
  
  const renderStrokes = () => {
    const strokes = [];
    const containerWidth = window.innerWidth;
    const containerHeight = window.innerHeight; 
    
    for (let i = 0; i < numStrokes; i++) {
      const left = Math.random() * containerWidth;
      const top = Math.random() * containerHeight;
      const length = Math.random() * 400 + 100;

      strokes.push(
        <span
          key={i}
          className="stroke"
          style={{ left: `${left}px`, top: `${top}px`, width: `${length}px` }}
        ></span>
      );
    }
    return strokes;
  };

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
            <img src={bg1} alt="배경1" />
          </span>
          <span className="bg bg-02">
            {/* <img src={bg2} alt="배경2"></img> */}
          </span>
          <span className="bg bg-03">
            {/* <img src={bg3} alt="배경3"></img> */}
          </span>
          <span className="bg bg-04">
            {/* <img src={bg4} alt="배경4"></img> */}
          </span>

          {renderStrokes()}
        </div>
      </section>
      <Button></Button>
    </div>
  );
};

export default Home;
