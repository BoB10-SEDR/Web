import { ReactComponent as FloorMap } from '@Images/exampleMap.svg';
import { Responsive, WidthProvider } from 'react-grid-layout';
import CustomGridItem from './CustomGridItem';
import envInfo from '@Dummy/envInfo';

const ResponsiveGridLayout = WidthProvider(Responsive);

const GraphicMap = () => {
    const layout = [
        {
            w: 27,
            h: 402,
            x: 92,
            y: 13,
            i: '0',
            moved: true,
            static: true,
        },
        {
            w: 17,
            h: 133,
            x: 1,
            y: 459,
            i: '1',
            moved: true,
            static: true,
        },
        {
            w: 6,
            h: 409,
            x: 36,
            y: 9,
            i: '2',
            moved: true,
            static: true,
        },
        {
            w: 5,
            h: 409,
            x: 58,
            y: 9,
            i: '3',
            moved: true,
            static: true,
        },
        {
            w: 5,
            h: 404,
            x: 64,
            y: 11,
            i: '4',
            moved: true,
            static: true,
        },
        {
            w: 83,
            h: 111,
            x: 36,
            y: 478,
            i: '5',
            moved: true,
            static: true,
        },
        {
            w: 21,
            h: 229,
            x: 1,
            y: 10,
            i: '6',
            moved: true,
            static: true,
        },
    ];

    const printCondition = (e = {}, state = '') => {
        console.log({ mode: state, data: e });
    };

    return (
        <div id='graphicMap'>
            <FloorMap className='floorMap' />
            <ResponsiveGridLayout
                className='layout'
                breakpoints={{ lg: 1000 }}
                cols={{ lg: 120, md: 100, sm: 60, xs: 40, xxs: 20 }}
                layouts={{ lg: layout }}
                rowHeight={1}
                margin={[0, 0]}
                onResizeStop={e => printCondition(e, 'ResizeStop')}
                onDragStop={e => printCondition(e, 'DragStop')}
                allowOverlap
                measureBeforeMount
            >
                {envInfo.map(env => (
                    <CustomGridItem key={env.id}>{env.title}</CustomGridItem>
                ))}
            </ResponsiveGridLayout>
        </div>
    );
};

export default GraphicMap;
