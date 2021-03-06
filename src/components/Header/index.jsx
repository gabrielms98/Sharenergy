import React, { useContext } from 'react'

import { store } from '../../store'

import { Link } from 'react-router-dom'

import { HeaderContainer, HeaderContent, Icon } from './Header'

import BrandLogo from '../../assets/Brand logo.png'
import Selfie from '../../assets/self.png'
import MapIcon from '../../assets/map.svg'
import SettingsIcon from '../../assets/settings.svg'

const Header = () => {

    const { state, dispatch } = useContext(store)

    const closeDashboard = () => {

        dispatch({type: 'toggle'})

        setTimeout(() => dispatch({type: 'endAction'}), 1000)
    }

    return (
        <HeaderContainer >
            <HeaderContent >
                <Link to="/">
                    <img src={BrandLogo} alt=""/>
                </Link>
                <div>
                    { 
                        state.openDashboard ? <Icon src={MapIcon} onClick={() => { closeDashboard()} } /> : 
                        <Link to="settings">
                            <Icon src={SettingsIcon} />
                        </Link>
                    }
                    <img src={Selfie} alt=""/>
                </div>
            </HeaderContent>
        </HeaderContainer>
    )
}

export default Header