import { useEffect, useState } from 'react';
import './Portrait.css';
import axios from 'axios';
import { PORTRAIT_IMAGES } from '../../../constant/const';

function Portrait(){

    // const [listPortrait, setList] = useState([]);

    // useEffect(() => {
    //     axios.get('https://duckhiem.free.beeceptor.com/image-portrait')
    //     .then(response => setList(response.data))
    //     .catch(err => console.log(err));
    // },[]);


    return (
        <div className="Portrait">
            
            {
                PORTRAIT_IMAGES.map((item, index) => (
                    <div className='portrait_item' key={index}>
                        <div className='infor_item'>
                            <h2><div className='gr'>Name:</div> {item.name}</h2>
                            <h2><div className='gr'>Location:</div> <a href={item.linkLocation}>{item.location}</a></h2>
                        </div>
                        <div className='photo_item'>
                            {
                                item.img.map((image, id) => (
                                    <div key={id}><img src={image} alt='detail' className='detail'/></div>
                                ))
                            }
                        </div>
                    </div>
                ))
            }

        </div>
    )
}
export default Portrait;