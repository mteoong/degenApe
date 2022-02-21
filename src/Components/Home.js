import React, {Component} from 'react';
import './Home.css';
import logo from '../pics/logo.png';
import background from '../pics/background.png';
import one from '../pics/1.png';
import two from '../pics/2.png';
import three from '../pics/3.png';
import four from '../pics/4.png';
import six from '../pics/6.png';
import seven from '../pics/7.png';
import eight from '../pics/8.png';
import lambo from '../pics/lambo.png';
import ten from '../pics/10.png';
import showcase from '../pics/showcase.gif';
import {checkStatus, returnCount} from './Mint';


class Home extends Component {
  state = {
    count: 1,
  }

  increment = () => {
    this.setState((state) => {
      if(state.count < 20) {
        checkStatus(document.getElementsByClassName('mint')[0], Number(document.getElementsByClassName("num")[0].value) + 1);
        return {count: state.count + 1}
      } else {
        return {count: state.count}
      }
    });
  }

  decrement = () => {
    this.setState((state) => {
      if(state.count > 1) {
        checkStatus(document.getElementsByClassName('mint')[0], Number(document.getElementsByClassName("num")[0].value ) - 1);
        return {count: state.count - 1}
      } else {
        return {count: state.count}
      }
    });
  }

  handleChange = (event) => {
    this.setState({state: event.target.value});
  }

  componentDidMount() {
    const mintButton = document.getElementsByClassName('mint')[0];
    const amount = Number(document.getElementsByClassName("num")[0].value);
    const minted = document.getElementsByClassName('minted')[0];

    returnCount(minted);
    checkStatus(mintButton, amount);
  }

  render() {
    return (
      <div className="body"> 
        <div className="top">
          <div className="title">
            <span>DA</span> 
            <img src={logo} id="logo"/>
            <span>LC</span>
          </div>
          <div className="nav-bar">
            <a className="link" href="#welcome">WELCOME</a>
            <a className="link" href="#mint">MINT</a>
            <a className="link" href="#apes">APES</a>
            <a className="link" href="#roadmap">ROADMAP</a>
            <a className="link" href="#team-link">TEAM</a>
          </div>
        </div>
        <img src={background} id="background"/>
        <div className="text">
          <div className="welcome-wrapper">
            <div className="welcome body-text">
              <h1 className="welcome">WELCOME TO THE DEGEN APE LAMBO CLUB</h1>
              <p className="welcome">DALC is a collection of 2,222 Degenerate Apes, created to unite degen traders from across the NFT community. Your Degen Ape doubles as your membership card to the OpenSeaBets Discord group, a community driven hub for discussing NFT alpha, degen plays, great wins, and equally great losses. We are a whole new level of degen. </p>
            </div>
            <div className="grid" id="welcome">
              <img src={one} id="grid"/>
              <img src={two} id="grid"/>
              <img src={six} id="grid"/>
              <img src={four} id="grid"/>
            </div>
          </div>
          <div className="big-wrapper">
            <div className="welcome-mint-wrapper">
              <div className="mint-top">
                <div className="welcome body-text mint-wrapper">
                  <h1 className="mint-text"id="mint">MINTING THE RIGHT WAY</h1>
                  <p className="welcome">Stealth Launch. No whitelists, no grinding, no bots, and no gas wars. Buying a Degen Ape costs 0.04 ETH for everyone. The first 300 will be offered for free to reward the most degenerate traders. </p>
                </div>
                <div className="mint-info">
                Note: Thirty Apes will be withheld from the sale for giveaways, marketing, community events, and for the team's memberships. 
                </div>
              </div>
            </div>
            <div className="minter">
            <div className="mint-right">
              <h1 className="mint-title">
                BUY AN APE. 
              </h1>
              <h1 className="mint-title">
                JOIN THE CLUB.
              </h1>
            </div>
            <div className="mint-left">
            <div className="sold">
                  300/2222
            </div>
            <img src={lambo} id="lambo"/>
            <div className="mint-function">
              <div className="price">
                0.029 Ξ
              </div>
              <div className="mint-amt">
                <button className="minmax" onClick={this.decrement}> - </button>
                <input className="num" type="text" value={this.state.count} onChange={this.handleChange} readOnly ></input>
                <button className="minmax" onClick={this.increment}> + </button>
              </div>
              <button className="mint">MINT</button>
            </div>
            </div>  
            </div>
          </div>
          <div className="welcome-wrapper">
            <div className="welcome body-text">
              <h1 className="welcome" id="apes">WHAT MAKES AN APE DEGEN?</h1>
              <p className="welcome">Each Degen Ape is unique and programmatically generated from over 130 possible traits. These traits include different expressions, vapes, and headwear. All traits were carefully designed to make sure each Ape is well suited to be a part of the Degen Ape Lambo Club. 
              </p>
              <p className="welcome-no-line">
              Hidden among the 2000 Apes are several rare 1/1s who represent the greatest degens in world history.  
              </p>
              <p className="welcome-no-line">
              Apes will reveal 24 hours after mint.  
              </p>
            </div>
            <img src={showcase} id="pic"/>
          </div>
          <div className="welcome-wrapper">
            <div className="welcome body-text">
              <h1 className="roadmap" id="roadmap">LIKE WALLSTREETBETS ENTERED THE METAVERSE</h1>
              <p className="roadmap">DALC is a place for traders to make money and have fun while doing it. When you buy a Degen Ape, you’re not simply buying a creative piece of art, you get a few other neat benefits. 
              </p>
              <p className="roadmap">
              First, your Degen Ape grants you access to OpenSeaBets, a Discord group that contains social and alpha channels accessible only to wallets containing at least one Degen Ape. As long-time members of the WSB community, our goal was to create a similar space for degens in the web 3.0 space, where degeneracy is plentiful but has yet to be united. This is where the future of the community will be decided by the community, not by some arbitrary roadmap. 
              </p>
              <p className="roadmap">
              Beyond OpenSeaBets, your Ape is also part of the <b>DEGEN NFT</b> Ecosystem, a community we plan to grow over time. Degen Ape holders will get access to members only pricing and sale times to all future collections offered by our artist.  
              </p>
            </div>
          </div>
          <div className="welcome-wrapper">
            <div className="welcome body-text">
              <h1 className="welcome" id="team-link">THE TEAM</h1>
              <p className="welcome">The Degen Ape Lambo Club started as a fun hobby project between three friends, but grew into something we realized could make a pretty decent derivative project that would reach degens just like us. The NFT community has been kind of sucky lately and we wanted to build something that could (even in a small way) make Web 3.0 fun again. </p>
              <p className="roadmap">
                - Boogie, George, and KAT
              </p>
            </div>
            <div className="grid">
              <img src={three} id="grid"/>
              <img src={ten} id="grid"/>
              <img src={eight} id="grid"/>
              <img src={seven} id="grid"/>
            </div>
          </div>
          <div className="mid">
              <img src={logo} id="team"/>
            </div>
        </div>
      </div>
    );
  }
}

export default Home;