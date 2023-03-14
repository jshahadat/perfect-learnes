import React from 'react';
import './Banner.css'
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Picture from '../../../assets/logo/home-logo.jpg'

const Banner = () => {
    return (
        <div className='bg-dark mb-5 mt-5'>

            <h1 className='H11 bg-dark mb-4 fw-semibold' data-text="The Road to Success is Always Under Construction">
                “The Road to Success is Always Under Construction”</h1>

            <Container className='d-lg-flex'>
                <div className='col-lg-6 '>
                    <img src={Picture} alt="" className='w-100' />
                </div>


                <div className='col-lg-6'>

                    <div class="patterns mt-5">
                        <svg width="100%" height="100%">
                            <defs>
                                <pattern id="polka-dots" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                                    {/* <circle fill="#be9ddf" cx="20" cy="20" r="3"></circle> */}
                                </pattern>
                                <style>
                                    @import url("https://fonts.googleapis.com/css?  family=Lora:400,400i,700,700i");
                                </style>
                            </defs>
                            <rect x="0" y="0" width="100%" height="100%" fill="url(#polka-dots)"> </rect>
                            <text x="50%" y="50%" text-anchor="middle">
                                Learn Civil Engineering
                            </text>
                        </svg>
                    </div>

                    <div className=''>
                        <ul className='text-white'>
                            <li className='mt-4'>A civil engineer helps to design and build public works infrastructure including roads, bridges, canals, dams, airports, sewerage systems, pipelines, buildings, and railways.</li>
                            <li>Beyond the study of structural engineering books, today most civil engineers work in offices designing structural plans that can withstand changes in our environment including earthquakes and hurricanes.</li>
                            <li>Civil engineering courses cover a wide variety of civil engineering subjects</li>
                            <li>With engineering programs online, you can register and learn more about civil engineering today.</li>
                        </ul>
                    </div>

                    <Link to='/courses'>   <Button className='ms-5 mt-4 p-2 ps-5 pe-5 fs-4 fw-semibold color ' variant="success" >Contenue Course</Button>
                    </Link>
                </div>


            </Container>
        </div>
    );
};

export default Banner;