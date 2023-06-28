import NavigationBar from "../components/NavigationBar";
import Hero from "../components/Hero.js"

import serviceImg from "../assets/serviceImg.jpg";
import Footer from "../components/Footer";
import Trip from "../components/Trip";

function Service(){
    return(
        <>
            <NavigationBar/>
            <Hero
                dynamicPageCName="hero-mid"
                heroImg ={serviceImg}
                title="Services"
                btnClass="hide"
            />
            <Trip/>
            <Footer/>
        </>
    );
}
export default Service;