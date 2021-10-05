import React, { Component, useState } from 'react';

import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

const Slider = props => {
    const [nowState, setState] = useState({
        value: 0,
        slides: [<div>1</div>, <div>2</div>, <div>3</div>],
    });

    const handleChange = value => {
        console.log(value);
        setState(p => {
            return { ...p, value: value };
        });
    };

    return (
        <Carousel plugins={['arrows']}>
            <div>1</div>
            <div>2</div>
            <div>3</div>
        </Carousel>
    );
};

export default Slider;
