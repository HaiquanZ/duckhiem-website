import "./Portrait.css";
import { child, get, ref } from "firebase/database";
import { database } from "../../../firebase";
import { useEffect, useState } from "react";

function Portrait() {
  const [portraitImages, setImages] = useState([]);
  const dbRef = ref(database);
  useEffect(() => {
    get(child(dbRef, `portraitImages`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          //   console.log(snapshot.val());
          console.log(snapshot);
          setImages(snapshot.val());
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [dbRef]);

  return (
    <div className="Portrait">
      {portraitImages.map((item, index) => (
        <div className="portrait_item" key={index}>
          <div className="infor_item">
            <h2>
              <div className="gr">Name:</div> {item.name}
            </h2>
            <h2>
              <div className="gr">Location:</div>{" "}
              <a href={item.linkLocation}>{item.location}</a>
            </h2>
          </div>
          <div className="photo_item">
            {item.img.map((image, id) => (
              <div key={id}>
                <img src={image} alt="detail" className="detail" />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
export default Portrait;
