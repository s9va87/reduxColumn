import React from 'react';
// import Column from "./Colon";
import {Row} from "reactstrap";

function Board(props) {

    const {cards} = props;

    return (
        <Row>
            <h2>Boards</h2>
            {/*{columns.map(el => <Column column={el} cards={cards}/>)}*/}
        </Row>
    );
}

export default Board;
