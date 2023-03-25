import './Footer.css'

function Footer(){
    return(
        <div className="Footer">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 road"></div>
                
                <h1 className="font-script col-4 col-sm-4 col-md-3 col-lg-3 col-xl-3 footer_child">DucKhim
                    <p>Designed by DucKhiem - 2022</p>
                </h1>
                <div className='col-4 col-sm-4 col-md-3 col-lg-3 col-xl-3 resources'>
                    <h3>Resources</h3>
                    <ul>
                        <li><a href='https://www.freepik.com/'>Freepik</a></li>
                        <li><a href='https://fontawesome.com/'>Fontawesome</a></li>
                        <li><a href='https://www.opendoodles.com/'>Open Doodles</a></li>
                    </ul>

                </div>
                <div className="footer_bye col-4 col-sm-4 col-md-3 col-lg-3 col-xl-3 footer_child">
                    <h3>This is end of website</h3>
                    <h3>Have a nice day <i className="fa-solid fa-heart"></i> </h3>
                </div>
                <div className="contact col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 footer_child">
                    <h3>CONTACT ME</h3>
                    <div className="contact_item">
                        <a href="https://www.facebook.com/hqz.khim/" title="Facebook"><i className="fa-brands fa-facebook"></i></a>
                        <a href="https://www.instagram.com/_hqz.khim_/" title="Instagram"><i className="fa-brands fa-instagram"></i></a>
                        <a href='https://www.youtube.com/channel/UCP6s9D_9RC6mUqNEj2JjHJA' title='Youtube'><i className="fa-brands fa-youtube"></i></a>
                        <a href="https://www.pinterest.com/duckhiem26/_created/" title="Pinterest"><i className="fa-brands fa-pinterest"></i></a>
                        <a href="https://www.tiktok.com/@hqz.khim" title="Tiktok"><i className="fa-brands fa-tiktok"></i></a>
                        <a href="https://github.com/HaiquanZ" title="Github"><i className="fa-brands fa-github"></i></a>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
export default Footer;