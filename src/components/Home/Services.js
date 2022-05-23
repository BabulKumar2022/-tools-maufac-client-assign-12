import React from 'react';
import circulersaw from '../../assets/images/circular-saw-.jpg'
import drillBit from '../../assets/images/Drill-bit.jpg'
import drill from '../../assets/images/cordless-drill-driver-.jpg'
import Service from './Service';

const Services = () => {

        const services =[
            {
                _id: 1,
                name: "circuler saw",
                description: "Full Load Watts Input	1050 Watts  No Load Current1.9 rpm,View Complete Details",
                img: circulersaw
            },
            {
                _id: 2,
                name: "Cordles ",
                description: "Full Load Watts Input	1050 Watts  No Load Current1.9 rpm,View Complete Details",
                img: drill
            },
            {
                _id: 3,
                name: "Dril Bit",
                description: "Full Load Watts Input	1050 Watts  No Load Current1.9 rpm,View Complete Details",
                img:drillBit
            },
        ]




    return (
        <div className='my-20'>
            <h1 className='text-center text-primary text-3xl'>Our Tools</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 ">
                {
                    services.map(service =><Service
                        key={service._id}
                        service={service}

                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;