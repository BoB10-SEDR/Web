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
            <ProfileStamp />
            <ProfileDetail />
        </div>
    );
};

const ProfileStamp = () => {
    return (
        <div className='profileStamp'>
            <DeviceIcon size={100} isActive />
            <ModuleName />
            <ModuleId id={'2019003709'} />
        </div>
    );
};

const ModuleName = () => {
    return <div className='moduleName'>모듈 이름</div>;
};

const ModuleId = props => {
    const { id } = props;
    return <div className='moduleId'>ID: {id}</div>;
};

const ProfileDetail = () => {
    return <div className='profileDetail'></div>;
};

export default ModuleInfo;
