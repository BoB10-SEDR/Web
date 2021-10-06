import '@Styles/ui.css';
import { GoKebabVertical } from 'react-icons/go';
import { useState } from 'react';
import { useRef, useEffect } from 'react';
import CollapseLinks from '@Components/CollapseLinks';

const KebabMenu = props => {
    const ref = useRef();
    const items = props.items;
    const [expanded, setExpanded] = useState(false);

    const handleExpanded = () => {
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
        <div ref={ref} className='kebabMenu' onClick={handleExpanded}>
            <GoKebabVertical color='white' />
            <CollapseLinks id='kebab' isOpened={expanded} items={items} />
        </div>
    );
};

export default KebabMenu;
