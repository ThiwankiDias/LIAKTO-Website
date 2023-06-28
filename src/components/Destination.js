import React from "react";
import lake1 from "../assets/lake1.JPG";
import lake2 from "../assets/lake2.JPG";
import npark1 from "../assets/npark1.jpg";
import npark2 from "../assets/npark2.jpg";
import "./Destination.css";
import DestinationData from "./DestinationData";

function Destination(){
    return(
        <div className="destination">
            <h1>Famous Destinations</h1>
            <p>Traveling expands horizons, ignites passions, and enriches lives with unforgettable experiences and cherished memories</p>
            <DestinationData
            className="first-des"
            heading="Lake Como, Italy"
            text="Lake Como is the third largest Lake in Italy.This beautiful lake is shaped like an upside-down Y, 
            with three slender branches that meet at the resort town of Bellagio. Most of the tourists visit
            Lake Como in the peak summer months (June-September). But as a recommentation the best months to
            visit Lake Como are mid-April-May. That's when everything is open, the weather is mild and it's 
            not too busy. Also If you are visiting for few days and are looking for best base for exploring 
            the area, we recommand staying around the middle of the lake."
            img1={lake1}
            img2={lake2}
            
            />

            <DestinationData
            className="first-des-reverse"
            heading="Yosemite National park, California"
            text="Yosmite is one of most popular national park in the world and It is located in easten central
            California in the United states. It covers a span of nearly 1200 square miles. It is also home to whole host
            of animals. These include mammals,birds,insects and amphibians and reptiles. Also It contains plunging 
            waterfalls, giant sequoia trees, sheer granite cliffs, and more,It's no surprise that countless numbers
            of people come here each year to enjoy the breathtaking natural beauty.If you don't want your Yosemite 
            experience to be limited by road, trail, and campground closures, your best time to visit between June and 
            September, when eveerything is open and accessible. (and several degree warmer) 
            "
            img1={npark1}
            img2={npark2}
            
            />
            
            
        </div>


        
    );
}

export default Destination;