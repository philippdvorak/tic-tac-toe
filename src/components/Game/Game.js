import React from "react";

import { GameSuper, GameBoard, GameInfo} from "./Game.styles";
import Board from "../Board/Board";

class Game extends React.Component {

    render() {
        return (
            <GameSuper>
                <GameBoard>
                    <Board />
                </GameBoard>
                <GameInfo>
                    <div>
                        { /* STATUS */}
                        <ol>
                            { /* TODO */}
                        </ol>
                    </div>
                </GameInfo>
            </GameSuper>
        );
    }
}

export default Game;