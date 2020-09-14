import React, { Component } from 'react'
import './login.css';
import unlock from '../../images/unlock.svg';
import femaleAvatar from '../../images/femaleAvatar.svg';
export default class Login extends Component {
    render() {
        return (
            <div>
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
                            <input className="inputSBox" type="password" name="password" placeholder="Password"/>
                        </div>
                        <button className="buttonBox">
                             <span>Login</span>
                        </button>
                    </form>
                </div>
                <img className="tree" src={unlock} alt="Tree"/>
            </div>
        )
    }
}
