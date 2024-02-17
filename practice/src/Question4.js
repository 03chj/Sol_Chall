import React from 'react';
import {useState} from "react";
import { IoIosArrowBack } from "react-icons/io";import {FaArrowRight} from "react-icons/fa";
import { Link } from "react-router-dom";
import './App.css';

export default function Question4(){
    const [visible, setVisible] =useState(false);
    return (
        <div>
            <header className="Navbar">
                <Link to="/Q4">
                    <button><IoIosArrowBack size = {'1.5rem'}/></button>
                </Link>    
                <h3>Profile Setting</h3>
            </header>
            <body className="answer">
                <h2>Are you religious?</h2>
                <button onClick={() => {            
                    }}>No. I'm not</button> 
                <button onClick={() => {
                    setVisible(!visible)
                }}>Yes. I am.</button>
                {visible && <div>
                    <h2>What is your religion?</h2>
                    <select>
                        <option value="empty">--- choose one ---</option>
                        <option value="Budist">Budist</option>
                        <option value="Chatolic">Chatolic</option>
                    </select>
                </div>}
            </body>
            
            <footer>
                <Link to="/Q5">
                    <button><FaArrowRight style={{color: "white"}} size={'2rem'}/></button>
                </Link>
            </footer>
        </div>
    )
}
