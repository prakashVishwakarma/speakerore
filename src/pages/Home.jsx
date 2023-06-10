import React from 'react'
import Navbar from '../Components/Common/Navbar'
import Allowance from '../Components/allowance/Allowance'
import Eventlist from '../Components/EventList/Eventlist'
import Categories from '../Components/categories/Categories'
import Terms_N_Conditions from '../Components/Terms_N_Conditions/Terms_N_Conditions'

const Home = () => {
  return (
    <div>
      {/* <Navbar/>
      <Allowance/>
      <Eventlist/>
      <Categories/> */}

      <Terms_N_Conditions />
      
    </div>
  )
}

export default Home
