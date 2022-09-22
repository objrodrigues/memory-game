import React, {useEffect, useState} from "react";
import GameOver from "./components/GameOver";
import GameBoard from "./components/GameBoard";
import game from "./game/game";
import Footer from "./components/Footer";

export default function MemoryGame(){

    const [gameOver, setGameOver] = useState(false);
    const [cards, setCards] = useState([]);
    const [plays, setPlays] = useState(0);

    useEffect(
        ()=>{
            setCards(game.createCards())
        },
        []
    );

    function restart(){
        game.clearCards();
        setCards(game.createCards());
        setPlays(0);
        setGameOver(false);
    };

    function handleFlip(card){
        game.flipCard(
            card.id,
            ()=>{
                setPlays(game.plays)
                setGameOver(true);
            },
            ()=>{
                setCards([...game.cards])
            }
        )
        setCards([...game.cards]);
    };

    return(
        <div id="container">
            <header id="gameHeader">
                MEMORY GAME
            </header>
            <GameBoard cards={cards} handleFlip={handleFlip}></GameBoard>
            <GameOver plays={plays} show={gameOver} handleRestart={restart}></GameOver>
            <Footer></Footer>
        </div>

    );
}