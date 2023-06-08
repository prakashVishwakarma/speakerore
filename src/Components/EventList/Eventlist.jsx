import React, { useRef, useState } from 'react'
import './Eventlist.css'
import filter_icon from '../../assets/img/filter_icon.jpg'
import EventlistInfo from '../EventlistInfo/EventlistInfo'

const Eventlist = () => {

    const [filterToggle, setFilterToggle] = useState(true)
    const NavbarboxRefFilter = useRef(null);


    const handleToggle = () => {
        const box = NavbarboxRefFilter.current;
        // Apply initial styles
        box.style.transition = 'transform 0.3s ease-in-out';
        box.style.transform = filterToggle && 'translateX(70%)' ;
        box.style.right = !filterToggle && '-21%' ;
        box.style.display = filterToggle ?  'block':'none' ;

        // box.style.transition = 'transform 0.3s ease-in-out';
        // box.style.transform = filterToggle ? 'translateX(70%)' : 'translateX(-0%)';
        // box.style.right = filterToggle ? '-70%' : '0%';
        // box.style.display = filterToggle ? 'none' : 'block';

        // Delay style changes to ensure initial styles are applied before transition
        setTimeout(() => {
            box.style.transition = 'transform 0.3s ease-out';
            box.style.transform = filterToggle ? 'translateX(-0%)' : 'translateX(70%)';
            box.style.right = filterToggle ? '0%' : '-21%';

            // box.style.transition = 'transform 0.3s ease-in-out';
            // box.style.transform = filterToggle ? 'translateX(-0%)' : 'translateX(70%)';
            // box.style.right = filterToggle ? '0%' : '-70%';
        }, 200);
        setFilterToggle(!filterToggle)
    };

    return (<>
        <div className='Eventlist_container'>
            <div className="Eventlist_container_left">
                <h4>Events list</h4>
            </div>

            <div onClick={() => handleToggle()} className="Eventlist_container_right">
                <img src={filter_icon} alt="" />
                <h4>Filter</h4>
            </div>
        </div>
        <hr />
        {/* {
            filterToggle && */}
        <div ref={NavbarboxRefFilter} className="Eventlist_filter_sidebar">
            <div className="Eventlist_filter_sidebar_fluid">
                <h3>Filter</h3>
                <p>Models</p>
                <div className="Eventlist_input_type_checkbox">
                    <input type="checkbox" name="" id="" />
                    <p>online</p>
                </div>
                <div className="Eventlist_input_type_checkbox">
                    <input type="checkbox" name="" id="" />
                    <p>In-person</p>
                </div>
                <div className="Eventlist_input_type_checkbox">
                    <input type="checkbox" name="" id="" />
                    <p>Hybrid</p>
                </div>

                <p>Cateogary</p>

                <select name="cars" id="cars">
                    <option value="volvo">Select a category </option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                </select>

                <p >Select a date</p>

                <select name="cars" id="cars">
                    <option value="volvo">Select a date</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                </select>

                <p>SpeakerOre</p>
                <div className="Eventlist_input_type_checkbox">
                    <input type="checkbox" name="" id="" />
                    <p className='p'>SpeakerOre Exclusive</p>
                </div>
            </div>
        </div>
        {/* } */}

        {/* use map funtion here */}
        <EventlistInfo />
        <EventlistInfo />
        <EventlistInfo />
        <EventlistInfo />
        <EventlistInfo />
        <EventlistInfo />
        <EventlistInfo />
        <EventlistInfo />
        <EventlistInfo />
        <EventlistInfo />
        <EventlistInfo />
        <EventlistInfo />
        <EventlistInfo />
    </>
    )
}

export default Eventlist
