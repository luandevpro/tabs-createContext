import React, { Component } from 'react'

export default class Tab extends Component {
  render() {
   var { isActive ,children ,onSelect , data } = this.props
   console.log(data)
   return (
      <div
         className={isActive ? "tab active" : "tab"}
         onClick={() => onSelect()}
      >
         { children }
      </div>
    )
  }
}

                           