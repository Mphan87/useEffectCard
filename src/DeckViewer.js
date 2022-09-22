import React, { useState, useEffect } from "react";
import axios from "axios"

const DeckViewer = () => {
    const [deck, setDeck] = useState(null);
    const [card, setCard] = useState();

    useEffect(() => {
        
        async function getData() {
            let d = await axios.get(`http://deckofcardsapi.com/api/deck/new/shuffle/`);
            setDeck(d.data);
            let deck_id = d.data.deck_id
            let cardRes = await axios.get(`http://deckofcardsapi.com/api/deck/${deck_id}/draw/`);
            const randomCard = cardRes.data.cards[0]
            setCard(randomCard.image)
        }
        getData();
    }, [setDeck]);

    
    const handleClickerRandom = (e) => {
        e.preventDefault();
        async function newCard() {
            let deck_id = deck.deck_id
            let cardRes = await axios.get(`http://deckofcardsapi.com/api/deck/${deck_id}/draw/`);
            const randomCard = cardRes.data.cards[0]
            setCard(randomCard.image)
        }
       setInterval(newCard,5000)
    }


    const handleClickerCard = (e) => {
        e.preventDefault();
        async function newCard() {
            let deck_id = deck.deck_id
            let cardRes = await axios.get(`http://deckofcardsapi.com/api/deck/${deck_id}/draw/`);
            const randomCard = cardRes.data.cards[0]
            setCard(randomCard.image)
        }
       newCard()
    }



    // let CardInterval = setInterval(handleClicker, 1000)


    return (
        <h3>  
            <img src={card} /> 
            <button onClick={handleClickerCard}>New Card</button>
            <button onClick={handleClickerRandom}>Draw Random Card</button>
        </h3>
    )
}

export default DeckViewer


     








