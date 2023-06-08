import React from 'react'
import Navbar from '../Components/Common/Navbar'
import Allowance from '../Components/allowance/Allowance'
import Eventlist from '../Components/EventList/Eventlist'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Allowance/>
      <Eventlist/>
      
    </div>
  )
}

export default Home
