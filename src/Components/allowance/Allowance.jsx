import React from 'react'
import './Allowance.css'
import Allowance_img from '../../assets/img/Allowance.png'

const Allowance = () => {
    return (
        <div className='allowance_container'>
            <div className="allowance_container_left">
                <h4>Gold Deposits - Events Exploration Page</h4>
                <p>Explore, Map, Analyse, Mine &amp; Extract. For best results, Choose events from your category and focus!</p>
            </div>

            <div className="allowance_container_right">
                <img src={Allowance_img} alt="" />
            </div>
        </div>
    )
}

export default Allowance
