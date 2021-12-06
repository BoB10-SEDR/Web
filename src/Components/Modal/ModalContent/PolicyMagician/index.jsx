import '@Styles/policyMagician.css';
import { observer } from 'mobx-react';
import policyData from './data/new';
import Section from '@Components/Section';
import store from '@Stores/policyMagician';
import PolicyFormatter from '@Components/Modal/ModalContent/PolicyFormatter';
import Magician from '@Components/Magician';

const PolicyMagician = () => {
    const title = '정책 추가하기';
    const description = '원하는 정책을 고르고, 설정 후 추가';

    const handleClick = () => {
        store.setSelectedList([]);
        store.setIsSubmitted(true);
    };

    return (
        <div id='policyMagician'>
            <Magician title={title} description={description} onClick={handleClick} Formatter={PolicyFormatter}>
                <Selector />
            </Magician>
        </div>
    );
};

const Selector = observer(() => {
    const [imain, imid, isub] = store.sectionIndexList;

    const main = policyData;
    const mid = imain !== false ? main[imain].mid : [];
    const sub = imid !== false ? mid[imid].sub : [];
    const last = isub !== false ? sub[isub].last : [];

    const handleSelect = (section, index) => {
        store.setSectionIndexList(section, index);
    };

    const handleSubmit = data => {
        store.setSelectedList([...data]);
        store.setIsSubmitted(false);
    };

    return (
        <div className='selector'>
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
            <Section
                title='보안항목'
                grid={8}
                data={last}
                onSelect={index => handleSelect(3, index)}
                isLast
                isSubmitted={store.isSubmitted}
                onSubmit={handleSubmit}
            />
        </div>
    );
});

export default PolicyMagician;
