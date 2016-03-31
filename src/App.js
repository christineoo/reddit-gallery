import React, { Component } from 'react';
import Button from 'react-toolbox/lib/button';
import style from '../style/style.scss'

export default class App extends Component {
  render() {
    return (
    <div>
      <h1>Hello, world.</h1>
      <Button label='test' />
    </div>
    );
  }
}
