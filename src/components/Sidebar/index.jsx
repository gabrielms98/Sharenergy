import React from 'react'
import SideBarListItem from '../SideBarListItem'

import { SidebarContainer, SidebarTitle, HrTitle, HrItem } from './Sidebar'

const powerPlants = [
    {name: 'Usina 1', owner: 'Gabriel Martins'},
    {name: 'Usina 2', owner: 'Gabriel Martins'},
    {name: 'Usina 3', owner: 'Gabriel Martins'},
]

const Sidebar = () => {

    return (
        <SidebarContainer >
            <SidebarTitle>
                Minhas Usinas
            </SidebarTitle>
            <HrTitle />
            {powerPlants.map((p, i) => (
                <div key={i}>
                    <SideBarListItem powerPlant={p}></SideBarListItem>
                    <HrItem />
                </div> 
            ))}
        </SidebarContainer>
    );
}

export default Sidebar