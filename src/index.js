import React from 'react';
import ReactDOM from 'react-dom'
import './index.scss';

class QuoteMachine extends React.Component {
  constructor() {
    super()
    this.state = { 
      quoteData : [
        {
          id: 1,
          quote: "The man who thinks he can and the man who thinks he can't are both right. Which one are you?",
          author: "Henry Ford"
        },
        {
          id: 2,
          quote: "Care about what other people think and you will always be their prisoner.",
          author: "Lau Tzu"     
        },
        {
          id: 3,
          quote: "It is the mark of an educated mind to be able to entertain a thought without accepting it.",
          author: "Aristotle"
        },
        {
          id: 4,
          quote: "What man actually needs is not some tension-less state but rather the striving and struggling for some goal worthy of him.",
          author: "Viktor Frankl"
        },
        {
          id: 5,
          quote: "He who is not contented with what he has, would not be contented with what he would like to have.",
          author: "Socrates"
        },
        {
          id: 6,
          quote: "Death does not concern us, because as long as we exist, death is not here. And when it does come, we no longer exist.",
          author: "Epicurus"
        },
        {
          id: 7,
          quote: "Every man I meet is my superior in some way. In that, I learn of him.",
          author: "Ralph W. Emerson"
        },
        {
          id: 8,
          quote: "Some people get an education without going to college; the rest get it after they get out.",
          author: "Mark Twain"
        },
        {
          id: 9,
          quote: "If we don’t believe in freedom of expression for people we despise, we don’t believe in it at all.",
          author: "Noam Chomsky"
        },
        {
          id: 10,
          quote: "Pain is inevitable. Suffering is optional.",
          author: "Haruki Murakami"
        }
      ]
    }
    this.getNewQuote = this.getNewQuote.bind(this)
  }
  getNewQuote() {
    const randomId = Math.floor(Math.random() * this.state.quoteData.length)
    document.getElementById("text").innerHTML = 
    	this.state.quoteData[randomId].quote
    document.getElementById("author").innerHTML = 
    	`-- ${this.state.quoteData[randomId].author}`
  }
  tweetQuote(e) {
    e.preventDefault()
    console.log(`This button has been disabled.`)
  }
  render() {
    const index = Math.floor(Math.random() * this.state.quoteData.length)
    const quoteValue = this.state.quoteData[index]
    return (
      <div className="wrapper">
        <QuoteComponent
          key={quoteValue.id}
          quoteObj={quoteValue}
        />
        <AuthorComponent
          key={quoteValue.id}
          quoteObj={quoteValue}
        />
        <FooterComponent
          key={quoteValue.id}
          getNewQuote={this.getNewQuote}
        />
      </div>
    )
  }
}
function QuoteComponent(props) {
  return (
    <span>
      <i className="fas fa-quote-left" alt="&quot;" />
      <p id="text">{props.quoteObj.quote}</p>
      <i className="fas fa-quote-right" alt="&quot;" />
    </span>
  )
}
function AuthorComponent(props) {
  return (
    <p id="author">-- {props.quoteObj.author}</p>
  )
}
function FooterComponent(props) {
  return (
    <div id="quote-footer">
      <button id="new-quote" onClick={() => props.getNewQuote()}>New quote</button>
    </div>
  )
}
ReactDOM.render(<QuoteMachine />, document.getElementById("quote-box"));