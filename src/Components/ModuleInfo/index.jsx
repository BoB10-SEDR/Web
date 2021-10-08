import '@Styles/moduleInfo.css';
import Slider from '@Components/Slider';
import Profile from '@Components/ModuleInfo/Profile';

const ModuleInfo = () => {
    return (
        <div className='moduleInfo'>
            <div className='moduleSlider'>
                <Slider />
            </div>
            <Profile />
        </div>
    );
};

export default ModuleInfo;
