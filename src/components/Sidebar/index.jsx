import React, {useEffect, useState} from 'react'
import SideBarListItem from '../SideBarListItem'

import { SidebarContainer, SidebarTitle, HrTitle, HrItem } from './Sidebar'

const powerPlants = [
    {name: 'Usina 1', owner: 'Gabriel Martins'},
    {name: 'Usina 2', owner: 'Gabriel Martins'},
    {name: 'Usina 3', owner: 'Gabriel Martins'},
]

const Sidebar = ({toggle, action}) => {

    const [openDashboard, setOpenDashboard] = useState(false)

    const [actionEnded, setActionEnded] = useState(true)

    useEffect(() => {
        console.log("TOGGLE", toggle)
    })

    const handler = () => {
        setActionEnded(false)
        action()

        setOpenDashboard(!openDashboard)

        setTimeout(() => {
            setActionEnded(true)
        }, 1000)
    }

    return (
        <SidebarContainer toggle={toggle}>
            { !openDashboard && actionEnded ? 
                <div>
                    <SidebarTitle>
                        Minhas Usinas
                    </SidebarTitle>
                    <HrTitle />
                    {powerPlants.map((p, i) => (
                        <div key={i}>
                            <SideBarListItem powerPlant={p} action={handler}></SideBarListItem>
                            <HrItem />
                        </div> 
                    ))}
                </div>
            : actionEnded ?
            <div>
                <button onClick={handler}>VOLTAR</button>  
            </div> 
            : ''   
            }
        </SidebarContainer>
    );
}

export default Sidebar