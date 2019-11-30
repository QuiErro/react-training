import React from 'react'
import ReactDOM from 'react-dom'
import App from '@/App'
import 'normalize.css/normalize.css'
import 'font-awesome/css/font-awesome.min.css'
import '@/styles/index.less'

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);

if (module.hot) {
  module.hot.accept();
}
