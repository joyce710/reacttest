/*
This is static bottom footer,
displaying visiting date
*/

import React from 'react'
class Footer extends React.Component {
  render() {
    const year = (new Date()).getFullYear().toString();
    const month = (new Date()).getMonth().toString();
    const day = (new Date()).getDate().toString();
    // const time=new Date(new Date().setHours(0, 0, 0, 0)).getTime();
    console.log('933333');
    const monthName = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"];
    return (
      <div className = "footer">
        <h1 className = "footer-text">Today is {year}  {monthName[month]} {day} </h1>
      </div>
    )
  }
}
export default Footer
