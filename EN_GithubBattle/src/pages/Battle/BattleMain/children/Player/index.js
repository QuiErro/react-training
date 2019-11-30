import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import styles from './Player.less'

class Player extends Component {
  constructor(props){
    super(props);

    this.state = {
        playerOne: '',
        playerTwo: '',
        resultOne: {},
        resultTwo: {}
    }
  }

    // 文本框输入
    onInputChange = (e) => {
        const {name} = e.currentTarget;
        const {value} = e.currentTarget;
        this.setState({
            [name]: value
        })
    }

    // 按钮点击
    onBtnClick = async (name) => {
        const user = this.state[name];
        const resultUser = name === 'playerOne' ? 'resultOne' : 'resultTwo';
        if(user){
            const res = await axios.get(`https://api.github.com/users/${user}`);
            if(res.status === 200){
                this.setState({
                    [resultUser]: res.data || {}
                })
            }
        }
    }

    // 撤回用户
    cancelUser = (user) => {
        this.setState({
            [user]: {}
        })
    }
    
  render() {
    const { bgStyle } = this.props;
    const { playerOne, playerTwo, resultOne, resultTwo } = this.state;

    return (
      <div className={styles['player-container']}>
        <h1 className={styles['player-title']}>Players</h1>
        <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
          <div className={styles['player-item']}>
            <span className={styles['player-item-span']}>Player One</span>
            {
                  resultOne.node_id ? (
                    <div className={styles['user-row']}>
                      <div className={styles['player-info']}>
                        <img className={styles['avatar-small']} src={`${resultOne.avatar_url}` || 'https://img.zcool.cn/community/01136858d4d266a801219c7766cc7f.gif'} alt={`Avatar for ${resultOne.login}`} />
                        <a href={resultOne.html_url} className={`${styles.link} ${bgStyle === 'light' ? '' : styles['link-dark']}`}>{resultOne.login}</a>
                      </div>
                      <button type="button" className={styles['btn-clear']} onClick={() => this.cancelUser('resultOne')}><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" color="rgb(194, 57, 42)" size="26" height="26" width="26"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z" /></svg></button>
                    </div>
                    ) : (
                      <div className={styles['player-item-control']}>
                        <input
                          name="playerOne"
                          className={`${styles['player-item-input']} ${bgStyle === 'light' ? '' : styles['player-item-input-dark']}`}
                          placeholder="github username"
                          autoComplete="off"
                          onChange={this.onInputChange}
                          value={playerOne}
                        />
                        <button
                          type="button"
                          onClick={() => this.onBtnClick('playerOne')}
                          className={
                            playerOne ? `${styles['player-btn']} ${bgStyle === 'light' ? '' : styles['player-btn-dark']}`
                            :  `${styles['player-btn-disabled']} ${bgStyle === 'light' ? '' : styles['player-btn-disabled-dark']}`
}
                        >SUBMIT
                        </button>
                      </div>
                  )
              }
          </div>
          <div className={styles['player-item']}>
            <span className={styles['player-item-span']}>Player Two</span>
            {
                  resultTwo.node_id ? (
                    <div className={styles['user-row']}>
                      <div className={styles['player-info']}>
                        <img className={styles['avatar-small']} src={`${resultTwo.avatar_url}` || 'https://img.zcool.cn/community/01136858d4d266a801219c7766cc7f.gif'} alt={`Avatar for ${resultTwo.login}`} />
                        <a href={resultTwo.html_url} className={`${styles.link} ${bgStyle === 'light' ? '' : styles['link-dark']}`}>{resultTwo.login}</a>
                      </div>
                      <button type="button" className={styles['btn-clear']} onClick={() => this.cancelUser('resultTwo')}><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" color="rgb(194, 57, 42)" size="26" height="26" width="26"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z" /></svg></button>
                    </div>
                  ) : (
                    <div className={styles['player-item-control']}>
                      <input
                        name="playerTwo"
                        className={`${styles['player-item-input']} ${bgStyle === 'light' ? '' : styles['player-item-input-dark']}`}
                        placeholder="github username"
                        autoComplete="off"
                        onChange={this.onInputChange}
                        value={playerTwo}
                      />
                      <button
                        type="button"
                        onClick={() => this.onBtnClick('playerTwo')}
                        className={
                            playerTwo ? `${styles['player-btn']} ${bgStyle === 'light' ? '' : styles['player-btn-dark']}`
                            : `${styles['player-btn-disabled']} ${bgStyle === 'light' ? '' : styles['player-btn-disabled-dark']}`
}
                      >SUBMIT
                      </button>
                    </div>
                  )
              }
          </div>
        </div>
        {
            resultOne.node_id && resultTwo.node_id ? (
              <Link className={styles['btn-link']} to={`/battle/results?playerOne=${playerOne}&playerTwo=${playerTwo}`}>Battle</Link>
            ) : ''
          }
      </div>
    );
  }
}

export default Player;
