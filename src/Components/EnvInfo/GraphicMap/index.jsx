import { ReactComponent as FloorMap } from '@Images/exampleMap.svg';
import { Responsive, WidthProvider } from 'react-grid-layout';
import CustomGridItem from './CustomGridItem';
import envInfo from '@Dummy/envInfo';
import layout from '@Dummy/graphicMapLayout';

const ResponsiveGridLayout = WidthProvider(Responsive);

const GraphicMap = () => {
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
                    <CustomGridItem key={env.id} env={env}>
                        {env.title}
                    </CustomGridItem>
                ))}
            </ResponsiveGridLayout>
        </div>
    );
};

export default GraphicMap;
