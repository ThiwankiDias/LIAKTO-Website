import "./Trip.css";
import TripData from "./TripData";
import singapore from "../assets/singapore.jpg";
import china from "../assets/china.jpg";
import USA from "../assets/USA.JPG";
function Trip(){
    return(
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>Travel is the best investment you can make in yourself.</p>
            <div className="trip-card">
            <TripData
            image={singapore}
            heading="Singapore Trip"
            text="Singapore, officially the republic of Singapore, is an Isand country.
            It is located in Southeast Asia. Singapore's land area includes as many as 64 
            offshore islands that surround the main island. "
            />
            <TripData
            image={china}
            heading="China Trip"
            text="China is the largest country of all Asian countries. Also it is the world
            second most populous country. The great wall of china is the most popular place
            in China and it is the largest human construction in the world."
            />
            <TripData
            image={USA}
            heading="USA Trip"
            text="The United states of Amarica commonly called as United state or America. It
            is by far the most famous country in the World. The things that make the US attactive
            include the Grand Canyon and mount Rushmore etc. "
            />
            
        </div>
        </div>
    )
}

export default Trip;