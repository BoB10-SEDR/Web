const ToggleSwitch = props => {
    return (
        <div className='toggleSwitch'>
            <input type='checkbox' id={props.id} onChange={props.onToggle} />
            <label for={props.id}></label>
        </div>
    );
};

export default ToggleSwitch;
