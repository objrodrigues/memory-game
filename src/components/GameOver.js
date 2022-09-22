import React, { Fragment } from "react";

function GameOver(props){
    if(props.show){
        return(
            <div id="gameOver">
                <div id="gameOverMsg">
                    {`Parabéns, você conseguiu concluir em ${props.plays} jogadas.`}
                </div>
                <button id="restart" onClick={props.handleRestart}>Jogue novamente</button>
            </div>
        )
    }else{
        return <Fragment />
    }
}

export default GameOver;