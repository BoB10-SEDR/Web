import '@Styles/moduleInfo.css';
import Slider from '@Components/Slider';
import Profile from '@Components/ModuleInfo/Profile';

const ModuleInfo = props => {
    const { modules = [] } = props;

    return (
        <div className='moduleInfo'>
            <ModuleSlider data={modules} />
            <Profile />
        </div>
    );
};

const ModuleSlider = props => {
    const { data } = props;
    return (
        <div className='moduleSlider'>
            <Slider data={data} />
        </div>
    );
};

export default ModuleInfo;
