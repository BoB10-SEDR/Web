import DeviceIcon from '@Components/DeviceIcon';

const Stamp = () => {
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

export default Stamp;
