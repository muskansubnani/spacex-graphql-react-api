import React from 'react';


const RocketHeader = ({ id, name }) => {
    const imgStyle = {
        backgroundImage: 'url(../assets/' + id + '.jpg)',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        height: '100vh',
    };

    return (
        <div className="d-flex flex-column justify-content-around w-100">
            <div style={imgStyle}>
                <div className="position-absolute d-flex flex-column align-items-center">
                    <h1>{name.toUpperCase()}</h1>
                </div>
            </div>
        </div>
    );
};

export default RocketHeader;
