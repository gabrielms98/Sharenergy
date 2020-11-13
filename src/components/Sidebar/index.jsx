import React, { useState, useEffect } from 'react'
import SideBarListItem from '../SideBarListItem'
import Dashboard from '../Dashboard'

import { SidebarContainer, SidebarTitle, HrTitle, HrItem } from './Sidebar'
import Usinas from '../../api/infoUsina.json'

const Sidebar = ({toggle, action, completed, usuario}) => {

    const [openDashboard, setOpenDashboard] = useState(toggle)
    const [powerPlants, setPowerPlants] = useState([])

    const handler = () => {
        action()

        setOpenDashboard(!openDashboard)
    }

    const getMyUsinas = (usinas) => {
        const myUsinas = Usinas.filter(u => usinas && usinas.some(us => us.numeroUsina === u.numeroUsina))
        console.log(myUsinas)
        setPowerPlants(myUsinas)
    }

    useEffect(() => {
        getMyUsinas(usuario.usinas)
    }, [usuario])

    return (
        <SidebarContainer toggle={toggle}>
            { !toggle && completed ? 
                <div>
                    <SidebarTitle>
                        Minhas Usinas
                    </SidebarTitle>
                    <HrTitle />
                    {powerPlants && powerPlants.map((p, i) => (
                        <div>
                            <SideBarListItem key={i.toString()} powerPlant={p} action={handler}></SideBarListItem>
                            <HrItem/>
                        </div> 
                    ))}
                </div>
            : completed ?
                <Dashboard action={handler} usuario={usuario} usina={1}/>
            : ''   
            }
        </SidebarContainer>
    );
}

export default Sidebar