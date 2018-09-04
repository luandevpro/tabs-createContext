import React, { Component } from 'react';
import Tabs from './components/Tabs';
import * as text from './text'
import {FaCar,FaBed,FaPlane,FaSpaceShuttle} from "react-icons/fa"
import TabPanel from './components/TabPanel';
import Tab from './components/Tab';

class App extends Component {
   state = {
      activeIndex: 0
   }
   onSelect = (index) => {
      this.setState(() => {
         return {
            activeIndex: index
         }
      })
   }
  render() {
   const data = [
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
    return (
      <div className="App">
          <Tabs>
            <Tabs.TabList>
               {
                  data.map((data,index) => <Tab key={index}>{data.label}</Tab>)
               }
            </Tabs.TabList>
            <Tabs.TabPanels>
               <TabPanel>
               </TabPanel>
            </Tabs.TabPanels>
          </Tabs>
      </div>
    );
  }
}

export default App;
