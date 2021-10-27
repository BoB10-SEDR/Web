import { ReactComponent as FloorMap } from '@Images/exampleMap.svg';
import GridLayout from 'react-grid-layout';
import CustomGridItem from './CustomGridItem';
import envInfo from '@Dummy/envInfo';

const GraphicMap = () => {
    const layout = [
        { i: '0', x: 0, y: 0, w: 2, h: 2 },
        { i: '1', x: 0, y: 0, w: 2, h: 2 },
        { i: '2', x: 2, y: 0, w: 2, h: 2 },
        { i: '3', x: 2, y: 0, w: 2, h: 2 },
        { i: '4', x: 2, y: 0, w: 2, h: 2 },
    ];
    return (
        <div id='graphicMap'>
            <FloorMap className='floorMap' />
            <GridLayout className='layout' layout={layout} width={1200} rowHeight={60} allowOverlap>
                {envInfo.map(env => (
                    <CustomGridItem key={env.id}>{env.title}</CustomGridItem>
                ))}
            </GridLayout>
        </div>
    );
};

export default GraphicMap;
