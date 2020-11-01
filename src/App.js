import React from "react";
import "./App.css";

const API =
  "//gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

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
        this.setState(
          {
            quotes: data.quotes,
          },
          this.getRandomIndex
        );
      });
  }
  getRandomIndex = () => {
    const quotes = this.state.quotes;
    if (quotes.length > 0) {
      const index = Math.floor(Math.random() * quotes.length);
      this.setState({
        index,
      });
    }
  };

  render() {
    const quotes = this.state.quotes;
    const index = this.state.index;
    let quote = quotes[index];

    const twitterURL = `//twitter.com/intent/tweet?text=${quote.quote} - ${quote.author}`;
    return (
      <div className="wrapper">
        <div className="box">
          <div>
            <p className="quote">{quote.quote}</p>
            <cite className="author">- {quote.author} -</cite>
          </div>

          <div className="button-content">
            <a
              title="Tweet this!"
              className="btn"
              href={twitterURL}
              rel="noreferrer"
              target="_blank"
            >
              <i className="fab fa-twitter"></i> Tweet
            </a>
            <button className="btn" onClick={this.getRandomIndex.bind(this)}>
              <i className="fas fa-random"></i> New Quote
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
