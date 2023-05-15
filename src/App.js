import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Memory from './pages/Memory/Memory';
import About from './pages/About/About';
import Photography from './pages/Photo/Photography';
import Footer from './pages/Footer/Footer';
import NotFound from './pages/NotFound/NotFound';

function App() {

  function showList(){
    document.getElementById("overlay").style.display = "block";
    document.getElementById("menu").style.display = "block";
    document.getElementById("menu").style.opacity = 1;
    document.getElementById("menu").style.transform= "translateX(0)";
  }

  function hideList(){
    document.getElementById("overlay").style.display = "none";
    document.getElementById("menu").style.display = "none";
  }


  return (

    // nav-bar
    <div className="App container">
      <div className="header">
            
        <Link to="/" className="header_item font-script">DucKhim</Link>
        <div className="menubar">
            <Link to="/" className="header_item">Home</Link>
            <Link to="/photography" className="header_item">Photography</Link>
            <Link to="/memory" className="header_item">Memory</Link>
            <Link to="/about" className=" header_item">About</Link>
        </div>
      </div>
      {/* mobile */}
      <div className="mobile_big">
            
        <div className="mobile">
            <Link to="/" className="header_item font-script">DucKhim</Link>
            
            <i className="fa-solid fa-bars list_icon" onClick={showList}></i>
            
        </div>
        
        <div className='mobile_overlay' id="overlay" onClick={hideList}></div>
        
        <div className="mobile_menu" id="menu">
            <div className="mobile_first">
                <Link to="/" className="mobile_firstitem font-script" onClick={hideList}>DucKhim</Link>
                
                <i onClick={hideList} className="fa-solid fa-circle-xmark mobile_firstitem mobile_nav"></i>
                

            </div>
            <Link to="/" className="mobile_menuitem" onClick={hideList}>
                <i className="fa-solid fa-house"></i>
                Home
            </Link>
            <Link to="/photography" className="mobile_menuitem" onClick={hideList}>
                <i className="fa-solid fa-camera"></i>
                Photography
            </Link>
            <Link to="/memory" className="mobile_menuitem" onClick={hideList}>
                <i className="fa-solid fa-film"></i>
                Memory
            </Link>
            <Link to="/about" className="mobile_menuitem" onClick={hideList}>
                <i className="fa-solid fa-user"></i>
                About
            </Link>
        </div>

        

      </div>

      {/* main content */}

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/photography" element={<Photography/>}></Route>
        <Route path="/memory" element={<Memory/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
      
      {/* footer */}
      <Footer/>

    </div>
  );
}

export default App;
