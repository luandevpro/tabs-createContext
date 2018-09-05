import React from 'react'
import { Consumer } from '../contexts';
import TabPanel from '../components/TabPanel';

const TabPanelContainer = (props) => (
   <Consumer>
      {
         ({activeIndex,data}) => <TabPanel 
            {...props}
            activeIndex={activeIndex}
            data={data}
         />
      }
   </Consumer>
)
export default TabPanelContainer
