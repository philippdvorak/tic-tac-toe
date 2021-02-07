import React from "react";

import { Wrapper } from "./Square.styles";

class Square extends React.Component {
    render() {
        return (
            <Wrapper className="square" onClick={this.props.onClick}>
                {this.props.value}
            </Wrapper>
        );
    }
}
export default Square;