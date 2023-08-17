import React from "react";
import NavigationBar from "../components/NavigationBar";
import Hero from "../components/Hero";
import signupImg from "../assets/signupImg.jpg"
import Footer from "../components/Footer";

function SignRoute(){
    return(
        <>
        <NavigationBar/>
        <Hero
        dynamicPageCName="hero-mid"
        heroImg={signupImg}
        title="Sign Up"
        btnClass="hide"/>
        <Footer/>

        </>
    )
}
export default SignRoute;