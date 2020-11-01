import React from "react";
import "./App.css";

const API =
  "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

class App extends React.Component {
  state = {
    quotes: [
      {
        quote: "Strive not to be a success, but rather to be of value.",
        author: "Albert Einstein",
      },
    ],
    index: 0,
  };
  componentDidMount() {
    fetch(API)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          quotes: data.quotes,
        });
      });
  }

  render() {
    return <p>hola</p>;
  }
}

export default App;
