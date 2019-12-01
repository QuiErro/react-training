import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styles from './NavBar.less'
import config from '@/config'

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: props.currentPage || 'popular',
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

      return (
        <div id={styles.navBar}>
          <div id="barContent">
            <Link className={`${styles.link} ${bgStyle === 'light' ? '' : styles['link-dark']} ${currentPage === 'popular' ? styles['link-active'] : ''}`} to={`${config.BASE_URL}/`} onClick={() => this.menuClick('popular')}>Popular</Link>
            <Link className={`${styles.link} ${bgStyle === 'light' ? '' : styles['link-dark']} ${currentPage === 'battle' ? styles['link-active'] : ''}`} to={`${config.BASE_URL}/battle`} onClick={() => this.menuClick('battle')}>Battle</Link>
          </div>
          <div id="bgSwitch">
            <button
              className={styles['btn-bgcolor']}
              type="button"
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
