import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableTools = () => {

    const [services, setServices] = useState([]);
    const [toolsItem, setToolsItem ,refetch] = useState(null);



    useEffect(() =>{
        fetch('http://localhost:5000/service')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div>
            <h1 className='text-center text-4xl bg-primary my-5'>Available Tools</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    services.map(service =><Service
                    key={service._id}
                    service={service}
                    setToolsItem={setToolsItem}
                    ></Service>)
                }

            </div>
            {toolsItem && <BookingModal 
            toolsItem={toolsItem}
            setToolsItem={setToolsItem}
            refetch={refetch}
            ></BookingModal>}
        </div>
    );
};

export default AvailableTools;