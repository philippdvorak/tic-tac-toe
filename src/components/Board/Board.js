import React from "react";

import { BoardGame, BoardRow, Status } from "./Board.styles";

import Square from "../Square/Square";

class Board extends React.Component {

    render() {
        const status= "Next Player: x"

        return (
            <BoardGame>
                <Status>{status}</Status>
                <BoardRow>
                    <Square index="0"/>
                    <Square index="1"/>
                    <Square index="2"/>
                </BoardRow>
                <BoardRow>
                    <Square index="3"/>
                    <Square index="4"/>
                    <Square index="5"/>
                </BoardRow>
                <BoardRow>
                    <Square index="6"/>
                    <Square index="7"/>
                    <Square index="8"/>
                </BoardRow>
            </BoardGame>
        )
    }

}

export default Board;