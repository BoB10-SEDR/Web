import '@Styles/progressBar.css';
import { useState, useEffect } from 'react';
import DotsLoader from '@Components/UI/DotsLoader';

const ProgressBar = props => {
    // Zero-based
    const { steps = [], level } = props;

    const wrapperClassName = `step-${level + 1}-of-${steps.length}`;

    return (
        <div id='checkout-progress' className={wrapperClassName}>
            <div className='progress-bar'>
                {steps.map((label, idx) => {
                    const { level_name: levelName, status } = label;
                    const nowIdx = idx + 1;
                    const isActive = status === 'IN PROGRESS';
                    const isValid = status === 'FIN';
                    const isFail = status === 'FAIL';

                    // TODO_P :: fail 그리고 Success 로직
                    const isFailed = false;

                    const elementClassName = `step step-${nowIdx} ${isActive ? 'active' : isValid ? 'valid' : ''}`;

                    return (
                        <div className={elementClassName}>
                            {!isFail ? (
                                <DotsLoader />
                            ) : isValid ? (
                                <span className='opaque'> {nowIdx}</span>
                            ) : (
                                <Circle />
                            )}
                            <div className={`fa fa-${isFailed ? 'times' : 'check'} ${!isValid ? 'opaque' : ''}`}></div>
                            <div className='step-label'> {levelName}</div>
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
                backgroundColor: '#33363B',
                margin: '5px auto 0',
            }}
        />
    );
};
