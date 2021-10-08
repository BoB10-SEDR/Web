const CheckBox = props => {
    const { isChecked } = props;

    return (
        <div className={'checkBox' + (isChecked && ' checked')}>
            <input type='checkbox' />
        </div>
    );
};

export default CheckBox;
