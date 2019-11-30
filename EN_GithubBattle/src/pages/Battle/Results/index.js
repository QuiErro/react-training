import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import styles from './Result.less'
import Card from './children/Card'

class Result extends Component {
  constructor(props){
    super(props);

    this.state = {
      winner: {},
      loser: {}
    }
  }

  async componentDidMount(){
    const arr = window.location.search.slice(1).split('&');
    let playerOne;
    let playerTwo;
    arr.forEach(item => {
      const user = item.split('=');
      if(user[0] === 'playerOne'){
        [, playerOne] = user;
      }else if(user[0] === 'playerTwo'){
        [, playerTwo] = user;
      }
    });
    if(playerOne && playerTwo){
      const resOne = await axios.get(`https://api.github.com/users/${playerOne}`);
      const resTwo = await axios.get(`https://api.github.com/users/${playerTwo}`);
        if(resOne.status === 200 && resTwo.status === 200){
          const userOne = resOne.data || {};
              const userTwo = resTwo.data || {};
              const scoresOne = resOne.data.followers + resOne.data.public_repos;
              const scoresTwo = resTwo.data.followers + resTwo.data.public_repos; 
          if((scoresOne - scoresTwo) >= 0){
            this.setState({
              winner: {scores: scoresOne, player: userOne},
              loser: {scores: scoresTwo, player: userTwo}
            })
          }else{
            this.setState({
              loser: {scores: scoresOne, player: userOne},
              winner: {scores: scoresTwo, player: userTwo}
            })
          }
      }
    }
  }

  render() {
    const {bgStyle} = this.props;
    const {winner, loser} = this.state;

    return (
      <div>
        { 
            winner.scores && loser.scores ? (
              <div>
                <div id={styles.content}>
                  <Card title='Winner' bgStyle={bgStyle} info={winner} />
                  <Card title='Loser' bgStyle={bgStyle} info={loser} />
                </div>
                <Link className={styles['btn-link']} to="/battle">Reset</Link>
              </div>
            ) : (
              <img
                style={{
                  display: 'block', margin: '0 auto', width: '300px', height: '300px',
                }}
                src="https://img.zcool.cn/community/01136858d4d266a801219c7766cc7f.gif"
                alt=""
              />
            )
          }
      </div>
    )
  }
}

export default Result;
