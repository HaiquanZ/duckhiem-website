import { useEffect } from "react";
import "./About.css";
import { ref, set } from "firebase/database";
import { database } from "../../firebase";

function About() {
  useEffect(() => {
    set(ref(database, "logs/" + new Date()), {
      userAgent: navigator.userAgent,
      appVersion: navigator.appVersion,
      screenWidth: window.screen.width,
      screenHeight: window.screen.height,
      local: "about",
    });
  }, []);

  useEffect(() => {
    document.title = "About";
  }, []);

  function handleShowAlert() {
    document.getElementById("bank").style.display = "block";
    document.getElementById("overlay2").style.display = "block";
  }
  function handleHideAlert() {
    document.getElementById("bank").style.display = "none";
    document.getElementById("overlay2").style.display = "none";
  }

  return (
    <div className="About">
      <div id="overlay2" onClick={handleHideAlert}></div>
      <div id="bank">
        <h1>
          Thank you for your contribution
          <i className="fa-solid fa-heart"></i>
        </h1>
        <div className="bank_infor">
          <img src="https://i.imgur.com/hvO7TM2.png" alt="scan me" />
          <div className="bank_text">
            <div style={{ margin: "1rem auto" }}>
              <h2>Ngan hang: Vietcombank</h2>
              <h2>STK: 1014943459</h2>
              <h2>Chu tai khoan: Do Duc Khiem</h2>
            </div>
          </div>
        </div>
        <button
          onClick={handleHideAlert}
          className="button"
          style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
        >
          OK
        </button>
      </div>

      <div className="infor row">
        <img
          className="infor_img col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
          alt="avatar"
          src="https://i.imgur.com/WR3TeAn.png"
        />
        <div className="infor_text col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <h1>ABOUT ME</h1>
          <h1 style={{ marginBottom: "2rem" }}>
            I'm just an ordinary person and bla...bla...
          </h1>
          <h2 style={{ color: "var(--main-color)" }}>Name</h2>
          <h2>Do Duc Khiem</h2>
          <h2 style={{ color: "var(--main-color)" }}>Email</h2>
          <h2>nn764562@gmail.com</h2>
          <h2 style={{ color: "var(--main-color)" }}>Describe</h2>
          <h2>Khiêm ngoan ngoãn, hiền lành :)))</h2>
        </div>
      </div>

      {/* <button onClick={handleShowAlert} className="button donate">Donate me</button> */}

      <div className="row cm">
        <div className="col-md-0 col-lg-1 col-xl-2"></div>
        <div className="col-12 col-sm-12 col-md-5 col-lg-4 col-xl-3">
          <div className="chat">
            <h1 style={{ padding: "1rem" }}>Chat</h1>
            <img src="https://i.imgur.com/RBoJceR.png" alt="mewo" />
            <h2>Talk with me</h2>
            <h2>Don't be shy</h2>
            <div className="wrap_btn">
              <a href="https://m.me/hqz.khim" className="button">
                Say "hi"
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-2 col-lg-2 col-xl-2"></div>
        <div className="col-12 col-sm-12 col-md-5 col-lg-4 col-xl-3">
          <div className="donate">
            <h1 style={{ padding: "1rem" }}>Donate</h1>
            <img src="https://i.imgur.com/zbcDycc.jpg" alt="mewo" />
            <h2>Topic</h2>
            <h2>Ăn xin online</h2>
            <div className="wrap_btn">
              <button onClick={handleShowAlert} className="button">
                Donate me
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-0 col-lg-1 col-xl-2"></div>
      </div>
    </div>
  );
}
export default About;
