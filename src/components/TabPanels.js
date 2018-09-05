import React, { Component } from 'react'

export default class TabPanels extends Component {
  render() {
   var { children } = this.props
    return (
      <div className="panels">
         { children }
      </div>
    )
  }
}
