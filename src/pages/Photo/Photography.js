import { useEffect, useState } from "react";
import All from "./All/All";
import Portrait from "./Portrait/Portrait";
import './Photography.css';

function Photography(){

    const [type, setType] = useState(<All/>);

    useEffect(() => {
        document.title = 'Photography';
    },[])

    function handleToAll(){
        setType(<All/>);
        document.querySelector(".btn_all").style.color = "var(--main-color)";
        document.querySelector(".btn_portrait").style.color = "#C0C0C0";
        document.querySelector(".btn_all").style.borderBottom = "3px solid var(--main-color)";
        document.querySelector(".btn_portrait").style.borderBottom = "none";
        
    }
    function handleToPortrait(){
        setType(<Portrait/>);
        document.querySelector(".btn_all").style.color = "#C0C0C0";
        document.querySelector(".btn_portrait").style.color = "var(--main-color)";
        document.querySelector(".btn_portrait").style.borderBottom = "3px solid var(--main-color)";
        document.querySelector(".btn_all").style.borderBottom = "none";
        
    }

    return(
        <div className="Photography">
            <div className="row">
                <img alt="Minh hoa" src="https://i.imgur.com/suGLvOE.png" className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"/>
                <div className="notp col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <h1><div style={{color:"var(--main-color)"}}>Message: </div> I'm not a photographer. I'm a person who loves taking pictures</h1>
                </div>
            </div>


            <div className="type">
                <button className="btn_all"
                    onClick={handleToAll}
                >
                    Newlest
                </button>
                <button className="btn_portrait"
                    onClick={handleToPortrait}
                >
                    Portrait
                </button>
            </div>

            {type}

        </div>
    )
}
export default Photography;