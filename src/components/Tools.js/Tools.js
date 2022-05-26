import React from 'react';
import AvailableTools from './AvailableTools';
import ToolsBanner from './ToolsBanner';

const Tools = () => {
    return (
        <div>
            <h1 className='text-4xl text-center text-purple-500 py-5'>Booking Now</h1>
            <ToolsBanner></ToolsBanner>
            <AvailableTools></AvailableTools>
        </div>
    );
};

export default Tools;