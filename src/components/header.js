import React, { Component } from 'react';
import AppBar from 'react-toolbox/lib/app_bar';

export default class Header extends Component {
  render() {
    return (
      <AppBar fixed flat>
        <span>Reddit Gallery</span>
      </AppBar>
    )
  }
}
