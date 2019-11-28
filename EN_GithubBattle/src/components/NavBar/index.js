import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: 'popular',
    };
  }

    // 导航切换
    menuClick = (currentPage) => {
      // state存储选中的板块key值
      this.setState({
        currentPage,
      });
    }

    render() {
      const { bgStyle, switchBackground } = this.props;
      const { currentPage } = this.state;
      const bgSwitch = bgStyle === 'light' ? 'dark' : 'light';
      const linkStyle = { fontSize: '18px', fontWeight: 'bold', color: bgStyle === 'light' ? '#000' : '#fff' };

      return (
        <div id="navBar" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div id="barContent">
            <Link style={currentPage === 'popular' ? { ...linkStyle, marginRight: '10px', color: 'rgb(187, 46, 31)' } : { ...linkStyle, marginRight: '10px' }} to="/" onClick={() => this.menuClick('popular')}>Popular</Link>
            <Link style={currentPage === 'battle' ? { ...linkStyle, color: 'rgb(187, 46, 31)' } : { ...linkStyle }} to="/battle" onClick={() => this.menuClick('battle')}>Battle</Link>
          </div>
          <div id="bgSwitch">
            <button
              className="btn-bgcolor"
              type="button"
              style={{
                fontSize: '30px', background: 'transparent', outline: 'none', border: 'none', cursor: 'pointer',
              }}
              onClick={() => switchBackground(bgSwitch)}
            >
              { bgStyle === 'light' ? '🔦' : '💡' }
            </button>
          </div>
        </div>
      );
    }
}

export default NavBar;
