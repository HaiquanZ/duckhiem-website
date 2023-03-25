import { useEffect } from "react";
import { Link } from "react-router-dom";
import './Home.css';

function Home(){

    useEffect(() => {
        document.title = 'DucKhim';
    },[])

    return(
        <div className="Home">
            <div className="row first">
                <div className="first_text col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <h1 className="font-script">Welcome to my website</h1>
                    <button className="button">Get Started</button>
                </div>
                <img className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6" alt="intro" src="https://i.imgur.com/2rJbhuX.jpg"/>
            </div>

            <div className="describe">
                <h1>DESCRIBE</h1>
                <h2 style={{fontWeight:'lighter'}}>
                    This website is my personal website. It is made by me.
                    <br/>
                    I want to keep and share my memories here.
                </h2>
            </div>

            <div className="discover row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    <h1>Discover</h1>
                </div>
                <Link to ='/photography' className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
                    <div className="item_discover">
                        <i className="fa-solid fa-camera"></i>
                        Photography
                    </div >
                </Link>
                <Link to='/memory' className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
                    <div className="item_discover">
                        <i className="fa-solid fa-film"></i>
                        Memory
                    </div >
                </Link>
                <a href="https://www.youtube.com/channel/UCP6s9D_9RC6mUqNEj2JjHJA" className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
                    <div className="item_discover">
                        <i className="fa-brands fa-youtube"></i>
                        Channel
                    </div >
                </a>
                <Link to='/about' className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
                    <div className="item_discover">
                        <i className="fa-solid fa-user"></i>
                        About
                    </div >
                </Link>
            </div>

            
        </div>
    )
}
export default Home;