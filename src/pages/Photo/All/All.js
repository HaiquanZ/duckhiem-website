import './All.css';

function All(){

    const listdata = [
        {
            id: 1,
            img: "https://i.pinimg.com/236x/b6/7e/32/b67e3207642291563e0c6558c40074f2.jpg",
            title: "Lac Han Man Phong"
        },
        {
            id: 2,
            img: "https://i.pinimg.com/236x/9d/70/7c/9d707c1be25d1c27427857315549d1f6.jpg",
            title: "Lac Han Man Phong"    
        },
        {
            id: 3,
            img: "https://i.pinimg.com/236x/42/2a/6b/422a6b99cb9e091c8c05a645a77964e2.jpg",
            title: "Lac Han Man Phong"    
        },
        {
            id: 4,
            img: "https://i.pinimg.com/236x/4c/25/32/4c2532fca287f87d06b7d0139ff829db.jpg",
            title: "Lac Han Man Phong"    
        },
        {
            id: 5,
            img: "https://i.pinimg.com/236x/1d/4f/e9/1d4fe958dbe2c5abd26d7ed9e6b98084.jpg",
            title: "Lac Han Man Phong"    
        },
        {
            id: 6,
            img: "https://i.pinimg.com/236x/b0/bf/ac/b0bfac830615e8233abd8110936742b5.jpg",
            title: "Lac Han Man Phong"    
        },
        {
            id: 7,
            img: "https://i.pinimg.com/236x/5a/c9/13/5ac913e57be8d0715d1e6cd20dc07c82.jpg",
            title: "Lac Han Man Phong"    
        },
        {
            id: 8,
            img: "https://i.pinimg.com/236x/bb/1c/2e/bb1c2e643b0ad502e022d451d36ca2b6.jpg",
            title: "Lac Han Man Phong"    
        },
        {
            id: 9,
            img: "https://i.pinimg.com/236x/0a/f2/ba/0af2badafb2ff25dc6e79ec6b1338ed6.jpg",
            title: "Lac Han Man Phong"    
        },
        {
            id: 10,
            img: "https://i.pinimg.com/236x/3c/d1/91/3cd1918263e395fdc6d04a712405516f.jpg",
            title: "Lac Han Man Phong"    
        },
        {
            id: 11,
            img: "https://i.pinimg.com/564x/a9/13/37/a91337b14806e7e442358e15e87b4105.jpg",
            title: "Lac Han Man Phong"    
        },
        {
            id: 12,
            img: "https://i.pinimg.com/236x/c7/b9/31/c7b931e4e3fabf275d493f82648d0119.jpg",
            title: "Lac Han Man Phong"    
        },
        {
            id: 13,
            img: "https://i.pinimg.com/236x/e4/43/52/e44352836eeb3f6dcb37a93b89143969.jpg",
            title: "Lac Han Man Phong"    
        },
        {
            id: 14,
            img: "https://i.pinimg.com/236x/76/ca/a7/76caa7b5673ff9f82d4dc090a5e3aa31.jpg",
            title: "Lac Han Man Phong"    
        },
        {
            id: 15,
            img: "https://i.pinimg.com/736x/69/cb/2d/69cb2df0773d29e3cbe590b9ab37e714.jpg",
            title: "Lac Han Man Phong"    
        },
        
    ]

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
                    listdata.map((item) => (
                        <div key={item.id} className="post">
                            <img src={item.img} alt="imgcontent" className='img_item' onClick={()=>handleZoom(item.img)}/>
                            <h2>{item.title}</h2>
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