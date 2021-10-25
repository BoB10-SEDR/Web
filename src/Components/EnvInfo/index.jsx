import '@Styles/envInfo.css';
import store from '@Stores/envInfo';
import Circle from '@Components/Circle';
import TextNav from '@Components/TextNav';
import dummyTextNav from '@Dummy/textNav';

const EnvInfo = () => {
    store.setEnv(dummyTextNav[0].id, dummyTextNav[0].circle);

    return (
        <div id='envInfo'>
            <Circle />
            <TextNav items={dummyTextNav} />
        </div>
    );
};

export default EnvInfo;
