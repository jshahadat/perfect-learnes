import React from 'react';
import './TeamMember.css'

const TeamMember = () => {
    return (
        <div className='drum mt-5 pt-5 mb-5 pb-5'>
            <div className="board me-5">
                <img src="https://www.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg" alt="" />
            </div>
            <div className="board me-5">
                <span>My card</span>
            </div>
            <div className="board me-5">
                <span>My card</span>
            </div>
            <div className="board">
                <span>My card</span>
            </div>
        </div>
    );
};

export default TeamMember;