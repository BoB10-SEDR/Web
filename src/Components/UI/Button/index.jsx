import '@Styles/ui.css';

const Button = props => {
    const {
        isCircle,
        backgroundColor = 'red',
        borderColor = backgroundColor,
        color = 'white',
        onClick,
        isActive,
        title,
        className = '',
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
            className={'button' + (isCircle ? ' circle' : '') + (isActive ? ' active' : '') + ` ${className}`}
            onClick={onClick}
            style={style}
            title={title}
        >
            {children}
        </button>
    );
};

export default Button;
