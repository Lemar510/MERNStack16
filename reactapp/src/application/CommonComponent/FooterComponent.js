import React from "react";

let Footer = (props)=>{

    //props.age = props.age + 1;

    let age = props.age;//read only

    return(
            <div className="footer">
                ©Copyright 2023 All rights reserved. &nbsp;|&nbsp; <a href="https://www.synergisticit.com/" target="_blank">SynergisticIT</a> &nbsp;
            </div>
           )
}

export default Footer;