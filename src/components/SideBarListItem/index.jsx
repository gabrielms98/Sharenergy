import React from 'react'
import { SideBarListItemContainer, Row, P, Button, Avatar } from './SideBarListItem'

import Selfie from '../../assets/self.png'

const SideBarListItem = ({powerPlant, action}) => {

    const avatars = [1, 2, 3]

    const dashBoardPowerPlant = () => {

    }

    return (
        <SideBarListItemContainer>
            <Row>
                <div>
                    <h4>{powerPlant.nome}</h4>
                    <div>
                        <P>Owned by: <b>{powerPlant.owner}</b></P>
                    </div>
                    <div>
                        {avatars.map(a => <Avatar src={Selfie} className="rounded-circle avatars" width="15"></Avatar>)}
                    </div>
                </div>
                <div style={{ 
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <Button onClick={action}>Ver</Button>
                </div>
            </Row>
            
        </SideBarListItemContainer>


        // <div className="sidebaritem-container my-2">
        //     <div className="row w-100">
        //         <div className="item-title col">
        //             <div className="row">
        //                 <h4 className="mb-0">{powerPlant.name}</h4>
        //             </div>
        //             <div className="row">
        //                 <p className="mb-0 item-subtitle">Owned by: <b>{powerPlant.owner}</b></p>
        //             </div>
        //             <div className="row">
        //                 {avatars.map(a => <img src={Selfie} className="rounded-circle avatars" width="15"></img>)}
        //             </div>
        //         </div>
        //         <div className="col-4 mr-0 pr-0 d-flex justify-content-end align-items-center">
        //             <button className="btn btn-outline-success action-button py-0">Ver</button>
        //         </div>
        //     </div>
        // </div>
    );
}

export default SideBarListItem