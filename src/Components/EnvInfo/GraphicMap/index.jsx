import { useState, useEffect } from 'react';
import { ReactComponent as FloorMap } from '@Images/exampleMap.svg';
import { Responsive, WidthProvider } from 'react-grid-layout';
import CustomGridItem from './CustomGridItem';
import envInfo from '@Dummy/envInfo';
import layout from '@Dummy/graphicMapLayout';

const ResponsiveGridLayout = WidthProvider(Responsive);

const GraphicMap = ({ show }) => {
    const [isVisible, setIsVisible] = useState(show);

    useEffect(() => {
        setTimeout(() => {
            if (show) setIsVisible(true);
        }, 500);
    }, [show]);

    const handleAnimationEnd = () => {
        if (!show) setIsVisible(false);
    };

    const printCondition = (e = {}, state = '') => {
        console.log({ mode: state, data: e });
    };

    return (
        <>
            {isVisible && (
                <div
                    id='graphicMap'
                    style={{ animation: `${show ? 'zoomOut' : 'zoomIn'} 0.5s` }}
                    onAnimationEnd={handleAnimationEnd}
                >
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
            )}
        </>
    );
};

export default GraphicMap;
