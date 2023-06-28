import "./Footer.css";

function Footer(){
    return(
    <div className="Footer">
        <div className="top">
            <div>
                <h1>LIAKTO</h1>
                <p>Choose your favourite destination</p>
            </div>
            <div>
                <a href="/"><i className="fa fa-brands fa-facebook-square"></i></a>
                <a href="/"><i className="fa fa-brands fa-instagram-square"></i></a>
                <a href="/"><i className="fa fa-brands fa-behance-square"></i></a>
                <a href="/"><i className="fa fa-brands fa-twitter-square"></i></a>
            </div>
            
        </div>
        <div className="bottom">
            <div>
                <h4>Project</h4>
                <a href="/">Changelog</a>
                <a href="/">Status</a>
                <a href="/">License</a>
                <a href="/">All versions</a>
            </div>
            <div>
                <h4>Community</h4>
                <a href="/">GitHub</a>
                <a href="/">Issues</a>
                <a href="/">Projects</a>
                <a href="/">Twitter</a>
            </div>
            <div>
                <h4>Help</h4>
                <a href="/">Support</a>
                <a href="/">Truobleshooting</a>
                <a href="/">Contact US</a>
                
            </div>

            <div>
                <h4>Others</h4>
                <a href="/">Terms of Service</a>
                
            </div>
        </div>
    </div>
    );
}
export default Footer;