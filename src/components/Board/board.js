import { useState } from 'react';

function Board(){
    const [items, setItems] = useState([
        {id: 1, img: '../../imas/01.jpg', stat: ""},
        {id: 1, img: '../../imas/01.jpg', stat: ""},
        {id: 2, img: '../../imas/02.jpg', stat: ""},
        {id: 2, img: '../../imas/02.jpg', stat: ""},
        {id: 3, img: '../../imas/03.jpg', stat: ""},
        {id: 3, img: '../../imas/03.jpg', stat: ""},
        {id: 4, img: '../../imas/04.jpg', stat: ""},
        {id: 4, img: '../../imas/04.jpg', stat: ""},
        {id: 5, img: '../../imas/05.jpg', stat: ""},
        {id: 5, img: '../../imas/05.jpg', stat: ""},
        {id: 6, img: '../../imas/06.jpg', stat: ""},
        {id: 6, img: '../../imas/06.jpg', stat: ""},
        {id: 7, img: '../../imas/07.jpg', stat: ""},
        {id: 7, img: '../../imas/07.jpg', stat: ""},
        {id: 8, img: '../../imas/08.jpg', stat: ""},
        {id: 8, img: '../../imas/08.jpg', stat: ""},

    ]);
    return (
        <p>Cards</p>
    )
}

export default Board;