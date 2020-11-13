import React from 'react'

import { Link } from 'react-router-dom'

import { HeaderContainer, HeaderContent, Icon } from './Header'

import BrandLogo from '../../assets/Brand logo.png'
import Selfie from '../../assets/self.png'
import MapIcon from '../../assets/map.svg'

const Header = ({action, openedDashboard}) => {
    return (
        <HeaderContainer >
            <HeaderContent >
                <Link to="/">
                    <img src={BrandLogo}/>
                </Link>
                <div>
                    { openedDashboard ? <Icon src={MapIcon} onClick={action} /> : ''}
                    <img src={Selfie} alt=""/>
                </div>
            </HeaderContent>
        </HeaderContainer>
    )
}

export default Header