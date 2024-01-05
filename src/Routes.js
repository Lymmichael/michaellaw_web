import {React,useEffect} from"react"
import {Routes, Route} from "react-router-dom"
import ResumePage from "./page/resume"
import { Link } from "react-router-dom"


export default function Navigation(){
    return(
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>

                <li>
                    <Link to="/resume">ResumePage</Link>
                </li>
            </ul>
        </nav>
    )
}