import DotsLoader from '@Components/UI/DotsLoader';
import '@Styles/progressBar.css';
import { useEffect, useState } from 'react';

const ProgressBar = props => {
    // Zero-based
    const [selectedIdx, setSelectedIdx] = useState(0);

    const { steps } = props;

    useEffect(() => {
        setSelectedIdx(0);
    }, [steps]);

    const wrapperClassName = `step-${selectedIdx + 1}-of-${steps.length}`;

    return (
        <div id='checkout-progress' className={wrapperClassName}>
            <div className='progress-bar'>
                {steps.map((label, idx) => {
                    const nowIdx = idx + 1;
                    const isActive = idx === selectedIdx;
                    const isValid = idx < selectedIdx;

                    const elementClassName = `step step-${nowIdx} ${isActive ? 'active' : isValid ? 'valid' : ''}`;

                    const handleClick = e => {
                        e.preventDefault();

                        setSelectedIdx(idx);
                    };

                    return (
                        <div className={elementClassName} onClick={handleClick}>
                            {isActive ? (
                                <DotsLoader />
                            ) : isValid ? (
                                <span className='opaque'> {nowIdx}</span>
                            ) : (
                                <Circle />
                            )}
                            <div className={`fa fa-check ${!isValid ? 'opaque' : ''}`}></div>
                            <div className='step-label'> {label}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ProgressBar;

const Circle = () => {
    return (
        <div
            style={{
                width: '30px',
                height: '30px',
                borderRadius: '100%',
                backgroundColor: '#ccc',
                margin: '5px auto 0',
            }}
        />
    );
};
