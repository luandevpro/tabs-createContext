import React, { Component } from 'react'

export default class TabList extends Component {
   render() {
      var { activeIndex,data } = this.props
      var children = React.Children.map(this.props.children, (child,index) => {
         switch(child.type.name){
            case 'Tab':
               return React.cloneElement(child, {
                  isActive: activeIndex === index,
                  data,
                  onSelect: () => this.props.onSelect(index)
               })
            default:
               return child   
         }
      })
      return (
         <div className="tabs">
            { children }
         </div>
      )
   }
}
