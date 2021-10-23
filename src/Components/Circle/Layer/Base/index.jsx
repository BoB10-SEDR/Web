import { getCircleBgColor, getCircleClassName, getCircleDiameter } from '@Components/Circle/data';

const BaseLayer = props => {
    const { children } = props;

    return (
        <div
            className={getCircleClassName(0)}
            style={{
                position: 'relative',
                width: getCircleDiameter(0),
                height: getCircleDiameter(0),
                backgroundColor: getCircleBgColor(0),
                borderRadius: '100%',
                border: '1px solid #707070',
            }}
        >
            {children}
        </div>
    );
};

export default BaseLayer;
