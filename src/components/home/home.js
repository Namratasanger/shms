import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import homeImage from '../../images/home-image.svg';
import './home.css';
export default class Home extends Component {
    render() {
        return (
            <div>
                <div className="contentContainer">
                    <div className="title1">STRATEGIC HOSPITAL</div>
                    <div className="title2">MANAGEMENT SYSTEM</div>                       
                    <Link to="/login" className="home-links">
                        <button className="home-button"><span>Login</span></button>
                    </Link> 
                </div>
                <img className="person" src={homeImage} alt="person"/>               
            </div>
        )
    }
}
