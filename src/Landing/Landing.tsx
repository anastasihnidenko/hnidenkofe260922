import React from 'react';
import './Landing.css'

const Landing = () => {
    return (
        <>
            <img className='header' src={require("../../src/img/planets.jpg")} />
            <div className='image_items'>
                <img className='left' src={require("../../src/img/chubaka.jpg")} />
                <img className='body' src={require("../../src/img/dogs.jpg")} />
                <button/>
                <img className='right' src={require("../../src/img/dyno.jpg")} />
            </div>

            <img className='footer' src={require("../../src/img/cats.jpg")} />
        </>
    );
};

export default Landing;
