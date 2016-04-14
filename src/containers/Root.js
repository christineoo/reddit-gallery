import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from '../store/configureStore'
import AsyncApp from './AsyncApp'
import ToolboxApp from 'react-toolbox/lib/app'
import Header from '../components/header';

const store = configureStore()

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <ToolboxApp>
          <Header />
          <AsyncApp />
        </ToolboxApp>
      </Provider>
    )
  }
}
