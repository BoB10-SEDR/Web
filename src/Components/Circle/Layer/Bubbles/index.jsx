import { calcAbsHorizentalValue, calcAbsVerticalValue } from '@Components/Circle/data';
import DeviceBubble from '@Components/DeviceBubble';
import { dummyDeviceInfoByLayer } from '@Dummy/dummyDeviceInfoByLayer';

const DeviceBubbles = props => {
    const { idx: circleIndex } = props;

    return dummyDeviceInfoByLayer[circleIndex]['devices'].map(e => {
        const { location: theta, isRunning } = e;

        return (
            <DeviceBubble
                styles={{
                    position: 'absolute',
                    top: -25 + calcAbsVerticalValue(circleIndex, theta),
                    left: -25 + calcAbsHorizentalValue(circleIndex, theta),
                    width: '50px',
                    height: '50px',
                    borderRadius: '100%',
                }}
                active={isRunning}
                tabInfo={e}
            />
        );
    });
};

export default DeviceBubbles;
