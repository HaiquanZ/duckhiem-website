import './All.css';

function All(){

    const listdata = [
        {
            id: 1,
            img: "https://i.pinimg.com/564x/56/30/de/5630de4e23349fda6a3df49e0457f58a.jpg",
            title: "Suan Cien"
        },
        {
            id: 2,
            img: "https://i.pinimg.com/564x/17/ec/19/17ec195257c1b2d891bdc08e0e761552.jpg",
            title: "No caption"    
        },
        {
            id: 3,
            img: "https://i.pinimg.com/736x/a0/78/52/a0785266edf6ccbe8c84896708f7fff1.jpg",
            title: "No caption"    
        },
        {
            id: 4,
            img: "https://i.pinimg.com/564x/50/4d/15/504d1537a326748a91a715f5f2b0d794.jpg",
            title: "Sunset"    
        },
        {
            id: 5,
            img: "https://i.pinimg.com/564x/25/e3/a1/25e3a11fd2e33d48051af0f914e482ab.jpg",
            title: "DucKhim"    
        },
        {
            id: 6,
            img: "https://i.pinimg.com/736x/23/67/02/2367027129300eae45bb18133b96df5c.jpg",
            title: "No caption"    
        },
        {
            id: 7,
            img: "https://i.pinimg.com/564x/6b/5f/5e/6b5f5e0c0804d908ee7b7cad4988ceda.jpg",
            title: "No caption"    
        },
        {
            id: 8,
            img: "https://i.pinimg.com/564x/24/43/53/24435348ab00f08f4b5eec1fb0ade874.jpg",
            title: "Girl"    
        },
        {
            id: 9,
            img: "https://i.pinimg.com/564x/6b/f7/6d/6bf76de1c3482f27c67b30540d4eb4c4.jpg",
            title: "Light bulb"    
        },
        {
            id: 10,
            img: "https://i.pinimg.com/736x/72/74/65/727465d50535c1f00dd5e40872928e8e.jpg",
            title: "No caption"    
        },
        {
            id: 11,
            img: "https://i.pinimg.com/736x/a5/3a/d4/a53ad4c6eefc08555b571febc3929247.jpg",
            title: "No caption"    
        },
        {
            id: 12,
            img: "https://i.pinimg.com/564x/11/b8/bf/11b8bf9db22b35fd7811f3b1fc6f2ab0.jpg",
            title: "Sunset"    
        },
        {
            id: 13,
            img: "https://i.pinimg.com/564x/4e/bb/49/4ebb4911a2e676e93786da70d56b7b83.jpg",
            title: "Girl"    
        },
        {
            id: 14,
            img: "https://i.pinimg.com/564x/5a/b3/52/5ab35263a8ef78c7627ad74de72a0ca0.jpg",
            title: "No caption"    
        },
        {
            id: 15,
            img: "https://i.pinimg.com/564x/bd/28/53/bd2853783ce152a838f1e7e475b49444.jpg",
            title: "Couple"    
        },
        {
            id: 16,
            img: "https://i.pinimg.com/564x/a8/86/5c/a8865c88248aeae6d0486601a5397944.jpg",
            title: "Couple"    
        }
        
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