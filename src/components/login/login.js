import React, { Component } from 'react'
import './login.css';
import wave from '../../img/wave.svg';
import tree from '../../img/tree.svg';
import femaleAvatar from '../../img/femaleAvatar.svg';
export default class Login extends Component {
    render() {
        return (
            <div>
                <img className="img" src={wave} alt="Wave"/>
                <img className="tree" src={tree} alt="Tree"/>
                <div className="formElement">
                    <div>
                        <img className="avatar" src={femaleAvatar}/>
                    </div>
                    <form>
                        <div className="inputS">
                            <input className="inputSBox" name="username" placeholder="Username"/>
                        </div>
                        <br/>
                        <div className="inputS">
                            <input className="inputSBox" name="password" placeholder="Password"/>
                        </div>
                        <div className="buttonBox">
                           Login
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
