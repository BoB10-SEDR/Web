import '@Styles/ui.css';
import { useState } from 'react';

const IconButton = props => {
    const { isCircle, backgroundColor = '#727cf5', color = '#fff', Icon, onClick, isActive } = props;
    const [isHovered, setHover] = useState(false);

    const style = {
        backgroundColor: backgroundColor,
        borderColor: backgroundColor,
    };

    return (
        <button
            type='button'
            className={'iconButton' + (isCircle ? ' circle' : '') + (isActive ? ' active' : '')}
            onClick={onClick}
            style={style}
        >
            <Icon className='reactIcons' color={color} style={style} />
        </button>
    );
};

export default IconButton;
