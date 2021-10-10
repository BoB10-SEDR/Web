// Style
import '@Styles/moduleInfo.css';

// Components
import Slider from '@Components/Slider';
import Profile from '@Components/ModuleInfo/Profile';
import dummyModuleInfo from '@Dummy/dummyModuleInfo';

// Package
import { useState } from 'react';

// Dummy
import sliderModuleListDummy from '@Dummy/sliderModuleListDummy.json';

const ModuleInfo = props => {
    const [moduleIndex, setModuleIndex] = useState(0);

    const handleChange = value => {
        setModuleIndex(value);
    };

    const moduleData = sliderModuleListDummy;
    //TODO_S :: dummy 데이터 제작 후 연동

    return (
        <div className='moduleInfo'>
            <ModuleSlider data={moduleData} handleChange={handleChange} />

            <Profile data={moduleData['moduleList'][moduleIndex]} />
        </div>
    );
};

const ModuleSlider = props => {
    const { data = [], handleChange } = props;
    return (
        <div className='moduleSlider'>
            <Slider data={data} handleChange={handleChange} />
        </div>
    );
};

export default ModuleInfo;
