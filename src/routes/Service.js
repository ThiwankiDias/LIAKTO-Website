import NavigationBar from "../components/NavigationBar";
import Hero from "../components/Hero.js"

import serviceImg from "../assets/serviceImg.jpg";

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
        </>
    );
}
export default Service;