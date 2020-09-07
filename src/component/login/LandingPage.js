import React, { Component } from 'react'
import './LandingPage.css';
export default class LandingPage extends Component {
    render() {   
        return (
            <div className={'authBox'}>
                <div className={'leftBox'}> 
                    <div className={'bgGreen'}/>
                    <div className={'imageAuth'}/>
                    <div className={'imageText bold style1'}> Code whatever </div>
                    <div className={'imageText style2'}>
                        Buid
                    </div>
                </div>
                <div className={'rightBox'}> 
                    <div className={'box'}>
                        <div className={'titleAuth'}>Login</div>
                        <div className='inputSBox'>
                            <input className={'inputS'} type={'text'} placeholder={'Username'}/>
                        </div>
                        <div className='inputSBox'>
                            <input className={'inputS'} type={'password'} placeholder={'Password'}/>
                        </div>
                        <div className={'btnAuth'}>Login</div>
                     
                    </div>
                </div>
            </div>
        )
    }
}
=======
import React, { Component } from 'react'
import './LandingPage.css';
export default class LandingPage extends Component {
    render() {   
        return (
            <div className={'authBox'}>
                <div className={'leftBox'}> 
                    <div className={'bgGreen'}/>
                    <div className={'imageAuth'}/>
                    <div className={'imageText bold style1'}> Code whatever </div>
                    <div className={'imageText style2'}>
                        Buid
                    </div>
                </div>
                <div className={'rightBox'}> 
                    <div className={'box'}>
                        <div className={'titleAuth'}>Login</div>
                        <div className='inputSBox'>
                            <input className={'inputS'} type={'text'} placeholder={'Username'}/>
                        </div>
                        <div className='inputSBox'>
                            <input className={'inputS'} type={'password'} placeholder={'Password'}/>
                        </div>
                        <div className={'btnAuth'}>Login</div>
                     
                    </div>
                </div>
            </div>
        )
    }
}
