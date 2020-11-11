import React from 'react'
import './Header.css'

import BrandLogo from '../../assets/Brand logo.png'
import Selfie from '../../assets/self.png'

const Header = () => {
    return (
        <div className="header-container">
            <div className="header">
                <img src={BrandLogo} className="brand-logo"/>
                <div>
                    <img src={Selfie} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Header