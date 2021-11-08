import { useState, useEffect } from 'react';
import Circle from '@Components/Circle';
import TextNav from '@Components/TextNav';
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
                    id='listMap'
                    style={{ animation: `${show ? 'scaleIn' : 'scaleOut'} 0.75s` }}
                    onAnimationEnd={handleAnimationEnd}
                >
                    <Circle />
                    <TextNav items={envInfo} />
                </div>
            )}
        </>
    );
};

export default ListMap;
