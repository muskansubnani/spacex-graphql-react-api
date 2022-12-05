import React, { Fragment } from 'react';
// components
import RocketHeader from '../rocketHeader';
import TechInfo from '../techInfo';


const Rocket = ({ rocket }) => {
    const { id, name, height, diameter, stages, cost_per_launch, engines } = rocket;

    return (
        <Fragment>
            <div className="d-flex flex-column align-items-center justify-content-around">
                <RocketHeader id={id} name={name} />
                <TechInfo name={name} rocket={{ height, diameter, stages, cost: cost_per_launch }} />
            </div>
            <TechInfo name={engines.type} engine={engines} isEngine />
        </Fragment>
    );
};

export default Rocket;
