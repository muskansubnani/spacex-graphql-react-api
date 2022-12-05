import React from 'react';
import { Card } from 'primereact/card';

const MainHeader = ({ name, description }) => (

    <Card >
                 <h1>{name}</h1>
        <p >{description}</p>
            </Card>
    
);

export default MainHeader;
