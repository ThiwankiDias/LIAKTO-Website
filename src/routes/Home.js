import NavigationBar from "../components/NavigationBar.js";
import Hero from "../components/Hero";
import homeImg1 from "../assets/homeImg.jpg";
import Destination from "../components/Destination.js";
import Trip from "../components/Trip.js";
import Footer from "../components/Footer.js";

function Home(){
    return(
        <>
            <NavigationBar/>
            <Hero
                dynamicPageCName="hero"
                heroImg ={homeImg1}
                title="Your Journey Your Story"
                text="Choose your favourite destination."
                buttonText="Travel Plan"
                url ="/"
                btnClass="show"
            />
            <Destination/>
            <Trip/>
            <Footer/>
           
        </>
    );
}
export default Home;