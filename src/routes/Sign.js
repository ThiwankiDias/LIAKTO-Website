
import Footer from "../components/Footer";
import NavigationBar from "../components/NavigationBar";
import Hero from "../components/Hero";
import Login from "../components/Login.js";
import signupImg from "../assets/signupImg.jpg"
function Sign(){
    return(
        <>
        <NavigationBar/>
        <Hero
        dynamicPageCName ="hero-mid"
        heroImg={signupImg}
        title="Sign In"
        btnClass="hide"/>
        <Login/>
        <Footer/>
        </>
    );
}
export default Sign; 
