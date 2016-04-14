import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ToolboxApp from 'react-toolbox/lib/app';
import Root from './containers/Root';
import configureStore from './store/configureStore'
import 'babel-polyfill';

const store = configureStore()

ReactDOM.render(<Root store={store} />, document.getElementById('root'));

//ReactDOM.render((<ToolboxApp><App /></ToolboxApp>), document.getElementById('root'));
