import React from 'react';
import AvailableTools from './AvailableTools';
import ToolsBanner from './ToolsBanner';

const Tools = () => {
    return (
        <div>
            <h1>Tools</h1>
            <ToolsBanner></ToolsBanner>
            <AvailableTools></AvailableTools>
        </div>
    );
};

export default Tools;