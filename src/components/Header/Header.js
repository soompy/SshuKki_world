import React from "react";
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
      </div>
    </header>
  );
};

export default Header;
