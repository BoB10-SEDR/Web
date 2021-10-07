import '@Styles/moduleInfo.css';
import Slider from '@Components/Slider';
import DeviceIcon from '@Components/DeviceIcon';
import KebabMenu from '@Components/UI/KebabMenu';

import KebabDummy from '@Dummy/KebabDummy';

const ModuleInfo = () => {
    return (
        <div className='moduleInfo'>
            <ModuleSlider />
            <ModuleProfile />
        </div>
    );
};

const ModuleSlider = () => {
    return (
        <div className='moduleSlider'>
            <Slider />
        </div>
    );
};

const ModuleProfile = () => {
    return (
        <div className='moduleProfile'>
            <ProfileHeader />
            <ProfileBody />
        </div>
    );
};

const ProfileHeader = () => {
    return (
        <div className='profileHeader'>
            <div className='profileMenu'>
                <KebabMenu items={KebabDummy} />
            </div>
        </div>
    );
};

const ProfileBody = () => {
    return (
        <div className='profileBody'>
            <ProfileName />
            <ProfileDetail />
        </div>
    );
};

const ProfileName = () => {
    return (
        <div className='profileName'>
            <DeviceIcon size={80} isActive={true} />
        </div>
    );
};

const ProfileDetail = () => {
    return <div className='profileDetail'></div>;
};

export default ModuleInfo;
