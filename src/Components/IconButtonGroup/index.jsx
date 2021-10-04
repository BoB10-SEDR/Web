import '@Styles/iconButtonGroup.css';
import { useState } from 'react';
import { IconContext } from 'react-icons';
import IconButton from '@Components/UI/IconButton';

const IconButtonGroup = props => {
    const { isVertical, buttons } = props;
    const [activeButton, setActiveButton] = useState(0);

    const handleClick = (event, key, onClick) => {
        setActiveButton(key);
        onClick();
    };

    return (
        <div className={'iconButtonGroup' + (isVertical ? ' vertical' : '')}>
            <IconContext.Provider value={{ className: 'reactIcons' }}>
                {buttons.map((button, index) => {
                    const { onClick, ...buttonProps } = button;
                    return (
                        <IconButton
                            key={index}
                            isActive={activeButton === index ? true : false}
                            onClick={event => handleClick(event, index, onClick)}
                            {...buttonProps}
                        />
                    );
                })}
            </IconContext.Provider>
        </div>
    );
};

export default IconButtonGroup;
