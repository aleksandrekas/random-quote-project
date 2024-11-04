import { randomColor,getQuotes } from "../dataFunc/data"
import { useEffect, useState } from "react"







export default function QuoteBox(){
    const[state,setState] = useState({
        color: '',
        quote:'',
        author:''
    })

    const fetchRandomQuote = async () => {
        const randomQuote = await getQuotes();
        setState({
            color: randomColor(),
            quote: randomQuote.quote,
            author: randomQuote.author
        });
    };

    useEffect(()=>{
        fetchRandomQuote()
    },[])

    const tumblrLink = `https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=${encodeURIComponent(state.author)}&content=${encodeURIComponent(state.quote)}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`;

    const twitterLink = `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${encodeURIComponent('"' + state.quote + '" ' + state.author)}`;


    return(
        <div id="body"  style={{background:state.color}}>
            <div id="quote-box">
                <div id="text">
                    <i className="fa fa-quote-left" style={{color:state.color}} ></i>
                    <span style={{color:state.color}}>{state.quote}</span>
                </div>
                <h4 id="author" style={{color:state.color}}> - {state.author}</h4>
                <div id="buttons">
                    <div className="socials">
                        <a className="soc-logo" style={{background:state.color}} href={twitterLink} target="_blank" >
                            <ion-icon className='twitter' name="logo-twitter"></ion-icon>
                        </a>
                        <a id="tumbler" style={{background:state.color}} href={tumblrLink} target="_blank" >t</a>

                    </div>
                    <button id="new-quote" onClick={fetchRandomQuote} style={{background:state.color}}>New Quote</button>
                </div>
            </div>
        </div>
    )


}


