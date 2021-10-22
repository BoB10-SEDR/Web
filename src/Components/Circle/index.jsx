import { useState } from 'react';

const Circle = () => {
    // Variables => TODO_P :: 분리

    const circleClassName = ['circle-1', 'circle-2', 'circle-3', 'circle-center'];
    const circleDiameter = [718, 575, 430, 140];
    const circleBackgroundColor = ['#2D3035', '#282b30', '#24272b', '#16171A'];

    // TODO_P :: 이거 따로 정의 (테스트용으로 slider 만들어뒀음)
    // * 추후 랜덤배치 만들 예정
    const [theta, handleChange] = useState(0);

    // Functions => TODO_P :: 분리

    const calcCenterCoordinate = (circleIndex = 0, delta = 0) =>
        `calc(50% - ${circleDiameter[circleIndex] / 2}px + ${delta}px)`;

    const getCircleDiameter = circleIndex => `${circleDiameter[circleIndex]}px`;

    const getCircleBgColor = circleIndex => `${circleBackgroundColor[circleIndex]}`;

    const calcAbsVerticalValue = (circleIndex = 0, theta = 0) =>
        (circleDiameter[circleIndex] / 2) * (1 + Math.sin(getRadians(theta)));

    const calcAbsHorizentalValue = (circleIndex = 0, theta = 0) =>
        (circleDiameter[circleIndex] / 2 - 2) * (1 + Math.cos(getRadians(theta)));

    const getRadians = degrees => degrees * (Math.PI / 180);

    return (
        <div className='composition'>
            <div
                className={circleClassName[0]}
                style={{
                    position: 'relative',
                    width: getCircleDiameter(0),
                    height: getCircleDiameter(0),
                    backgroundColor: getCircleBgColor(0),
                    borderRadius: '100%',
                    border: '1px solid #707070',
                }}
            >
                {/* level 1 */}
                <div
                    style={{
                        position: 'absolute',
                        top: -25 + calcAbsVerticalValue(0, theta),
                        left: -25 + calcAbsHorizentalValue(0, theta),
                        width: '50px',
                        height: '50px',
                        borderRadius: '100%',
                        backgroundColor: 'white',
                    }}
                />
                <div
                    className={circleClassName[1]}
                    style={{
                        position: 'absolute',
                        top: calcCenterCoordinate(1),
                        left: calcCenterCoordinate(1),
                        width: getCircleDiameter(1),
                        height: getCircleDiameter(1),
                        backgroundColor: getCircleBgColor(1),
                        borderRadius: '100%',
                        border: '1px solid #707070',
                    }}
                >
                    {/* level 2 */}
                    <div
                        style={{
                            position: 'absolute',
                            top: -25 + calcAbsVerticalValue(1, theta),
                            left: -25 + calcAbsHorizentalValue(1, theta),
                            width: '50px',
                            height: '50px',
                            borderRadius: '100%',
                            backgroundColor: 'white',
                        }}
                    />
                    <div
                        className={circleClassName[2]}
                        style={{
                            position: 'absolute',
                            top: calcCenterCoordinate(2),
                            left: calcCenterCoordinate(2),
                            width: getCircleDiameter(2),
                            height: getCircleDiameter(2),
                            backgroundColor: getCircleBgColor(2),
                            borderRadius: '100%',
                            border: '1px solid #707070',
                        }}
                    >
                        {/* level 3 */}
                        <div
                            style={{
                                position: 'absolute',
                                top: -25 + calcAbsVerticalValue(2, theta),
                                left: -25 + calcAbsHorizentalValue(2, theta),
                                width: '50px',
                                height: '50px',
                                borderRadius: '100%',
                                backgroundColor: 'white',
                            }}
                        />
                        <div
                            className={circleClassName[3]}
                            style={{
                                position: 'absolute',
                                top: calcCenterCoordinate(3),
                                left: calcCenterCoordinate(3),
                                width: getCircleDiameter(3),
                                height: getCircleDiameter(3),
                                backgroundColor: getCircleBgColor(3),
                                borderRadius: '100%',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <img
                                src='https://media.discordapp.net/attachments/802076592825827332/869027652672049162/tempBoBAI.png'
                                alt='Composition Icon'
                                style={{ width: '70px', height: '70px' }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <RangeSlider onChange={handleChange} />
        </div>
    );
};

export default Circle;

const RangeSlider = ({ onChange }) => {
    const [slider, setSlider] = useState({
        value: 0,
        label: '',
    });

    const onSlide = value => {
        onChange(value);
        setSlider(value);
    };

    return (
        <div className='range-slider'>
            <p>{slider.label}</p>
            <input
                type='range'
                min={0}
                max={360}
                value={slider.value}
                onChange={e => onSlide(e.target.value)}
                className='slider'
                id='myRange'
            ></input>
        </div>
    );
};
