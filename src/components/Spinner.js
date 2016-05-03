import React, { Component, PropTypes } from 'react'
import style from '../style/style.scss'

export default class Spinner extends Component {

    render() {
      const BOUNCE_SIZE = 10;
      const SPACING = 2;
      var bounceSizeInPixels = BOUNCE_SIZE + 'px'
      var bounceStyle = {height: bounceSizeInPixels, width: bounceSizeInPixels, marginRight: SPACING + 'px'}

      return (
        <div className={style.Spinner} style={{width: ((Number(BOUNCE_SIZE) + Number(SPACING)) * 3) + 'px'}}>
          <div className={style.bounce1} style={bounceStyle}/>
          <div className={style.bounce2} style={bounceStyle}/>
          <div className={style.Spinner.bounce3} style={bounceStyle}/>
        </div>
      )
    }
}
