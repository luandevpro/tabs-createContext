import React, { Component } from 'react'
import TabList from './TabList';
import TabPanels from './TabPanels';
import TabPanelContainer from '../containers/TabPanelContainer';
import TabContainer from '../containers/TabContainer';

export default class Tabs extends Component {
   static TabList = TabList
   static TabPanels = TabPanels
   static TabPanelContainer = TabPanelContainer
   static TabContainer = TabContainer
   render() {
      var { children } = this.props
      return (
         <div className="Tabs">
            { children }
         </div>
      )
   }
}
