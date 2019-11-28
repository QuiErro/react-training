import React, { Component } from 'react';

class Header extends Component {
  render() {
    const {
      currentLab, labCategory, selectLabCategory, bgStyle,
    } = this.props;
    const commonStyle = {
      margin: '0 10px', background: 'transparent', border: 'none', outline: 'none', color: bgStyle === 'light' ? '#000' : '#fff', fontSize: '20px', fontWeight: 'bold', cursor: 'pointer',
    };
    const activeStyle = { ...commonStyle, color: 'rgb(187, 46, 31)' };

    return (
      <div style={{
        width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}
      >
        {
                    labCategory.map((item, key) => (
                      <button
                        type="button"
                        key={key}
                        style={key === currentLab ? activeStyle : commonStyle}
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
