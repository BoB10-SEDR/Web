import '@Styles/ui.css';

const Button = props => {
    const {
        isCircle,
        backgroundColor = 'red',
        borderColor = backgroundColor,
        color = 'white',
        onClick,
        isActive,
        children,
    } = props;

    const style = {
        backgroundColor: backgroundColor,
        borderColor: borderColor,
        color: color,
    };

    return (
        <button
            type='button'
            className={'button' + (isCircle ? ' circle' : '') + (isActive ? ' active' : '')}
            onClick={onClick}
            style={style}
        >
            {children}
        </button>
    );
};

export default Button;
