import '@Styles/moduleInfo.css';
import Slider from '@Components/Slider';
import Profile from '@Components/ModuleInfo/Profile';
import dummyModuleInfo from '@Dummy/dummyModuleInfo';

const ModuleInfo = props => {
    const { moduleData = [], profileData = dummyModuleInfo } = props;
    //TODO_S :: dummy 데이터 제작 후 연동

    return (
        <div className='moduleInfo'>
            <ModuleSlider data={moduleData} />
            <Profile data={profileData} />
        </div>
    );
};

const ModuleSlider = props => {
    const { data = [] } = props;
    return (
        <div className='moduleSlider'>
            <Slider data={data} />
        </div>
    );
};

export default ModuleInfo;
