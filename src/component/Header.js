import "../page/HomePage.css"
import { useEffect, useState } from "react"

export default function Header(props){
    const [michael,setMichael]=useState("");
    const [resume,setResume]=useState("")
    const [aboutMe,setAboutMe]=useState("")
    const [contact,setContact]=useState("")
    const [project,setProject]=useState("")
    
        useEffect(()=>{
            if(props.props=="michael"){
                setMichael('active');
            }
            if(props.props=='resume'){
                setResume("active");
            }
             else if(props.props=="aboutMe"){
                setAboutMe("active");
            }
            else if(props.props=="contact"){
                setContact("active");
            }
            else if(props.props=="project"){
                setProject("active");
            }  
        })
        
        console.log(michael)
        
        // console.log("testing")
    return <head className="page-header">
                <ul>
                    <li>
                        <a 
                        className={"logo"}
                        href="/"
                        >
                            Michael
                            </a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a 
                        className={resume} 
                        href="/Resume"  
                        style={{ "--navAni": 1 }}
                        >
                        Resume
                        </a>
                    </li>
                    <li>
                        <a className={aboutMe} 
                        href="/AboutMe"
                        style={{"--navAni":2}}
                        >
                            AboutMe
                        </a>
                    </li>
                    <li>
                        <a className={project}
                        href="Project"
                        style={{"--navAni":4}}
                        >
                            Project
                        </a>
                     
                    </li>
                    <li>
                        <a className={contact} 
                        href="/Contact"
                        style={{"--navAni":3}}
                        >
                            Contact
                        </a>  
                    </li>
                </ul>
            </head>
}