import React from "react";

import Map from "./components/Map";
import Header from './components/Header'
import Sidebar from './components/Sidebar'

import { Container, HeaderContainer, MapContainer, SidebarContainer } from './App'

const App = () => {
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
    );
};

export default App;
