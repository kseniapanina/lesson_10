import { ThemeContext, themes } from './components/ThemeContext';
import './App.css';
import IntermediatPage from './components/IntermediatPage';
import React from "react"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      themes: themes.dark,
    };
  }
  click = () => this.setState(state => ({
    themes:
      state.themes === themes.dark
        ? themes.light
        : themes.dark,
  }));

  render() {
    const value = {
      click: this.click,
    }
    return(
      <ThemeContext.Provider value={ value } >
    <div style={{ backgroundColor: this.state.themes.background }} className="App">
      <IntermediatPage />

    </div>
      </ThemeContext.Provider >
    );
}
}

export default App;
