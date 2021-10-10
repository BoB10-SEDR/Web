import React, { Component, useEffect, useState } from 'react';
import '@Styles/slider.css';

import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import Item from './Item';

const Slider = props => {
    const { data = [], link = '', handleChange, threshold = 8 } = props;

    // TODO_P :: data 가공해야함 => pagenation (8개 단위로)

    const [totalModuleCount, setCount] = useState(null);

    const [nowTabIndex, setTabIndex] = useState(1);

    const [nowModuleData, setModuleData] = useState([]);

    const [nowItemIndex, setItemIndex] = useState(0);

    // const getModuleData = () => {
    //     // TODO_P :: useSWR사용해서 데이터 받아오기

    //     return sliderModuleListDummy;
    // };

    const makePagenation = (moduleList = [], count = 0, threshold = 8) => {
        let returnList = [];

        for (let i = 0; i < count; i += threshold) returnList.push(moduleList.slice(i, i + 8));

        return returnList;
    };

    useEffect(() => {
        // TODO_P :: Backend API 연동 (현재 dummy)

        const rawResponse = data;

        const totalModuleList = rawResponse['moduleList'];

        const totalModuleCount = rawResponse['count'];

        setCount(totalModuleCount);

        const formattedModuleList = makePagenation(totalModuleList, totalModuleCount, threshold);

        setModuleData(formattedModuleList);

        setTabIndex(0);
        setItemIndex(0);
    }, []);

    const handlePageIdxChange = value => {
        setTabIndex(value);
        setItemIndex(0);

        handleListIdxChange(value, 0);
    };

    const handleListIdxChange = (pageIdx, elemIdx) => {
        console.log({ pageIdx, threshold, elemIdx, calc: pageIdx * threshold + elemIdx });

        handleChange(pageIdx * threshold + elemIdx);
    };

    return (
        <>
            <Carousel
                value={nowTabIndex}
                onChange={handlePageIdxChange}
                // plugins={['arrows']}
                draggable={false}
                animationSpeed={200}
            >
                {nowModuleData.map(page => (
                    <Item
                        data={page}
                        nowSelected={nowItemIndex}
                        nowTabIndex={nowTabIndex}
                        setSelectedItemIndex={setItemIndex}
                        handleListIdxChange={handleListIdxChange}
                    />
                ))}
            </Carousel>

            <div className='dotsWrapper'>
                <Dots
                    value={nowTabIndex}
                    onChange={handlePageIdxChange}
                    number={nowModuleData.length}
                    className='dots'
                />
                <div className='searchResult'>모듈 총 {totalModuleCount}개</div>
            </div>
        </>
    );
};

export default Slider;
