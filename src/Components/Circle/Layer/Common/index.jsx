import {
    calcCenterCoordinate,
    getCircleBgColor,
    getCircleClassName,
    getCircleDiameter,
    getCircleDiameterValue,
} from '@Components/Circle/data';
import Bubbles from '@Components/Circle/Layer/Bubbles';

const Layer = props => {
    const { children, level = 0, isLast = false } = props;

    const idx = level - 1;

    const commonStyle = {
        position: 'absolute',
        top: calcCenterCoordinate(level),
        left: calcCenterCoordinate(level),
        width: getCircleDiameter(level),
        height: getCircleDiameter(level),
        backgroundColor: getCircleBgColor(level),
        borderRadius: '100%',
    };

    const circleStyle = !isLast
        ? {
              ...commonStyle,
              border: '1px solid #707070',
          }
        : {
              ...commonStyle,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
          };

    return (
        <>
            <Bubbles idx={idx} diameter={getCircleDiameterValue(idx)} />

            <div className={getCircleClassName(level)} style={circleStyle}>
                {children}
            </div>
        </>
    );
};

export default Layer;
