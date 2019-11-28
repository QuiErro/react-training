import React, { Component } from 'react';

class Battle extends Component {
  render() {
    const { bgStyle } = this.props;
    const insLightStyle = 'rgba(0, 0, 0, 0.08)';
    const insDarkStyle = 'rgb(36, 40, 42)';
    const insStyle = bgStyle === 'light' ? insLightStyle : insDarkStyle;
    const btnLightStyle = { background: '#f2f2f2', color: '#c7c7c7' };
    const btnDarkStyle = { background: '#292929', color: '#4a4a4a' };
    const btnStyle = bgStyle === 'light' ? btnLightStyle : btnDarkStyle;

    return (
      <div id="battle" style={{ color: bgStyle === 'light' ? '#000' : '#fff' }}>
        <div className="instructions-container">
          <h1 style={{
            margin: '20px', textAlign: 'center', fontSize: '35px', fontWeight: '300',
          }}
          >Instructions
          </h1>
          <div style={{
            margin: '0 auto', width: '80%', display: 'flex', alignItems: 'center', flexWrap: 'wrap',
          }}
          >
            <div style={{ flex: 1, minWidth: '300px', textAlign: 'center' }}>
              <h3 style={{ margin: '10px', fontSize: '28px', fontWeight: '300' }}>Enter two Github users</h3>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 640 512"
                size="140"
                height="140"
                width="140"
                style={{
                  padding: '40px', borderRadius: '3px', color: 'rgb(255, 191, 116)', background: insStyle,
                }}
              ><path d="M192 256c61.9 0 112-50.1 112-112S253.9 32 192 32 80 82.1 80 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C51.6 288 0 339.6 0 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zM480 256c53 0 96-43 96-96s-43-96-96-96-96 43-96 96 43 96 96 96zm48 32h-3.8c-13.9 4.8-28.6 8-44.2 8s-30.3-3.2-44.2-8H432c-20.4 0-39.2 5.9-55.7 15.4 24.4 26.3 39.7 61.2 39.7 99.8v38.4c0 2.2-.5 4.3-.6 6.4H592c26.5 0 48-21.5 48-48 0-61.9-50.1-112-112-112z" />
              </svg>
            </div>
            <div style={{ flex: 1, minWidth: '300px', textAlign: 'center' }}>
              <h3 style={{ margin: '10px', fontSize: '28px', fontWeight: '300' }}>Battle</h3>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 640 512"
                size="140"
                height="140"
                width="140"
                style={{
                  padding: '40px', borderRadius: '3px', color: 'rgb(114, 114, 114)', background: insStyle,
                }}
              ><path d="M544 224l-128-16-48-16h-24L227.158 44h39.509C278.333 44 288 41.375 288 38s-9.667-6-21.333-6H152v12h16v164h-48l-66.667-80H18.667L8 138.667V208h8v16h48v2.666l-64 8v42.667l64 8V288H16v16H8v69.333L18.667 384h34.667L120 304h48v164h-16v12h114.667c11.667 0 21.333-2.625 21.333-6s-9.667-6-21.333-6h-39.509L344 320h24l48-16 128-16c96-21.333 96-26.583 96-32 0-5.417 0-10.667-96-32z" />
              </svg>
            </div>
            <div style={{ flex: 1, minWidth: '300px', textAlign: 'center' }}>
              <h3 style={{ margin: '10px', fontSize: '28px', fontWeight: '300' }}>See the winner</h3>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 576 512"
                size="140"
                height="140"
                width="140"
                style={{
                  padding: '40px', borderRadius: '3px', color: 'rgb(255, 215, 0)', background: insStyle,
                }}
              ><path d="M552 64H448V24c0-13.3-10.7-24-24-24H152c-13.3 0-24 10.7-24 24v40H24C10.7 64 0 74.7 0 88v56c0 35.7 22.5 72.4 61.9 100.7 31.5 22.7 69.8 37.1 110 41.7C203.3 338.5 240 360 240 360v72h-48c-35.3 0-64 20.7-64 56v12c0 6.6 5.4 12 12 12h296c6.6 0 12-5.4 12-12v-12c0-35.3-28.7-56-64-56h-48v-72s36.7-21.5 68.1-73.6c40.3-4.6 78.6-19 110-41.7 39.3-28.3 61.9-65 61.9-100.7V88c0-13.3-10.7-24-24-24zM99.3 192.8C74.9 175.2 64 155.6 64 144v-16h64.2c1 32.6 5.8 61.2 12.8 86.2-15.1-5.2-29.2-12.4-41.7-21.4zM512 144c0 16.1-17.7 36.1-35.3 48.8-12.5 9-26.7 16.2-41.8 21.4 7-25 11.8-53.6 12.8-86.2H512v16z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="player-container" style={{ margin: '100px 0' }}>
          <h1 style={{
            margin: '20px', textAlign: 'center', fontSize: '35px', fontWeight: '300',
          }}
          >Players
          </h1>
          <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
            <div style={{
              flex: 1, display: 'block', margin: '0 20px', padding: '10px',
            }}
            >
              <span
                style={{
                  display: 'block', margin: '5px 0', fontSize: '20px', fontWeight: '300',
                }}
              >Player One
              </span>
              <div style={{ display: 'flex' }}>
                <input
                  style={{
                    flex: 2, padding: '8px', fontSize: '16px', borderRadius: '3px', border: 'none', background: bgStyle === 'light' ? 'rgba(0,0,0,0.02)' : '#000', boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.15)',
                  }}
                  placeholder="github username"
                  autoComplete="off"
                />
                <button
                  type="button"
                  style={{
                    flex: 1, marginLeft: '10px', padding: '10px', fontSize: '16px', borderRadius: '3px', border: 'none', cursor: 'pointer', letterSpacing: '2px', ...btnStyle,
                  }}
                >SUBMIT
                </button>
              </div>
            </div>
            <div style={{ flex: 1, margin: '0 20px', padding: '10px' }}>
              <span
                style={{
                  display: 'block', margin: '5px 0', fontSize: '20px', fontWeight: '300',
                }}
              >Player Two
              </span>
              <div style={{ display: 'flex' }}>
                <input
                  style={{
                    flex: 2, padding: '8px', fontSize: '16px', borderRadius: '3px', border: 'none', background: bgStyle === 'light' ? 'rgba(0,0,0,0.02)' : '#000', boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.15)',
                  }}
                  placeholder="github username"
                  autoComplete="off"
                />
                <button
                  type="button"
                  style={{
                    flex: 1, marginLeft: '10px', padding: '10px', fontSize: '16px', borderRadius: '3px', border: 'none', cursor: 'pointer', letterSpacing: '2px', ...btnStyle,
                  }}
                >SUBMIT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Battle;
