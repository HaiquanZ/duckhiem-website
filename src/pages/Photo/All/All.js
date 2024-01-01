import { useEffect } from 'react';
import './All.css';
import { useState } from 'react';
import axios from 'axios';
import { ALL_IMAGES } from '../../../constant/const';

function All(){

    // const [listData, setList] = useState([]);

    // useEffect(()=> {
    //     axios.get('https://duckhiem.free.beeceptor.com/image')
    //     .then(response => {
    //         //console.log(response);
    //         setList(response.data)
    //     })
    //     .catch(error => console.log(error))
    // },[]);

    function handleZoom(par){
        document.querySelector(".picture").src = par;
        document.querySelector(".img--zoom").style.display = "block";
        document.querySelector(".overlay").style.display = "block";
    }

    function cancleZoom(){
        document.querySelector(".img--zoom").style.display = "none";
        document.querySelector(".overlay").style.display = "none";
    }

    return (
        <div className="All">
            <div className='overlay' onClick={cancleZoom}></div>
            <div className='img--zoom'>
                <img alt="zoom" className='picture'/>
            </div>
            <div className='content_all'>
                {
                    ALL_IMAGES.map((item) => (
                        <div key={item.id} className="post">
                            <img src={item.img} alt="imgcontent" className='img_item' onClick={()=>handleZoom(item.img)}/>
                            <h2 style={{fontWeight: "lighter"}}>{item.title}</h2>
                        </div>
                    ))
                }
            </div>

            <div style={{margin:"4rem auto"}}>
                <a className='button' href='https://www.pinterest.com/duckhiem26/_created/'>View more</a>
            </div>
        </div>
    )
}
export default All;