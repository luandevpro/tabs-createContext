import React , { Component ,Fragment } from 'react'

export default class TabPanel extends Component {
  render() {
     var { data , activeIndex } = this.props
    return<Fragment>{data[activeIndex].content}</Fragment>
  }
}
