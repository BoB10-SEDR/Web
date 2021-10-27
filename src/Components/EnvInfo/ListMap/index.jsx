import store from '@Stores/envInfo';
import Circle from '@Components/Circle';
import TextNav from '@Components/TextNav';
import envInfo from '@Dummy/envInfo';

const ListMap = () => {
    store.setSelectedEnv(envInfo[0]);

    return (
        <div id='listMap'>
            <Circle />
            <TextNav items={envInfo} />
        </div>
    );
};

export default ListMap;
