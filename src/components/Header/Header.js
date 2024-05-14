import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "../../pages/Home/Home";
import Taste from "../../pages/Taste/Taste";
import Painting from "../../pages/Painting/Painting";
import Photo from "../../pages/Photo/Photo";
// import Goods from "../../pages/";
// import NotFound from './NotFound';
import "./Header.scss";

const Header = () => {
  return (
    <header>
      <div className="inner">
        <div className="logo">쓔끼월드</div>
        <nav>
          <ul>
            <li>
              <a href="/taste">취향</a>
            </li>
            <li>
              <a href="/painting">그림</a>
            </li>
            <li>
              <a href="/photo">사진</a>
            </li>
            <li>
              <a href="/goods">굿즈</a>
            </li>
          </ul>
        </nav>

        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/taste" element={<Taste />} />
            <Route path="/painting" element={<Painting />} />
            <Route path="/photo" element={<Photo />} />
            {/* <Route path="/goods" element={<Goods />} />
            <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </Router>


      </div>
    </header>
  );
};

export default Header;
