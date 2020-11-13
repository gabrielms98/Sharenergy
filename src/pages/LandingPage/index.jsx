import React, {useState, useEffect} from 'react'

import { Container, HeaderContainer, MapContainer, SidebarContainer } from './LandingPage'

import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import Map from '../../components/Map'


const LandingPage = () => {

    const [openDashboard, setOpenDashboard] = useState(false)
    const [actionEnded, setActionEnded] = useState(true)
    const [usuario, setUsuario] = useState({})

    const handler = () => {
        setActionEnded(false)
        setOpenDashboard(!openDashboard)

        setTimeout(() => {
            setActionEnded(true)
        }, 1000)
    }

    useEffect(() => {
        const json = require("../../api/dadosClientes.json")

        const [usuario] = json.filter(u => u.nomeCliente === "Maria Coelho")

        setUsuario(usuario)
    })

    return (
        <Container>
            <HeaderContainer >
                <Header action={handler} openedDashboard={openDashboard}/>
            </HeaderContainer>
            <SidebarContainer toggle={openDashboard} >
                <Sidebar toggle={openDashboard} completed={actionEnded} action={handler} usuario={usuario}/>
            </SidebarContainer>
            { !openDashboard ?  
                <MapContainer >
                        <Map />
                </MapContainer>
                : ''
            }
        </Container>
    )
}

export default LandingPage