import Circle from '@Components/Circle';
import TextNav from '@Components/TextNav';
import envInfo from '@Dummy/envInfo';

const ListMap = () => {
    return (
        <div id='listMap'>
            <Circle />
            <TextNav items={envInfo} />
        </div>
    );
};

export default ListMap;
