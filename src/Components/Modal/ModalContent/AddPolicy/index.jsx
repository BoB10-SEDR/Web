import '@Styles/addPolicy.css';
import { useState } from 'react';
import { dummyLargeData, dummyMediumData, dummyMoreData, dummySmallData, initData } from './data';
import Section from './Section';

const AddPolicy = props => {
    // 더미 만들기
    // 로직 (콜백함수) 구성
    const [submitData, setData] = useState(initData);

    const commonProps = {
        setData,
        submitData,
    };

    return (
        <>
            <div id='headerWrapper'>
                <h3 className='addPolicyHeader'>정책 추가하기</h3>
                <span>원하는 정책을 고르고, 설정후 추가</span>
            </div>

            <div id='bodyWrapper'>
                <Section name='large' nextStage='medium' stageID={0} data={dummyLargeData} {...commonProps} />
                <Section name='medium' nextStage='small' stageID={1} data={dummyMediumData} {...commonProps} />
                <Section name='small' nextStage='more' stageID={2} data={dummySmallData} {...commonProps} />
                <Section name='more' multiSelect stageID={3} data={dummyMoreData} {...commonProps} />
            </div>
        </>
    );
};
export default AddPolicy;
