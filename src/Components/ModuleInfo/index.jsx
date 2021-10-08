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
                <KebabMenu color='#97989b' items={KebabDummy} />
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
    return (
        <div className='profileDetail'>
            <div className='info'>
                <div className='normal'>
                    <DataBox head={'운영체제'} data={'Linux'} />
                    <DataBox head={'IN/OUT'} data={'Only In'} />
                    <DataBox head={'장애비율'} data={'10%'} />
                </div>
                <Description data={'Lnux 기반으로 돌아가는 라즈베리파이 모듈'} />
            </div>
            <Stat totalLogs={'210,926'} attackRate={'10%'} />
        </div>
    );
};

const DataBox = props => {
    const { head, data } = props;

    return (
        <div className='dataBox'>
            <div className='head'>{head}</div>
            <div className='data'>{data}</div>
        </div>
    );
};

const Description = props => {
    const { data } = props;

    return (
        <div className='description'>
            <div className='head'>모듈 상세 설명</div>
            <div className='data'>{data}</div>
        </div>
    );
};

const Stat = props => {
    const { totalLogs, attackRate } = props;

    return (
        <div className='stat'>
            <div className='totalLogs'>
                <div className='head'>전체 로그 수</div>
                <div className='data'>{totalLogs}</div>
            </div>
            <div className='attackRate'>
                <div className='head'>공격 로그 비율</div>
                <div className='data'>{attackRate}</div>
            </div>
        </div>
    );
};

export default ModuleInfo;
