import React from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faTumblr } from "@fortawesome/free-brands-svg-icons";
import './index.css'
import { data } from './data'



class NextQuote extends React.Component {
    render() {
        return (
            <div id='new-quote'>
                <button type='button' style={ this.props.style } onClick={() => this.props.onClick()}
                >
                    Next quote
                </button>
            </div>
        )
    }
}

class Links extends React.Component {
    render() {
        return (
            <div id='tweet-quote' >
                <button type='button' style={ this.props.style }>
                    <FontAwesomeIcon icon={ faTwitter }></FontAwesomeIcon>
                </button>
                <button type='button' style={ this.props.style }>
                    <FontAwesomeIcon icon={ faTumblr }></FontAwesomeIcon>
                </button>
            </div>
        )
    }
}

class Quote extends React.Component {
    render() {
        return (
            <div id='quote' style={ this.props.style } className={ this.props.fade }
            onAnimationEnd = {() => this.props.onAnimationEnd()}>
                <div id='text'>
                    <p>" { this.props.text }</p>
                </div>
                <div id='author'>
                    <p>- { this.props.author }</p>
                </div>                
            </div>
        )
    }
}

class QuoteBoard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentIndex: 0,
            fade: false
        }
    }

    handleClick() {
        let currentIndex = this.state.currentIndex;
        let length = data.length
        currentIndex++;

        if (currentIndex === length) {
            this.setState(
                {
                    currentIndex: 0,
                    fade: true,
                }
            )
        }
        else {
            this.setState(
                {
                    currentIndex: currentIndex,
                    fade: true,
                }
            )
        }
    }

    onAnimationEnd() {
        this.setState({
            fade: false,
        })
    }

    render() {
        let text = data[this.state.currentIndex].text;
        let author =data[this.state.currentIndex].author;
        let styleBC = {
            backgroundColor: data[this.state.currentIndex].color
        }
        let styleC = {
            color: data[this.state.currentIndex].color,
        }
        return (
            <div id='container' style={ styleBC } >
                <div id='quote-box'>
                    <Quote text = { text } author = { author } style={ styleC }
                    fade = { this.state.fade ? 'fade' : '' } 
                    onAnimationEnd = {() => this.onAnimationEnd()}/>
                    <div id='button-group'>
                        <Links style={ styleBC }/>
                        <NextQuote style={ styleBC } onClick = {() => this.handleClick()}/>
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <QuoteBoard />,
    document.getElementById('root')
)
