import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'

const Info = () => {
    return (
        <div className="">
            <h1> Quick Info</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <InfoCard cardTitle="Opening Day" img={clock}></InfoCard>
                <InfoCard cardTitle="Office Location" img={marker}></InfoCard>
                <InfoCard cardTitle="Phone Contact" img={phone}></InfoCard>
            </div>
        </div>
    );
};

export default Info;