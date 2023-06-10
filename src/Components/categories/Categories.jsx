import React, { useEffect, useState } from 'react'
import './Categories.css'
import agriculture from '../../assets/img/categories_img/agriculture.png'
import Advertising from '../../assets/img/categories_img/Advertising.png'
import banking from '../../assets/img/categories_img/banking.png'
import marketing from '../../assets/img/categories_img/marketing.png'
import parenting from '../../assets/img/categories_img/parenting.png'

import Artificial_Intelligence from '../../assets/img/categories_img/Artificial_Intelligence.png'
import Automobile from '../../assets/img/categories_img/Automobile.png'
import Business from '../../assets/img/categories_img/Business.png'
import Coaching from '../../assets/img/categories_img/Coaching.png'
import Communication from '../../assets/img/categories_img/Communication.png'
import Creativity from '../../assets/img/categories_img/Creativity.png'
import Design_Thinking from '../../assets/img/categories_img/Design_Thinking.png'
import Education from '../../assets/img/categories_img/Education.png'
import Finance from '../../assets/img/categories_img/Finance.png'
import Health from '../../assets/img/categories_img/Health.png'
import Human_Resources from '../../assets/img/categories_img/Human_Resources.png'
import Innovation from '../../assets/img/categories_img/Innovation.png'
import IT from '../../assets/img/categories_img/IT.png'
import Leadership from '../../assets/img/categories_img/Leadership.png'
import LGBTQ from '../../assets/img/categories_img/LGBTQ.png'
import Manufacturing from '../../assets/img/categories_img/Manufacturing.png'

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


// function SampleNextArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//         <div
//             className={className}
//             style={{ ...style, display: "block", background: "black", borderRadius: '50%' }}
//             onClick={onClick}
//         />
//     );
// }

// function SamplePrevArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//         <div
//             className={className}
//             style={{ ...style, display: "block", background: "black", borderRadius: '50%' }}
//             onClick={onClick}
//         />
//     );
// }

const Categories = () => {

    const [carousel, setCarousel] = useState([
        ["agriculture", agriculture],
        ["Advertising", Advertising],
        ["banking", banking],
        ["marketing", marketing],
        ["parenting", parenting],
        ["Artificial", Artificial_Intelligence],
        ["Automobile", Automobile],
        ["Business", Business],
        ["Coaching", Coaching],
        ["Communication", Communication],
        ["Creativity", Creativity],
        ["Design Thinking", Design_Thinking],
        ["Education", Education],
        ["Finance", Finance],
        ["Health", Health],
        ["Human Resources", Human_Resources],
        ["Innovation", Innovation],
        ["IT", IT],
        ["Leadership", Leadership],
        ["LGBTQ", LGBTQ],
        ["Manufacturing", Manufacturing]
    ].map(([label, value]) => [label.toUpperCase(), value]))
    var settings = {
        dots: !true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        // nextArrow: <SampleNextArrow />,
        // prevArrow: <SamplePrevArrow />,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    useEffect(() => {
        const sortArrayFunction = (carousel) => {
            // Create a copy of the array
            const sortedArray = [...carousel];

            // Perform bubble sort algorithm
            for (let i = 0; i < sortedArray.length - 1; i++) {
                for (let j = 0; j < sortedArray.length - 1 - i; j++) {
                    if (sortedArray[j][0] > sortedArray[j + 1][0]) {
                        // Swap elements
                        const temp = sortedArray[j];
                        sortedArray[j] = sortedArray[j + 1];
                        sortedArray[j + 1] = temp;
                    }
                }
            }

            // Update the state with the sorted array
            setCarousel(sortedArray);
        };

        sortArrayFunction(carousel)
    }, [carousel])

    return (
        <div className='Categories_container'>
            <div className='Categories_container_fluid'>
                <div className="Categories_container_fluid_text">
                    <h3>4000-40000 worldwide opportunities </h3>
                    <h3>across <span> categories </span> annually</h3>
                </div>
                <Slider {...settings}>
                    {
                        carousel?.map((value, i) => {
                            return (<div key={i} className='Categories_carousel_imgNh3'>
                                <img src={carousel[i][1]} alt="" />
                                <h3>{carousel[i][0]}</h3>
                            </div>)
                        })
                    }
                </Slider>
            </div>
        </div>
    )
}

export default Categories
