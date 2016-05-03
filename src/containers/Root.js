import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from '../store/configureStore'
import ToolboxApp from 'react-toolbox/lib/app'
import App from '../App';

const store = configureStore()

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <ToolboxApp>
          <App />
        </ToolboxApp>
      </Provider>
    )
  }
}
