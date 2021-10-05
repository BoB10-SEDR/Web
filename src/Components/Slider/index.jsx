import React, { Component, useEffect, useState } from 'react';
import '@Styles/slider.css';

import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import Item from './Item';

const Slider = props => {
    const { data = [] } = props;

    // TODO_P :: data 가공해야함 => pagenation (8개 단위로)

    const [nowTabIndex, setTabIndex] = useState(0);

    const [nowModuleData, setModuleData] = useState([]);

    const [nowItemIndex, setItemIndex] = useState(0);

    const dummyList = [1, 2, 3, 4, 5];

    useEffect(() => {
        // TODO_P :: Backend API 연동
        // setModuleData(getModuleData())
    }, []);

    const handleChange = value => {
        setTabIndex(value);
        setItemIndex(0);
    };

    return (
        <>
            <Carousel
                value={nowTabIndex}
                onChange={handleChange}
                plugins={['arrows']}
                draggable={false}
                animationSpeed={200}
            >
                {dummyList.map(e => (
                    <Item data={nowModuleData} nowSelected={nowItemIndex} setSelectedItemIndex={setItemIndex} />
                ))}
            </Carousel>

            <div className='dotsWrapper'>
                <Dots value={nowTabIndex} onChange={handleChange} number={dummyList.length} />
                <div className='searchResult'>모듈 총 {40}개</div>
            </div>
        </>
    );
};

export default Slider;
