import { ReactComponent as FloorMap } from '@Images/exampleMap.svg';
import store from '@Stores/envMap';

const MiniMap = () => {
    const handleClick = () => {
        store.setIsGraphic(true);
    };

    return <FloorMap id='miniMap' onClick={handleClick} />;
};

export default MiniMap;
