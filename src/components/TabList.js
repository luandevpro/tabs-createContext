import React, { Component } from 'react'

export default class TabList extends Component {
   render() {
      var { children } = this.props
      return (
         <div className="tabs">
            { children }
         </div>
      )
   }
}
