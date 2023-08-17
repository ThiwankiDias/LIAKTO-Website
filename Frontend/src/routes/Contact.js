import NavigationBar from "../components/NavigationBar.js";
import contactImg from "../assets/contactImg.jpg"
import Hero from "../components/Hero.js"
import Footer from "../components/Footer.js";
import ContactForm from "../components/ContactForm.js";

function Contact(){
    return(
        <>
            <NavigationBar/>
            <Hero
                dynamicPageCName="hero-mid"
                heroImg ={contactImg}
                title="Contacts"
                btnClass="hide"
            />
            <ContactForm/>
            <Footer/>
        </>
    );
}
export default Contact;