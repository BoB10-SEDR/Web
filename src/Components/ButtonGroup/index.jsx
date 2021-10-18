import '@Styles/buttonGroup.css';
import { useState } from 'react';
import Button from '@Components/UI/Button';

const ButtonGroup = props => {
    const { isVertical, buttons } = props;
    const [activeButton, setActiveButton] = useState(0);

    const handleClick = (key, onClick) => {
        setActiveButton(key);
        onClick();
    };

    return (
        <div className={'buttonGroup' + (isVertical ? ' vertical' : '')}>
            {buttons.map((button, index) => {
                const { onClick, children, ...buttonProps } = button;
                return (
                    <Button
                        key={index}
                        isActive={activeButton === index}
                        onClick={() => handleClick(index, onClick)}
                        {...buttonProps}
                    >
                        {children}
                    </Button>
                );
            })}
        </div>
    );
};

export default ButtonGroup;
