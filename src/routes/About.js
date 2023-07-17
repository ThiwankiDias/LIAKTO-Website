import NavigationBar from "../components/NavigationBar";
import Hero from "../components/Hero.js"

import aboutImg from "../assets/aboutImg.jpg";
import Footer from "../components/Footer";
import AboutUS from "../components/AboutUs";
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
            <AboutUS/>
            <Footer/>
        </>
    );
}
export default About;