import RogoImage from '../../images/wepimage.jpg';
import React from 'react';

export default function Header(){
    return <div className="header">
        <div className="menu-rogo">
         <img src={RogoImage} alt="Rogo" />
        </div>
    </div>
}