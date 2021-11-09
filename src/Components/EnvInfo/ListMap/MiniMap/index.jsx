import { ReactComponent as FloorMap } from '@Images/exampleMap.svg';
import store from '@Stores/envMap';

const MiniMap = () => {
    const handleClick = () => {
        store.setIsGraphic(true);
    };

    return (
        <div id='miniMap'>
            <FloorMap id='miniMap' onClick={handleClick} />
        </div>
    );
};

export default MiniMap;
