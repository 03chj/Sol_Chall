import React from 'react';
import { IoIosArrowBack } from "react-icons/io";import { FaArrowRight } from "react-icons/fa"
import { Link } from 'react-router-dom'
import './App.css';

export default function Question4(){
    return (
        <div>
            <header className="Navbar">
                <Link to="/Q4">
                    <button><IoIosArrowBack size={'1.5rem'}/></button>
                </Link>
                <h3>Profile Setting</h3>
            </header>
            <body className="answer">
                <h2>What's your first language?</h2>
                <select>
                    <option value="empty">--- choose one ---</option>
                    <option value="eng">English</option>
                    <option value="chinese">Chinese</option>
                </select>
            </body>
            
            <footer>
                <Link to="/Q6">
                    <button><FaArrowRight style={{color: "white"}} size={'2rem'}/></button>
                </Link>
            </footer>
        </div>
    )
}
