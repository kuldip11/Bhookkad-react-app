import React from 'react';
import "../styles/AboutUs.css";
import { GithubOutlined, LinkedinOutlined, FacebookOutlined } from "@ant-design/icons";
const AboutUs = () =>{
    return (
        <div className="aboutus">
            <p><span >“Bhookkad”</span> is a web application which could locate a list of restaurants based on the user location & type of the cuisine or food item entered by the user. The user can finds the entire restaurant in his city and he can make a choice of the best restaurant based on the rating.Bhookkad provides information,menus and ratings of restaurants in the selected city.This web application also allows quickly and easily manages an online menu which customer can browse and use to get the best deal on his cuisine or food item with just few clicks.</p>
            <div>
            <a href="https://github.com/kuldip11" target="_blank"  rel="noreferrer"> 
                <GithubOutlined 
                    style={{fontSize:"40px", marginRight:"15px"}} 
                    /> 
            </a> 
            <a href="https://www.linkedin.com/in/kuldip-kumar-b90092188/" target="_blank"  rel="noreferrer">  
                <LinkedinOutlined 
                    style={{fontSize:"40px"}}
                    /> 
            </a>
            </div>
        </div>
    )
}

export default AboutUs;