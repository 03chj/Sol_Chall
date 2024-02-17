import React from 'react';
import { IoIosArrowBack } from "react-icons/io";import {FaArrowRight} from "react-icons/fa";
import { Link } from "react-router-dom";
import './App.css';

export default function Question4(){
    return (
        <div>
            <header className="Navbar">
                <Link to="/Q5">
                    <button><IoIosArrowBack size={'1.5rem'}/></button>
                </Link>
                <h3>Profile Setting</h3>
            </header>
            <body className='answer'>
                <h2>What kind of work did you do?</h2>
                <select>
                    <option value="empty">--- choose one ---</option>
                    <option value="never">never worked</option>
                    <option value="financial">financial</option>
                    <option value="engineering">engineering</option>
                </select>
            </body>
            
            <footer>
                <Link to="/result">
                    <button><FaArrowRight style={{color: "white"}} size={'2rem'}/></button>
                </Link> 
            </footer>
        </div>
    )
}
