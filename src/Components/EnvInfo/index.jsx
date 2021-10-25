import '@Styles/envInfo.css';
import store from '@Stores/envInfo';
import Circle from '@Components/Circle';
import TextNav from '@Components/TextNav';
import envInfo from '@Dummy/envInfo';

const EnvInfo = () => {
    store.setEnv(envInfo[0].id, envInfo[0].devices);

    return (
        <div id='envInfo'>
            <Circle />
            <TextNav items={envInfo} />
        </div>
    );
};

export default EnvInfo;
