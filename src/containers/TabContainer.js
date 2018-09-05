import React from 'react'
import { Consumer } from "./../contexts"
import Tab from '../components/Tab';

const TabContainer = (props) => (
   <Consumer>
      {
         ({activeIndex,onSelected,data}) => <Tab 
            {...props}
            activeIndex={activeIndex}
            onSelected={onSelected}
            data={data}
         />
      }
   </Consumer>
)

export default TabContainer