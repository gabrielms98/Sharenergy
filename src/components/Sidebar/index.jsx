import React from 'react'
import SideBarListItem from '../SideBarListItem'

import './Sidebar.css'

const powerPlants = [
    {name: 'Usina 1', owner: 'Gabriel Martins'},
    {name: 'Usina 2', owner: 'Gabriel Martins'},
    {name: 'Usina 3', owner: 'Gabriel Martins'},
]

const Sidebar = () => {

    return (
        <div className="sidebar-container">
            <div className="sidebar-title">
                Minhas Usinas
            </div>
            <hr className="hr-title"/>
            {powerPlants.map((p, i) => (
                <div>
                    <SideBarListItem powerPlant={p} key={i}></SideBarListItem>
                    <hr class="hr-item"/>
                </div> 
            ))}
        </div>
    );
}

export default Sidebar