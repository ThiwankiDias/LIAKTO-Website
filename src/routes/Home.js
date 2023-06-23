import NavigationBar from "../components/NavigationBar";
import Hero from "../components/Hero";
import homeImg1 from "../assets/homeImg.jpg";
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
        </>
    );
}
export default Home;