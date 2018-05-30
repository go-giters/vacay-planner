import React from 'react';
import NavBar from '../NavBar/NavBar.jsx';
import MyTripsPageBody from './MyTripsPageBody.jsx';

const MyTripsPage = () => {
  return (
    <div className='mytripspage'>
      <NavBar />
      <MyTripsPageBody />
    </div>
  )
}
export default MyTripsPage;