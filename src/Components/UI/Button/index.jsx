import '@Styles/ui.css';

const Button = props => {
    const {
        type = 'button',
        isCircle,
        backgroundColor = 'red',
        borderColor = backgroundColor,
        buttonStyle,
        color = 'white',
        onClick = () => {},
        isActive,
        title,
        className = '',
        children,
        ...buttonProps
    } = props;

    const style = {
        backgroundColor: backgroundColor,
        borderColor: borderColor,
        color: color,
        ...buttonStyle,
    };

    return (
        <button
            type={type}
            className={`button ${isCircle ? 'circle' : ''} ${isActive ? 'active' : ''} ${className}`}
            onClick={onClick}
            style={style}
            title={title}
            {...buttonProps}
        >
            {children}
        </button>
    );
};

export default Button;
