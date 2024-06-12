import React from "react";

function Navbar() {
  return (
    <div className="navbar">
      <div className="first-div">
        <div className="header">
          <div className="icon">
            <i class="fa-solid fa-user"></i>
          </div>
          <div id="h1">
            <p>Boss Ultimate</p>
          </div>
          <div className="icon-1">
            <i class="fa-solid fa-bars"></i>
          </div>
        </div>
      </div>
      <div className="second-div">
        <div className="search-bar">
          <input type="text" placeholder="search" className="search" />
        </div>
        <div className="search-icon">
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>
        <div className="pipe">|</div>
        <div className="bell">
          <i class="fa-solid fa-bell"></i>
        </div>
        <div className="badge">4</div>
        <div className="img-1">
          <img
            className="imges"
            src=" https://worldywcacouncil.org/wp-content/uploads/2014/10/speaker-2-v2.jpg"
            height={"70px"}
            width={"70px"}
          />
        </div>
        <div className="img-2">
          <img
            className="imges-2"
            src="https://worldywcacouncil.org/wp-content/uploads/2014/10/speaker-2-v2.jpg"
            height={"100px"}
            width={"100px"}
          />
        </div>
        <div className="contain">
          <h2>John Doe</h2>
          <p>Administrator</p>
        </div>
        <div className="nav">
          <ul>
            <li>
              <i id="emoji" class="fa-brands fa-windows"></i>
              <a href="Form.jsx">Dashboard</a>
              <i id="icons-1" class="fa-solid fa-angle-down"></i>
            </li>
            <li>
              <i id="emoji" class="fa-solid fa-grip"></i>
              <a href="#">Layouts</a>
              <i id="icons-2" class="fa-solid fa-angle-down"></i>
            </li>
            <li>
              <i id="emoji" class="fa-solid fa-table"></i>
              <a href="#"> Tables</a>
              <i id="icons-3" class="fa-solid fa-angle-down"></i>
              <div className="dropdown">
              <ul className="sub-menu">
                <li className="sub-li">
                  <a href="#">Basic Table</a>
                </li>
                <li className="sub-li">
                  <a href="#">CRUD Table</a>
                </li>
                <li className="sub-li">
                  <a href="#">Data Table</a>
                </li>
                <li className="sub-li">
                  <a href="#">Table Playgound</a>
                </li>
                <li className="sub-li">
                  <a href="#">Tree Table</a>
                </li>
              </ul>
              </div>
            </li>
          
            <li>
              <i id="emoji" class="fa-solid fa-pen"></i>
              <a href="#"> Form Button</a>
              <i id="icons-4" class="fa-solid fa-angle-down"></i>
            </li>
            <li>
              <i id="emoji" class="fa-solid fa-flag"></i>
              <a href="#"> Ul Elements</a>
              <i id="icons-5" class="fa-solid fa-angle-down"></i>
            </li>
            <li>
              <i id="emoji" class="fa-solid fa-chart-simple"></i>
              <a href="#">Charts</a>
              <i id="icons-6" class="fa-solid fa-angle-down"></i>
            </li>
            <li>
              <i id="emoji" class="fa-brands fa-app-store-ios"></i>
              <a href="#">Apps</a>
              <i id="icons-7" class="fa-solid fa-angle-down"></i>
            </li>
            <li>
              <i id="emoji" class="fa-solid fa-file"></i>
              <a href="#"> Pages</a>
              <i id="icons-8" class="fa-solid fa-angle-down"></i>
            </li>
            <li>
              <i id="emoji" class="fa-regular fa-map"></i>
              <a href="#"> Maps</a>
              <i id="icons-9" class="fa-solid fa-angle-down"></i>
            </li>
            <li>
              <i id="emoji" class="fa-solid fa-bars-staggered"></i>
              <a href="#"> Menu Levels</a>
              <i id="icons-10" class="fa-solid fa-angle-down"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
