import React from 'react';
import Banner from '../Banner/Banner';
import Instructor from '../Instructor/Instructor';
import Service from '../Service/Service';
import TeamMember from '../TeamMember/TeamMember';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Instructor></Instructor>
            <Service></Service>
            <TeamMember></TeamMember>
        </div>
    );
};

export default Home;