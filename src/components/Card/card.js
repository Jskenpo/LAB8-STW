import React from 'react';
import { useState } from 'react';
import './card.css';
import parteAtras from '../../imas/back.jpg';



function Card({card, controladorClick, volteado, bloqueado}) {

    const controladorClickFunc = () => {
        if(!bloqueado){
            controladorClick(card)
        }

        
    }


    return (
        <div className='card' key={card.id}>
            <div className = {volteado ? 'volteado': ''}>
                <img className='front' src={card.src} alt='card front' />
                <img className='back' src={parteAtras} onClick={controladorClickFunc} alt='card back' />
            </div>
        </div>
    )
}

export default Card;