import { useEffect, useState } from "react";
import All from "./All/All";
import Portrait from "./Portrait/Portrait";
import "./Photography.css";
import { ref, set } from "firebase/database";
import { database } from "../../firebase";

function Photography() {
  useEffect(() => {
    set(ref(database, "logs/" + new Date()), {
      userAgent: navigator.userAgent,
      appVersion: navigator.appVersion,
      screenWidth: window.screen.width,
      screenHeight: window.screen.height,
      local: "photo",
      ip: localStorage.getItem('ip')
    });
  }, []);

  const [type, setType] = useState(<All />);

  useEffect(() => {
    document.title = "Photography";
  }, []);

  function handleToAll() {
    setType(<All />);
    document.querySelector(".btn_all").style.color = "var(--main-color)";
    document.querySelector(".btn_portrait").style.color = "#C0C0C0";
    document.querySelector(".btn_all").style.borderBottom =
      "3px solid var(--main-color)";
    document.querySelector(".btn_portrait").style.borderBottom = "none";
  }
  function handleToPortrait() {
    setType(<Portrait />);
    document.querySelector(".btn_all").style.color = "#C0C0C0";
    document.querySelector(".btn_portrait").style.color = "var(--main-color)";
    document.querySelector(".btn_portrait").style.borderBottom =
      "3px solid var(--main-color)";
    document.querySelector(".btn_all").style.borderBottom = "none";
  }

  function checkClickPin(){
    set(ref(database, "logs/" + new Date()), {
        userAgent: navigator.userAgent,
        appVersion: navigator.appVersion,
        screenWidth: window.screen.width,
        screenHeight: window.screen.height,
        ip: localStorage.getItem('ip'),
        local: "pinterest",
      });
  }

  return (
    <div className="Photography">
      <div className="row">
        <img
          alt="Minh hoa"
          src="https://i.imgur.com/suGLvOE.png"
          className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
        />
        <div className="notp col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <h1>
            <div style={{ color: "var(--main-color)" }}>Message: </div>I like
            photography. These are the pictures that which I took
          </h1>
        </div>
      </div>

      <div style={{ margin: "4rem auto" }} >
        <a
          className="button"
          href="https://www.pinterest.com/duckhiem26/_created/"
          onClick={checkClickPin}
        >
          View all picture on Pinterest
        </a>
      </div>

      <div className="type">
        <button className="btn_all" onClick={handleToAll}>
          Newlest
        </button>
        <button className="btn_portrait" onClick={handleToPortrait}>
          Portrait
        </button>
      </div>

      {type}
    </div>
  );
}
export default Photography;
