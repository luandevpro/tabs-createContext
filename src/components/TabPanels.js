import React, { Component } from 'react'

export default class TabPanels extends Component {
  render() {
   var { data , activeIndex } = this.props
   var children = React.Children.map(this.props.children , child => {
      if(child.type.name === 'TabPanel'){
         return React.cloneElement(child, {
            data: data,
            activeIndex
         })
      }
      return child
   })
    return (
      <div className="panels">
         { children }
      </div>
    )
  }
}
