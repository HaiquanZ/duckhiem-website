import { useEffect, useState } from "react";
import "./Memory.css";
import { ref, child, get, set } from "firebase/database";
import { database } from "../../firebase";

function Memory() {
  const [list, setList] = useState([]);
  const dbRef = ref(database);

  useEffect(() => {
    set(ref(database, "logs/" + new Date()), {
      userAgent: navigator.userAgent,
      appVersion: navigator.appVersion,
      screenWidth: window.screen.width,
      screenHeight: window.screen.height,
      local: "memory",
      ip: localStorage.getItem('ip')
    });
  }, []);

  useEffect(() => {
    get(child(dbRef, `memories`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
          setList(snapshot.val());
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [dbRef]);

  useEffect(() => {
    document.title = "Memory";
  }, []);

  function handleClickItem(link) {
    window.location = link;
  }

  return (
    <div className="Memory">
      <div className="intro">
        <div className="row">
          <img
            src="https://img.upanh.tv/2023/03/11/back.gif"
            alt=""
            className="intro_gif col-12 col-md-7 col-lg-7 col-xl-7"
          />
          <div className="intro_text col-12 col-md-5 col-lg-5 col-xl-5">
            <h1>MAKING</h1>
            <h1 className="under">MEMORIES</h1>
            <p>This section saves my memories</p>
          </div>
        </div>
      </div>

      <div className="content">
        <div className="row gy-5">
          {list.map((item) => (
            <div
              className="item col-6 col-sm-6 col-md-6 col-lg-4 col-xl-3"
              key={item.local}
            >
              <div
                className="content_item"
                onClick={() => handleClickItem(item.url)}
              >
                <img src={item.img} alt="" className="item_img" />
                <div className="item_detail">
                  <h1>{item.local}</h1>
                  <div className="item_time">
                    <i className="fa-regular fa-calendar"></i>
                    <h3>{item.time}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Memory;
