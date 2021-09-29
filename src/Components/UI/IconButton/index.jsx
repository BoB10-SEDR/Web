const IconButton = props => {
    const { backgroundColor = '#727cf5', Icon } = props;
    const style = {
        backgroundColor: backgroundColor,
        borderColor: backgroundColor,
    };

    return (
        <button type='button' className='iconButton' style={style}>
            <Icon color='#fff' style={style} />
        </button>
    );
};

export default IconButton;
