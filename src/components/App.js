import React from 'react';
import banner from '../imas/banner.jpg';

function App() {
    return (
        <div className = 'App'>
            <img src= {banner} alt="banner" id ='banner' />
            <h1 id='titulo'>Memory Game</h1>
            <div className="board"> 
                 
            </div>
        </div>
    );
}

export default App;