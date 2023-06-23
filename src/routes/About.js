import NavigationBar from "../components/NavigationBar";
import Hero from "../components/Hero.js"

import aboutImg from "../assets/aboutImg.jpg";
function About(){
    return(
        <>
            <NavigationBar/>
            <Hero
                dynamicPageCName="hero-mid"
                heroImg ={aboutImg}
                title="About Us"
                btnClass="hide"
            />
        </>
    );
}
export default About;