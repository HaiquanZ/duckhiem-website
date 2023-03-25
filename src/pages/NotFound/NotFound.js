import { Link } from "react-router-dom";
import './NotFound.css';
function NotFound(){
    return (
        <div className="NotFound row">
            <img 
                src="https://i.imgur.com/dERd0jV.jpg" alt="404NotFound"
                className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
            />
            <div 
                className="notfound_text col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5"
            >
                <h1
                    style={{marginBottom:"4rem"}}
                >Oh, I couldn't find the page which you are looking</h1>
                <Link to="/" className="button">Back to home page</Link>
            </div>
        </div>
    )
}
export default NotFound;