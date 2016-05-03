import React, { Component } from 'react';
import Button from 'react-toolbox/lib/button';
import style from './style/style.scss';
import Header from './components/header';
import AsyncApp from './containers/AsyncApp'

export default class App extends Component {
  render() {
    return (
    <div>
      <Header />
      <AsyncApp />
    </div>
    );
  }
}
