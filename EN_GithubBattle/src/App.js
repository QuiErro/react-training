import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import styles from '@/App.less'

import config from './config';
import NavBar from '@/components/NavBar';
import Popular from '@/pages/Popular/Popular';
import BattleRouter from '@/pages/Battle/router';

class App extends Component {
  constructor() {
    super();
    this.state = {
      bgStyle: 'light', // 白天/黑夜 模式
      currentPage: window.location.pathname === '/battle' ? 'battle' : 'popular'
    };
  }

    switchBackground = (bgStyle) => {
      this.setState({
        bgStyle,
      });
    }

    render() {
      const { bgStyle, currentPage } = this.state;

      return (
        <Router>
          <div id={styles.app} className={bgStyle === 'dark' ? styles.dark : ''}>
            <div id={styles.container}>
              <NavBar bgStyle={bgStyle} currentPage={currentPage} switchBackground={this.switchBackground} />
              <div id={styles.layOut}>
                <Switch>
                  <Route exact path={`${config.BASE_URL}/`} render={() => <Popular bgStyle={bgStyle} />} />
                  <Route path={`${config.BASE_URL}/battle`} render={() => <BattleRouter bgStyle={bgStyle} />} />
                  <Redirect to={`${config.BASE_URL}/`}/>
                </Switch>
              </div>
            </div>
          </div>
        </Router>
      );
    }
}

export default App;
