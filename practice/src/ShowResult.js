import React from "react";
import {Link} from "react-router-dom"
import { IoIosArrowBack } from "react-icons/io";

export default function Result(){
    return(
        <div>
            <header className="Navbar">
                <Link to="/Q6">
                    <button><IoIosArrowBack size={'1.5rem'}/></button>
                </Link>
                <h3>Recommendation Result</h3>
            </header>
            <body className="answer">
                <h2>hj, result is as follwed.</h2>
                <div classname="country">
                    <h3>1. Korea</h3>
                    <image></image>
                </div>
                <div className="country">
                    <h3>2. Japan</h3>
                    <image></image>
                </div>
                <div className="country">
                    <h3>3. America</h3>
                    <image></image>
                </div>
            </body>
        </div>
    )
}