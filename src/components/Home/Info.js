import React from 'react';
import InfoCard from './InfoCard';
import flag from '../../assets/icons/flag.png'
import task from '../../assets/icons/task.png'
import feedback from '../../assets/icons/feedback.png'
import clients from '../../assets/icons/clients.png'

const Info = () => {
    return (
        <div className=" my-10">
            <h1 className='text-center text-4xl text-primary mb-10'>Business Summery</h1>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                <InfoCard cardTitle="Countries" number="110" img={flag}></InfoCard>
                <InfoCard cardTitle="Project complete" number="650+" img={task}></InfoCard>
                <InfoCard cardTitle="Feedback" number="350" img={feedback}></InfoCard>
                <InfoCard cardTitle="Happy Clients" number="450" img={clients}></InfoCard>
            </div>
        </div>
    );
};

export default Info;