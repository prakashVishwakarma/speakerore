import React from 'react'
import './EventlistInfo.css'
import education from '../../assets/img/education.jpg'
import location from '../../assets/img/location.jpg'
import time_icon from '../../assets/img/time_icon.jpg'

const EventlistInfo = () => {
    return (<>
        <div className='EventlistInfo_container'>
            <div className="EventlistInfo_container_fluid">
                <div>

                    <img src={education} alt="" />
                    <p>Education</p>
                </div>

                <p><b>Indian Business School,</b>  <span>Hyderabad</span> </p>

                <div>

                    <div className="EventlistInfo_location">
                        <div>
                            <img src={location} alt="" />
                            <p>Online event</p>
                        </div>
                        <div>
                            <img src={time_icon} alt="" />
                            <p>Jan 2, 2023 | 12 : 31 pm </p>
                        </div>
                    </div>

                </div>
                <div className='EventlistInfo_bottom_text'>
                    <div>
                        <p>Whatever your interest, from hiking and reading to networking and skill sharing...</p>
                        <button>View Details</button>
                    </div>
                </div>

            </div>
        </div>
        <hr />
    </>
    )
}

export default EventlistInfo
