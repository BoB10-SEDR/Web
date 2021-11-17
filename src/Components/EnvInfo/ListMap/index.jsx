import { useState, useEffect } from 'react';
import Circle from '@Components/Circle';
import TextNav from '@Components/TextNav';
import MiniMap from './MiniMap';
import envInfo from '@Dummy/envInfo';

const ListMap = ({ show }) => {
    const [isVisible, setIsVisible] = useState(show);

    useEffect(() => {
        setTimeout(() => {
            if (show) setIsVisible(true);
        }, 500);
    }, [show]);

    const handleAnimationEnd = () => {
        if (!show) setIsVisible(false);
    };

    return (
        <>
            {isVisible && (
                <div
                    id='listMapWrapper'
                    style={{ animation: `${show ? 'scaleIn' : 'scaleOut'} 0.5s` }}
                    onAnimationEnd={handleAnimationEnd}
                >
                    <MiniMap />
                    <div id='listMap'>
                        <Circle />
                        <TextNav items={envInfo} />
                    </div>
                </div>
            )}
        </>
    );
};

export default ListMap;
