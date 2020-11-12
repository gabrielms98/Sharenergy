import React from 'react'

import { HeaderContainer, HeaderContent } from './Header'

import BrandLogo from '../../assets/Brand logo.png'
import Selfie from '../../assets/self.png'

const Header = () => {
    return (
        <HeaderContainer >
            <HeaderContent >
                <img src={BrandLogo} className="brand-logo"/>
                <div>
                    <img src={Selfie} alt=""/>
                </div>
            </HeaderContent>
        </HeaderContainer>
    )
}

export default Header