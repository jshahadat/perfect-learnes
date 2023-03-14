import React from 'react';
import './Service.css'

const Service = () => {
    return (
        <div className='mt-5'>
            <div className="headers mt-5">
                <h1 className='text-center text-white fw-bold'>Reliable, efficient Teaching</h1>
                <h1 className='text-center text-white fw-semibold'>Powered by <span className='learn'>Perfect Learn</span></h1>

                <p>Our Artificial Intelligence powered tools use millions of project data points
                    to ensure that your project is successful</p>
            </div>
            <div className="row1-container">
                <div className="box box-down cyan">
                    <h2>Supervisor</h2>
                    <p>Monitors activity to identify project roadblocks</p>
                    <img src="https://assets.codepen.io/2301174/icon-supervisor.svg" alt="" />
                </div>

                <div className="box red">
                    <h2>Team Builder</h2>
                    <p>Scans our talent network to create the optimal team for your project</p>
                    <img src="https://assets.codepen.io/2301174/icon-team-builder.svg" alt="" />
                </div>

                <div className="box box-down blue">
                    <h2>Calculator</h2>
                    <p>Uses data from past projects to provide better delivery estimates</p>
                    <img src="https://assets.codepen.io/2301174/icon-calculator.svg" alt="" />
                </div>
            </div>
            <div className="row2-container">
                <div className="box orange">
                    <h2>Karma</h2>
                    <p>Regularly evaluates our talent to ensure quality</p>
                    <img src="https://assets.codepen.io/2301174/icon-karma.svg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Service;