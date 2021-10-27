import GridLayout from 'react-grid-layout';
import CustomGridItem from './CustomGridItem';
import FloorMap from './FloorMap';
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
            <FloorMap />
            <GridLayout className='layout' layout={layout} cols={12} rowHeight={60} width={1200}>
                {envInfo.map(env => (
                    <CustomGridItem key={env.id}>{env.title}</CustomGridItem>
                ))}
            </GridLayout>
        </div>
    );
};

export default GraphicMap;
