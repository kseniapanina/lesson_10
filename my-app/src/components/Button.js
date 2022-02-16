import React, { Component } from 'react';
import { ThemeContext } from './ThemeContext';


class Button extends Component {

    render() {
        return (
            <ThemeContext.Consumer>
                {({ click }) => (
                    <button onClick={click}>
                        Change theme!
                    </button>
                )}
            </ThemeContext.Consumer>
        )
    }
}

export default Button;