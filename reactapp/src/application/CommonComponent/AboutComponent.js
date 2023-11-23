import React from "react";
import { useParams, useNavigate } from "react-router-dom";

let About = ()=>{
    let params = useParams();    
    let param = params["id"] ? params["id"]: "No Params"; 

    let goToUser = useNavigate();

    let onGoToUserClick = (evt)=>{
        goToUser("/hook");
        
        evt.preventDefault();//it stops the default behaviour like event propagation
    }

    return(
        //<form action="/saveUser" onSubmit={onGoToUserClick}>
            <div className="about" >  
                <h2>We promise to support .... </h2>  
                <p className="about-content">RashidTech is your premier destination for cutting-edge tech products and innovations. 
                Rooted in quality and customer-centricity, we strive to offer a seamless shopping experience tailored to the needs of today's tech enthusiasts. 
                Our team handpicks every item, ensuring top-notch quality and the latest features. 
                Dive into RashidTech and discover a world where technology meets simplicity. 
                </p>  
                
                <button className={"form-control btn btn-primary col-md-2"} 
                        onClick={onGoToUserClick} 
                        //onSubmit={onGoToUserClick}
                        >Click Here to Sign In</button>
            </div>
        //</form>
    )
}

export default About;