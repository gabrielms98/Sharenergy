import React from 'react'

import './SideBarListItem.css'
import Selfie from '../../assets/self.png'

const SideBarListItem = ({powerPlant}) => {

    const avatars = [1, 2, 3]

    return (
        <div className="sidebaritem-container my-2">
            <div className="row w-100">
                <div className="item-title col-8">
                    <div className="row">
                        <h4 className="mb-0">{powerPlant.name}</h4>
                    </div>
                    <div className="row">
                        <p className="mb-0 item-subtitle">Owned by: <b>{powerPlant.owner}</b></p>
                    </div>
                    <div className="row">
                        {avatars.map(a => <img src={Selfie} className="rounded-circle avatars" width="15"></img>)}
                    </div>
                </div>
                <div className="col-4 mr-0 pr-0 d-flex justify-content-end align-items-center">
                    <button className="btn btn-outline-success action-button py-0">Ver</button>
                </div>
            </div>
        </div>
    );
}

export default SideBarListItem