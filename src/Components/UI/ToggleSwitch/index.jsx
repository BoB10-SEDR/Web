const ToggleSwitch = props => {
    return (
        <div className='toggleSwitch'>
            <input type='checkbox' id={props.id} onChange={props.onToggle} />
            <label for='switch'></label>
        </div>
    );
};

export default ToggleSwitch;
