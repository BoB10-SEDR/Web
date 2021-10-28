import { ReactComponent as FloorMap } from '@Images/exampleMap.svg';
import GridLayout from 'react-grid-layout';
import CustomGridItem from './CustomGridItem';
import envInfo from '@Dummy/envInfo';

const GraphicMap = () => {
    const layout = [
        { i: '0', x: 0, y: 0, w: 20, h: 20 },
        { i: '1', x: 0, y: 0, w: 20, h: 20 },
        { i: '2', x: 2, y: 0, w: 20, h: 20 },
        { i: '3', x: 2, y: 0, w: 20, h: 20 },
        { i: '4', x: 2, y: 0, w: 20, h: 20 },
        { i: '5', x: 2, y: 0, w: 20, h: 20 },
        { i: '6', x: 2, y: 0, w: 20, h: 20 },
    ];

    const printCondition = (e = {}, state = '') => {
        console.log({ mode: state, data: e });
    };

    return (
        <div id='graphicMap'>
            <FloorMap className='floorMap' />
            <GridLayout
                className='layout'
                cols={100}
                layout={layout}
                width={1000}
                rowHeight={1}
                allowOverlap
                onResizeStop={e => printCondition(e, 'ResizeStop')}
                onDragStop={e => printCondition(e, 'DragStop')}
            >
                {envInfo.map(env => (
                    <CustomGridItem key={env.id}>{env.title}</CustomGridItem>
                ))}
            </GridLayout>
        </div>
    );
};

export default GraphicMap;
