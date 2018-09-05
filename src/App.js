import React, { Component } from 'react';
import Tabs from './components/Tabs';
import AppProvider from './AppProvider';

class App extends Component {
  render() {
   return (
      <AppProvider>
          <Tabs>
            <Tabs.TabList>
              <Tabs.TabContainer/>
            </Tabs.TabList>
            <Tabs.TabPanels>
               <Tabs.TabPanelContainer/>
            </Tabs.TabPanels>
          </Tabs>
      </AppProvider>
    );
  }
}

export default App;
