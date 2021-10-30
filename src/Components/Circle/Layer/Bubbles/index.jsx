import { observer } from 'mobx-react';
import store from '@Stores/envInfo';
import { calcAbsHorizentalValue, calcAbsVerticalValue } from '@Components/Circle/data';
import DeviceBubble from '@Components/DeviceBubble';

const DeviceBubbles = props => {
    const { idx: circleIndex = 0 } = props;
    const layerBubbles = store.circleLayers[circleIndex];

    return layerBubbles.map(e => {
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

export default observer(DeviceBubbles);
