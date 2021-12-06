import Head from './Head';
import Body from './Body';
import { useEffect, useState } from 'react';

const Section = props => {
    const hdContent = '분류';
    const bdContent = ['데이터 1', '데이터 2', '데이터 3', '기타'];

    const {
        name = 'default',
        data = { name: hdContent, content: bdContent },
        setData,
        submitData,
        stageID,
        nextStage,
        multiSelect,
    } = props;

    const [nowIdx, setNowIdx] = useState(submitData[name]);

    useEffect(() => {
        setNowIdx(submitData[name]);
    }, [submitData, name]);

    const { name: headContent, content: bodyContent } = data;

    const handleClick = data => {
        setNowIdx(data);

        setData(p => {
            const newSubmitData = {
                ...p,
                [name]: data,
                [nextStage]: -1,
                nextStep: stageID + 1,
            };

            return newSubmitData;
        });
    };

    const isAvailableStep = submitData.nextStep >= stageID;

    const commonProps = { submitData, multiSelect };

    return (
        <div className={`section ${name}Cat`}>
            <Head content={headContent} />
            {isAvailableStep ? (
                <Body content={bodyContent} selected={nowIdx} setIdx={handleClick} {...commonProps} />
            ) : (
                <div className='notYet'>이전 항목을 골라주세요!</div>
            )}
        </div>
    );
};

export default Section;
