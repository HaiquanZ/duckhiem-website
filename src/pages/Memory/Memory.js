import { useEffect } from "react";
import './Memory.css';

function Memory(){

    const list = [
        {
            local: "Pet",
            time: "Constantly Updated",
            img: "https://hips.hearstapps.com/hmg-prod/images/domestic-cat-lies-in-a-basket-with-a-knitted-royalty-free-image-1592337336.jpg?crop=0.668xw:1.00xh;0.247xw,0&resize=1200:*",
            url: "https://drive.google.com/drive/folders/1o1k8K8g7kMy723g7jDFPQPNyVrCwi4kc?usp=sharing"
        },
        {
            local: "Tam Dao",
            time: "07/10/2023",
            img: "https://i.imgur.com/b0ogXhN.jpg",
            url: "https://drive.google.com/drive/folders/1CnCrmxpXxFne_BfWOmGHVturx_uON_3b?usp=sharing"
        },
        {
            local: "Ho Dong Do",
            time: "11/02/2023",
            img: "https://img.upanh.tv/2023/02/13/20230211_163213703b29d3ff7d7047.png",
            url: "https://drive.google.com/drive/folders/1OI-s84NFsVCFMlejj1tQww5bR4usbEWT?usp=sharing"
        },
        {
            local: "Mừng đông về",
            time: "26/10/2022",
            img: "https://i.imgur.com/NoCCF8j.jpg",
            url: "https://www.youtube.com/watch?v=qInr26_auHM"
        },
        {
            local: "Nui Tram",
            time: "02/05/2022",
            img: "https://i.imgur.com/WDZPgJ4.jpg",
            url: "https://drive.google.com/drive/folders/1opzOGQnkUIq8iqZkCgACkpMexUFuWv0A?usp=sharing"
        },
        {
            local: "Ha Dong Trip",
            time: "07/2021",
            img: "https://i.imgur.com/PwlJqU4.jpg",
            url: "https://drive.google.com/drive/folders/1Is-OFPH58i0hF_MOwxw6Ii6Jqg44cTFf?usp=sharing"
        },
        {
            local: "Ban Rom",
            time: "02/05/2021",
            img: "https://i.imgur.com/atW8XcF.jpg",
            url: "https://drive.google.com/drive/folders/1sursvHoPHvJsamndfscgSRDTT8P5U2YG?usp=sharing"
        },
        {
            local: "Vinh Tuy",
            time: "21/04/2021",
            img: "https://i.imgur.com/AqQoioX.jpg",
            url: "https://drive.google.com/drive/folders/1vSKiQ6XKhc7ErXtO2vrpvmVvxz3q4qdZ?usp=sharing"
        },
        {
            local: "Ho Ham Lon",
            time: "14/03/2019",
            img: "https://i.imgur.com/T2WDgPZ.jpg",
            url: "https://drive.google.com/drive/folders/1Be4pBD9sQY_zpzVWAcBk8R33wbA-gHKk?usp=sharing"
        },
        {
            local: "Yen Phong 1",
            time: "2017-2020",
            img: "https://i.imgur.com/seWN8uM.jpg",
            url: "https://drive.google.com/drive/folders/19xTWVpp0AbjCvAUxfXl9G4sSv3OtcmiQ?usp=sharing"
        }
    ]

    // const [list, setList] = useState([]);

    useEffect(() => {
        document.title = 'Memory';
        // fetch('https://testapi.io/api/duckhiem26//website/memory')
        //     .then(res =>res.json())
        //     .then((result)=>{
        //         setList(result);
        //     })
    },[])

    // console.log(list);

    function handleClickItem(link){
        window.location = link;
    }

    return(

        <div className="Memory">
            <div className="intro">
                <div className="row">
                    <img src="https://img.upanh.tv/2023/03/11/back.gif" alt="" className="intro_gif col-12 col-md-7 col-lg-7 col-xl-7"/>
                    <div 
                    className="intro_text col-12 col-md-5 col-lg-5 col-xl-5"
                    >
                        <h1>MAKING</h1>
                        <h1 className="under">MEMORIES</h1>
                        <p>This section saves my memories</p>
                    </div>
                </div>

            </div>

            <div className="content">
                <div className="row gy-5">
                    
                    {
                        list.map((item)=>(
                            <div className="item col-6 col-sm-6 col-md-6 col-lg-4 col-xl-3" key={item.local}>
                                <div className="content_item" onClick={()=>handleClickItem(item.url)}>
                                    <img src={item.img} alt="" className="item_img"/>
                                    <div className="item_detail">
                                        <h1>{item.local}</h1>
                                        <div className="item_time">
                                            <i className="fa-regular fa-calendar"></i>
                                            <h3>{item.time}</h3>
                                        </div>
                                    </div>
                                </div >
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}
export default Memory;