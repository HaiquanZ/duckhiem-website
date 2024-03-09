import "./All.css";
import { child, get, ref, set } from "firebase/database";
import { database } from "../../../firebase";
import { useEffect, useState } from "react";

function All() {
  const [allImages, setAllImages] = useState([]);
  const dbRef = ref(database);

  useEffect(() => {
    get(child(dbRef, `allImages`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          //   console.log(snapshot.val());
          setAllImages(snapshot.val());
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [dbRef]);

  function checkClickPin() {
    set(ref(database, "logs/" + new Date()), {
      userAgent: navigator.userAgent,
      appVersion: navigator.appVersion,
      screenWidth: window.screen.width,
      screenHeight: window.screen.height,
      local: "pinterest",
    });
  }

  function handleZoom(par) {
    document.querySelector(".picture").src = par;
    document.querySelector(".img--zoom").style.display = "block";
    document.querySelector(".overlay").style.display = "block";
  }

  function cancleZoom() {
    document.querySelector(".img--zoom").style.display = "none";
    document.querySelector(".overlay").style.display = "none";
  }

  return (
    <div className="All">
      <div className="overlay" onClick={cancleZoom}></div>
      <div className="img--zoom">
        <img alt="zoom" className="picture" />
      </div>
      <div className="content_all">
        {allImages.map((item) => (
          <div key={item.id} className="post">
            <img
              src={item.img}
              alt="imgcontent"
              className="img_item"
              onClick={() => handleZoom(item.img)}
            />
            <h2 style={{ fontWeight: "lighter" }}>{item.title}</h2>
          </div>
        ))}
      </div>

      <div style={{ margin: "4rem auto" }}>
        <a
          className="button"
          href="https://www.pinterest.com/duckhiem26/_created/"
          onClick={checkClickPin}
        >
          View more
        </a>
      </div>
    </div>
  );
}
export default All;
