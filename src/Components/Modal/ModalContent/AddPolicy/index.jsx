import '@Styles/addPolicy.css';
import { observer } from 'mobx-react';
import { useState } from 'react';
import { dummyLargeData, dummyMediumData, dummyMoreData, dummySmallData, initData } from './data';
import policyData from './data/new';
import Section from '@Components/Section';
import store from '@Stores/policyMagician';
// import Section from './Section';

const AddPolicy = () => {
    return (
        <>
            <Header />
            <Body />
        </>
    );
};

const Header = () => {
    return (
        <div id='headerWrapper'>
            <h3 className='addPolicyHeader'>정책 추가하기</h3>
            <span>원하는 정책을 고르고, 설정후 추가</span>
        </div>
    );
};

const Body = observer(() => {
    const [imain, imid, isub] = store.sectionIndexList;

    const main = policyData;
    const mid = imain !== false ? main[imain].mid : [];
    const sub = imid !== false ? mid[imid].sub : [];
    const last = isub !== false ? sub[isub].last : [];

    const handleSelect = (section, index) => {
        store.setSectionIndexList(section, index);
    };

    const handleMultiSelect = index => {};

    return (
        <div id='bodyWrapper'>
            <Section
                title='대분류'
                grid={3}
                data={main}
                onSelect={index => handleSelect(0, index)}
                selectedIndex={imain}
            />
            <Section
                title='중분류'
                grid={4}
                data={mid}
                onSelect={index => handleSelect(1, index)}
                selectedIndex={imid}
            />
            <Section
                title='소분류'
                grid={5}
                data={sub}
                onSelect={index => handleSelect(2, index)}
                selectedIndex={isub}
            />
            <Section title='보안항목' grid={8} data={last} onSelect={index => handleSelect(3, index)} isLast />
        </div>
    );
});

export default AddPolicy;
