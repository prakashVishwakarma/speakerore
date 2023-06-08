import React, { useRef, useState } from 'react'
import logo from '../../assets/img/logo.jpg'
import hambergure_icon from '../../assets/img/hamburger_icon.jpg'
import './Navbar.css'

const Navbar = () => {
    const [sidebarToggle, setSidebarToggle] = useState(true)
    const NavbarboxRef = useRef(null);

    const handleToggle = () => {
        const box = NavbarboxRef.current;
        // Apply initial styles
        box.style.transition = 'transform 0.3s ease-in-out';
        box.style.transform = sidebarToggle && 'translateX(70%)' ;
        box.style.right = !sidebarToggle && '-21%' ;
        box.style.display = sidebarToggle ?  'block':'none' ;

        // Delay style changes to ensure initial styles are applied before transition
        setTimeout(() => {
            box.style.transition = 'transform 0.3s ease-out';
            box.style.transform = sidebarToggle ? 'translateX(-0%)' : 'translateX(70%)';
            box.style.right = sidebarToggle ? '0%' : '-21%';
        }, 200);
        setSidebarToggle(!sidebarToggle)
    };

    return (<>
        <div className='Navbar_coontainer'>
            <div className="Navbar_logo">
                <img src={logo} alt="" />
            </div>
            <div onClick={() => handleToggle()} className="Navbar_hambergure_icon">
                <h6>HI DIVYA</h6>
                <img src={hambergure_icon} alt="" />
            </div>
        </div>
        {
            // !sidebarToggle &&
            <div ref={NavbarboxRef} id='Navbar_sidebar_id' className='Navbar_sidebar'>
                <div>
                    <div>

                        <img src={logo} alt="" />
                    </div>
                    <div className='Navbar_inputfield'>
                        <div>
                            <input type="text" placeholder='Events' className='white_text' name="Events" id="" />
                            <input type="text" placeholder='Create new event' name="Create new event" id="" />
                            <input type="text" placeholder='Upgrade' name="Upgrade" id="" />
                            <input type="text" placeholder='View Profile' name="View Profile" id="" />
                        </div>
                    </div>
                </div>
            </div>
        }
    </>
    )
}

export default Navbar
