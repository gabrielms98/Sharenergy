import React from 'react'

import { Container, HeaderContainer, MapContainer, SidebarContainer } from './LandingPage'

import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import Map from '../../components/Map'


const LandingPage = () => {
    return (
        <Container>
            <HeaderContainer >
                <Header />
            </HeaderContainer>
            <SidebarContainer>
                <Sidebar />
            </SidebarContainer>
            <MapContainer >
                <Map />
            </MapContainer>
        </Container>
    )
}

export default LandingPage