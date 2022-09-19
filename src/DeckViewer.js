import React, { useState, useEffect } from "react";
import axios from "axios"


const DeckViewer = () => {
    const [deck, setDeck] = useState(null);
    const [card, setCard] = useState();


    useEffect(() => {
        async function getData() {
            let d = await axios.get(`http://deckofcardsapi.com/api/deck/new/shuffle/`);
            setDeck(d.data);
        }
        getData();
    }, [setDeck]);
 
     
    useEffect(() => {
        async function getCard() {
            let deck_id = deck.deck_id

            let cardRes = await axios.get(`http://deckofcardsapi.com/api/deck/${deck_id}/draw/`);
            const randomCard = cardRes.data.cards[0]
            setCard(randomCard.image)

        }
        getCard();
    }, [setCard]);


    const handleClicker = (e) => {
        e.preventDefault();
        async function newCard() {
            let deck_id = deck.deck_id
            let cardRes = await axios.get(`http://deckofcardsapi.com/api/deck/${deck_id}/draw/`);
            const randomCard = cardRes.data.cards[0]
            setCard(randomCard.image)
        }
        newCard();
    }

    return (
        <h3>  
            <img src={card} /> 
            <button onClick={handleClicker}>New Card</button>
        </h3>
    )
}

export default DeckViewer


     








