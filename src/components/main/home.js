import React, { Component } from 'react'
import waveup from '../../img/wave(1).svg'
import wavedown from '../../img/wave(2).svg'
import logo from '../../img/logo.svg'
import  './home.css';

export default class Home extends Component {
    render() {
        return (
            <div>
                    <img className="downWave" src={wavedown} alt="Down wave"/>
                        <div className="container">
                            <div className="leftContainer">
                                <div className="title">
                                    <span className="title1">STRATERGIC </span>
                                </div>
                                <div className="title">
                                <span className="title2">HOSPITAL</span>
                                </div>
                                <span className="title3">MANAGEMENT</span>
                                <span className="title4">SYSTEM</span> 
                            </div>
                            <div className="rightContainer">
                                <div className="box1"></div>
                                <div className="box2"> 
                                </div>
                                <div className="box3">
                                </div>
                                <div className="button">
                                        <span className="text"> Login </span>
                                </div>
                                <div className="box4">
                                </div>
                                <img className="logo" src={logo} alt="Logo"/>
                            </div>
                        </div>
                    <img className="upWave" src={waveup} alt="Up wave"/>
            </div>
        )
    }
}