import React from 'react';
import AdminUser from './AdminUser';
import Banner from './Banner';
import Info from './Info';
import Offer from './Offer';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Offer></Offer>
            <AdminUser></AdminUser>
            <Info></Info>
        </div>
    );
};

export default Home;