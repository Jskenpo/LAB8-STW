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

    const [bloqueado, setBloqueado] = useState(false); //bloquea las cartas para que no se puedan seleccionar mas de dos

    //ALEATORIO
    const aleatorio = () => {
        const mezcla = [...cardImages, ...cardImages]
            .sort(() => Math.random() - 0.5)
            .map((card) => ({ ...card, id: Math.random()}) )
        
        setOpUno(null)
        setOpDos(null)
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
            setBloqueado(true)
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
                setTimeout(() => reset(), 1000)
            }
        }
    }, [opUno, opDos])


    const reset = () => {
        setOpUno(null)
        setOpDos(null)
        setEstado(anteriorEstado => anteriorEstado + 1)
        setBloqueado(false)
    }

    //Empezar nuevo juego
    useEffect(() => {
        aleatorio()
    }, [])

    //verificar si gano y reiniciar el juego sabiendo si las cartas iguales:true
    useEffect(() => {
        if(cards.filter(card => !card.iguales).length === 0){
            alert('JUEGO COMPLETADO!!!')
            aleatorio()
        }
    }, [cards])
    


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
                        bloqueado={bloqueado}
                    />
                ))}
            </div>
            <p>intentos: {estado}</p>
            <br></br>
            <a href="https://github.com/Jskenpo/LAB8-STW.git">click aquí para repositorio en Github</a>
            <br></br>
        </div>
    );
}

export default App;