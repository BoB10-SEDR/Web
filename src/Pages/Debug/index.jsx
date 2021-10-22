import { Row, Col } from '@Components/Grid';
import DeviceBubble from '@Components/DeviceBubble';

import '@Styles/debug.css';

const Debug = () => {
    return (
        <div id='debug' className='page'>
            <DeviceBubble />
            <DeviceBubble active />
        </div>
    );
};

export default Debug;
