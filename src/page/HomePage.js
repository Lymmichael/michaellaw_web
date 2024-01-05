import { useNavigate } from "react-router-dom"
import "./HomePage.css"
import me from "../image/FE3F1B38-65CF-43D0-B3BF-C3F44A065521_1_105_c.jpeg"
import React from "react"
import { FaInstagram } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaFacebook } from "react-icons/fa";
import Header from "../component/Header";
export default function HomePage(){

    return (
        <div>
            <body className="container">
                <Header props="michael"/>   
                <div className="main">
                    <div className="images">
                        <image><img src={me} className="img-w" alt="" /></image>
                    </div>
                    <div>
                        <h3 style={{ color: '#808080' }}>Welcome to my website!</h3>
                        <h1 >I am  <span style={{ color: '#f9532d' }}>Michael</span> </h1>
                        <div className="social">
                            <a 
                            href="https://www.instagram.com/lym_michael_lym/" 
                            style={{"--navAni":1}}
                            >
                            <FaInstagram /></a>
                        <a
                        href="https://www.facebook.com/yatming.law.9"
                        style={{"--navAni":2}}>
                        <FaFacebook />
                        </a>
                            <a 
                            href="https://www.github.com/Lymmichael" 
                            style={{"--navAni":3}}>
                            <FaGithub /></a>
                        </div>
                    </div>
                    
                </div>
            </body>
        </div>
    )
}
