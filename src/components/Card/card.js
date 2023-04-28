import React from 'react';
import { useState } from 'react';
import './card.css';
import parteAtras from '../../imas/back.jpg';



function Card({card, controladorClick}) {

    const controladorClickFunc = () => {
        controladorClick(card)
    }


    return (
        <div className='card' key={card.id}>
            <div>
                <img className='front' src={card.src} alt='card front' />
                <img className='back' src={parteAtras} onClick={controladorClickFunc} alt='card back' />
            </div>
        </div>
    )
}

export default Card;