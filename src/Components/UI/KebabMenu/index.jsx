import '@Styles/ui.css';
import { GoKebabVertical } from 'react-icons/go';
import { useState } from 'react';
import { useRef, useEffect } from 'react';
import CollapseLinks from '@Components/CollapseLinks';

const KebabMenu = props => {
    const ref = useRef();
    const { color = 'white', items } = props;
    const [expanded, setExpanded] = useState(false);

    const handleClick = () => {
        setExpanded(!expanded);
    };

    const handleMouseDown = event => {
        if (!expanded) return;
        if (ref.current.contains(event.target)) return;

        setExpanded(false);
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleMouseDown);

        return () => {
            document.removeEventListener('mousedown', handleMouseDown);
        };
    }, [expanded]);

    return (
        <div ref={ref} className='kebabMenu' onClick={handleClick}>
            <GoKebabVertical color={color} />
            <CollapseLinks id='kebab' isOpened={expanded} items={items} />
        </div>
    );
};

export default KebabMenu;
