import React, { useState} from 'react';

import GussieImg from '../img/gussie.png';
import Nora from '../img/Nora.png';
import Belle from '../img/Belle.png';
import Eunice from '../img/eunice.png';
import Emma from '../img/emma.png';
import Leah from '../img/leah.png';
import Food from '../img/food.png';

const Context = React.createContext();

const TokenProvider = ({ children }) => {

    
	const [token ,setToken] = useState(JSON.parse(window.localStorage.getItem("token")) || false)
    const [mode, setMode] = useState(false);

    const [fetchId, setFetchId] = useState({
        id: 1,
        img: GussieImg,
        title:'Gussie Singleton'
    })

    const getId = (evt) =>{
        const btnId = evt.target.dataset.channelId - 0;

        const find = channels.findIndex(a => a.id == btnId);

        setFetchId({
            id: channels[find].id +1,
            img: channels[find].img,
            title: channels[find].title,
        })

    }

    const [channels,setchannels] = React.useState([
        {img:GussieImg, title: 'Gussie Singleton', id: 0},
        {img:Nora, title: 'Nora Francis', id: 1},
        {img:Belle, title: 'Belle Briggs', id: 2},
        {img:Eunice, title: 'Eunice Cortez', id: 3},
        {img:Emma, title: 'Emma Hanson', id: 4},
        {img:Leah, title: 'Leah Berry', id: 5},
        {img:GussieImg, title: 'Dollie Blair', id: 6},
        {img:Eunice, title: 'Jon Twins', id: 7},
        {img:Food, title: 'Food & Drink', id: 8},
    ])
	
	React.useEffect(() => {
        if(token) {
            window.localStorage.setItem("token", JSON.stringify(token)
            )
        }
        else{
            window.localStorage.removeItem("token")
        }
    }, [token])

	return (
		<Context.Provider value={{getId,mode, setMode,channels,token ,setToken,GussieImg,Food,Nora,Belle, Eunice,Emma,Leah,fetchId, setFetchId}}>{children}</Context.Provider>
	);
};

export { Context, TokenProvider };
