import React from 'react';
import AdminUser from './AdminUser';
import Banner from './Banner';
import Info from './Info';
import Offer from './Offer';
import Services from './Services';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Testimonials></Testimonials>
            <Offer></Offer>
            <Info></Info>
            <AdminUser></AdminUser>
           
        </div>
    );
};

export default Home;