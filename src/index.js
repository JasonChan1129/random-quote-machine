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
            <div id='quote' style={ this.props.style } onAnimationEnd={this.props.onAnimationEnd()}
            className={ this.props.fade }>
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
        // this.quote = React.createRef();
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
        // let quote = this.quote.current;
        // quote.childNodes[0].classList.toggle('fade');
    }

    onAnimationEnd() {
        // this.setState({
        //     fade: false,
        // })
        console.log('end')
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
                <div id='quote-box' ref={ this.quote}>
                    <Quote text = { text } author = { author } style={ styleC }
                    onAnimationEnd={() => this.onAnimationEnd()} fade={'fade' ? this.state.fade : ''}/>
                    <div id='button-group'>
                        <Links style={ styleBC }/>
                        <NextQuote style={ styleBC } 
                        onClick = {() => this.handleClick()}
                        />
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
