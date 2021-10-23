const circleClassName = ['circle-1', 'circle-2', 'circle-3', 'circle-center'];
const circleDiameter = [718, 575, 430, 140];
const circleBackgroundColor = ['#2D3035', '#282b30', '#24272b', '#16171A'];

const calcCenterCoordinate = (circleIndex = 0, delta = 0) =>
    `calc(50% - ${circleDiameter[circleIndex] / 2}px + ${delta}px)`;

const getCircleClassName = circleIndex => circleClassName[circleIndex];

const getCircleDiameter = circleIndex => `${circleDiameter[circleIndex]}px`;

const getCircleDiameterValue = circleIndex => circleDiameter[circleIndex];

const getCircleBgColor = circleIndex => `${circleBackgroundColor[circleIndex]}`;

const getRadians = degrees => degrees * (Math.PI / 180);

const calcAbsVerticalValue = (circleIndex = 0, theta = 0) =>
    (circleDiameter[circleIndex] / 2) * (1 + Math.sin(getRadians(theta)));

const calcAbsHorizentalValue = (circleIndex = 0, theta = 0) => {
    return (circleDiameter[circleIndex] / 2 - 2) * (1 + Math.cos(getRadians(theta)));
};

export {
    calcCenterCoordinate,
    getCircleClassName,
    getCircleDiameter,
    getCircleDiameterValue,
    getCircleBgColor,
    calcAbsVerticalValue,
    calcAbsHorizentalValue,
};
