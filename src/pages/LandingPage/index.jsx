import React, {useState} from 'react'

import { Container, HeaderContainer, MapContainer, SidebarContainer } from './LandingPage'

import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import Map from '../../components/Map'


const LandingPage = () => {

    const [openDashboard, setOpenDashboard] = useState(false)

    const handler = () => {
        setOpenDashboard(!openDashboard)

    }

    return (
        <Container>
            <HeaderContainer >
                <Header />
            </HeaderContainer>
            <SidebarContainer toggle={openDashboard} >
                <Sidebar toggle={openDashboard} action={handler}/>
            </SidebarContainer>
           { !openDashboard ?  
                <MapContainer >
                        <Map />
                </MapContainer>
            : ''}
        </Container>
    )
}

export default LandingPage