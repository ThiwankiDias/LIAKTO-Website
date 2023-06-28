import NavigationBar from "../components/NavigationBar";
import Hero from "../components/Hero.js"

import aboutImg from "../assets/aboutImg.jpg";
import Footer from "../components/Footer";
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
            <Footer/>
        </>
    );
}
export default About;