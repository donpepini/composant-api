import React, { Component } from "react";
import "./App.css";
import GenerateQuote from "./GenerateQuote";
import DisplayQuote from "./DisplayQuote";

class App extends Component {
  state = {
    quote: []
  };

  getQuote() {
    // Récupération de l'employé via fetch
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
      .then(response => response.json())
      .then(data => {
        // Une fois les données récupérées, on va mettre à jour notre state avec les nouvelles données
        this.setState({
          quote: data[0]
        });
    });
}
  render() {

    return (
      <div className="App">
        <GenerateQuote  selectQuote={() => this.getQuote()}/>
        <DisplayQuote quote={this.state.quote}  />
      </div>
    );
  }
}

export default App;
