import React, { Component } from 'react'
import styles from './Header.less'

class Header extends Component {
  render() {
    const {
      currentLab, labCategory, selectLabCategory, bgStyle,
    } = this.props;

    return (
      <div className={styles['btn-content']}>
        {
                    labCategory.map((item, key) => (
                      <button
                        type="button"
                        key={key}
                        className={`${styles['btn-labs']} ${bgStyle === 'light' ? '' : styles.dark} ${key === currentLab ? styles.active : ''}`}
                        onClick={() => selectLabCategory(item)}
                      >
                        {item}
                      </button>
                    ))
                }
      </div>
    );
  }
}

export default Header;
