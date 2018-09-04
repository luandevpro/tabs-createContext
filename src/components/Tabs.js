import React, { Component } from 'react'
import * as text from './../text'
import {FaCar,FaBed,FaPlane,FaSpaceShuttle} from "react-icons/fa"
import TabList from './TabList';
import TabPanels from './TabPanels';

export default class Tabs extends Component {
   state = {
      activeIndex: 3,
      data : [
         {
           label: <FaCar />,
           content: text.cars
         },
         {
           label: <FaBed />,
           content: text.hotels
         },
         {
           label: <FaPlane />,
           content: text.flights
         },
         {
           label: <FaSpaceShuttle />,
           content: text.space
         }
       ]
   }
   onSelect = (activeIndex) => {
      this.setState({activeIndex})
   }
   static TabList = TabList
   static TabPanels = TabPanels
   render() {
      var children = React.Children.map(this.props.children , child => {
         switch(child.type.name){
            case 'TabList':
               return React.cloneElement(child , {
                  activeIndex: this.state.activeIndex,
                  data: this.state.data,
                  onSelect: this.onSelect
               })
            case 'TabPanels':
               return React.cloneElement(child, {
                  data: this.state.data,
                  activeIndex: this.state.activeIndex
               })   
            default:
               return child   
         }
      })
      return (
         <div className="Tabs">
            { children }
         </div>
      )
   }
}
