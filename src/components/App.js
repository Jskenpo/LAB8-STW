import React from 'react';
import './App.css';
import banner from '../imas/banner.jpg';
import cardImages from './Images/images';
import parteAtras from '../imas/back.jpg';
import Card from './Card/card';
import { useState, useEffect } from 'react';


function App() {

    const[cards,setCards] = useState([]);
    const [estado, setEstado] = useState(0); //estado de la carta

    const [opUno, setOpUno] = useState(null); //opcion uno
    const [opDos, setOpDos] = useState(null); //opcion dos

    //ALEATORIO
    const aleatorio = () => {
        const mezcla = [...cardImages, ...cardImages]
            .sort(() => Math.random() - 0.5)
            .map((card) => ({ ...card, id: Math.random()}) )
        setCards(mezcla)
        setEstado(0)
    }

    //CONTROLADOR DE CLICK

    const controladorClick = (card) => {

        opUno? setOpDos(card) : setOpUno(card)

    }

    //COMPARA DOS CARTAS
    useEffect(() => {
        if(opUno && opDos){
            if(opUno.src === opDos.src){
                setCards(prevCards =>{
                    return prevCards.map(card => {
                        if(card.src === opUno.src || card.src === opDos.src){
                            return {...card, iguales: true}
                        }else {
                            return card
                        }
                    })
                })
                reset()
            }else {
                reset()
            }
        }
    }, [opUno, opDos])


    const reset = () => {
        setOpUno(null)
        setOpDos(null)
        setEstado(anteriorEstado => anteriorEstado + 1)
    }


    return (
        <div className = 'App'>
            <img src= {banner} alt="banner" id ='banner' />
            <h1 id='titulo'>Memory Game</h1>
            <button id='boton' onClick={aleatorio}>New Game</button>

            <div className='board'>
                {cards.map(card => (
                    <Card 
                        key = {card.id} 
                        card={card}
                        controladorClick={controladorClick}
                        volteado={card === opUno || card === opDos || card.iguales}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;