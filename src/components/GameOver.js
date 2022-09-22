import React, { Fragment } from "react";

export default function GameOver(props){
    if(props.show){
        return(
            <div id="gameOver">
                <div id="gameOverMsg">
                    {`Parabéns, você conseguiu concluir em ${props.plays} jogadas.`}
                </div>
                <button id="restart" onClick={props.handleRestart}> JOGUE NOVAMENTE</button>
            </div>
        )
    }else{
        return <Fragment />
    }
}