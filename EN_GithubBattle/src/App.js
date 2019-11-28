import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NavBar from './components/NavBar';
import Popular from './pages/Popular/Popular';
import Battle from './pages/Battle/Battle';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      bgStyle: 'light', // 白天/黑夜 模式
    };
  }

    switchBackground = (bgStyle) => {
      this.setState({
        bgStyle,
      });
    }

    render() {
      const { bgStyle } = this.state;
      const appStyle = { width: '100%', height: 'auto' };

      return (
        <Router>
          <div id="app" style={bgStyle === 'dark' ? { ...appStyle, background: '#1c2022' } : appStyle}>
            <div id="container" style={{ margin: '0 auto', padding: '50px 0 0', width: '1200px' }}>
              <NavBar bgStyle={bgStyle} switchBackground={this.switchBackground} />
              <div id="layOut" style={{ marginTop: '30px', width: '100%' }}>
                <Switch>
                  <Route exact path="/" render={() => <Popular bgStyle={bgStyle} />} />
                  <Route path="/battle" render={() => <Battle bgStyle={bgStyle} />} />
                </Switch>
              </div>
            </div>
          </div>
        </Router>
      );
    }
}
