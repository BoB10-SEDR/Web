import DeviceIcon from '@Components/DeviceIcon';

const Stamp = props => {
    const { type, state, name, id } = props;

    return (
        <div className='profileStamp'>
            <DeviceIcon size={100} type={type} state={state} />
            <ModuleName name={name} />
            <ModuleId id={id} />
        </div>
    );
};

const ModuleName = props => {
    const { name } = props;
    return <div className='moduleName'>{name}</div>;
};

const ModuleId = props => {
    const { id } = props;
    return <div className='moduleId'>ID: {id}</div>;
};

export default Stamp;
