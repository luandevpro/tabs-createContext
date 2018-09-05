import React, { Component , Fragment} from 'react'

export default class Tab extends Component {
  render() {
   var { activeIndex ,onSelected , data } = this.props
   return (
      <Fragment>
         {
            data.map((data,index) => (
               <div
                  key={index}
                  className={activeIndex === index ? "tab active" : "tab"}
                  onClick={() => onSelected(index)}
               >
                  {data.label}
               </div>
            ))
         }
      </Fragment>
    )
  }
}

                           