import './Portrait.css';

function Portrait(){
    const listPortrait = [
        {
            name: "#NONAME",
            location: "Dai hoc Y Ha Noi",
            linkLocation: "https://goo.gl/maps/nCsEEGgiKy5nDmzW6",
            img: [
                "https://i.pinimg.com/564x/a5/3a/d4/a53ad4c6eefc08555b571febc3929247.jpg",
                "https://i.pinimg.com/564x/a0/78/52/a0785266edf6ccbe8c84896708f7fff1.jpg",
                "https://i.pinimg.com/564x/6b/5f/5e/6b5f5e0c0804d908ee7b7cad4988ceda.jpg",
                "https://i.pinimg.com/564x/23/67/02/2367027129300eae45bb18133b96df5c.jpg"
            ],
        },
        {
            name: "#NONAME",
            location: "Studio",
            linkLocation: "https://goo.gl/maps/3QjY3YwbFx6kAntg6",
            img: [
                "https://i.pinimg.com/564x/a8/86/5c/a8865c88248aeae6d0486601a5397944.jpg",
                "https://i.pinimg.com/564x/bd/28/53/bd2853783ce152a838f1e7e475b49444.jpg",
                "https://i.pinimg.com/564x/5e/b9/5c/5eb95c50f6b952c2c7de42c5f1472525.jpg",
                "https://i.pinimg.com/564x/54/fc/61/54fc61fe7432efca5b77b47b4b968344.jpg",
                "https://i.pinimg.com/564x/48/03/4f/48034fd5527c01d74a1432b147882e3e.jpg",
                "https://i.pinimg.com/564x/5a/b3/52/5ab35263a8ef78c7627ad74de72a0ca0.jpg"
            ]
        }
    ]


    return (
        <div className="Portrait">
            
            {
                listPortrait.map((item, index) => (
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