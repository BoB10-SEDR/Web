import '@Styles/envInfo.css';
import store from '@Stores/envInfo';
import Circle from '@Components/Circle';
import TextNav from '@Components/TextNav';
import envInfo from '@Dummy/envInfo';

const EnvInfo = () => {
    store.setSelectedEnv(envInfo[0]);

    return (
        <div id='envInfo'>
            <Circle />
            <TextNav items={envInfo} />
        </div>
    );
};

export default EnvInfo;
