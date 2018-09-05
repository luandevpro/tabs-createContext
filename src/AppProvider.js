import React, { Component } from 'react'
import { Provider } from './contexts'
import * as text from './text'
import {FaCar,FaBed,FaPlane,FaSpaceShuttle} from "react-icons/fa"

export default class AppProvider extends Component {
   state = {
      activeIndex: 0,
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
   onSelected = (activeIndex) => {
      this.setState({activeIndex})
   }
  render() {
     var { activeIndex , data } = this.state
    return (
      <Provider value={{
         activeIndex,
         data,
         onSelected: this.onSelected
      }}>
         <div className="App">
            { this.props.children }
         </div>
      </Provider>
    )
  }
}
