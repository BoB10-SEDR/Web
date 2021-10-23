// Custom Components
import BaseLayer from './Layer/Base';
import Layer from './Layer/Common';
import '@Styles/circle.css';

const Circle = props => {
    return (
        <div className='composition'>
            <BaseLayer>
                <Layer level={1}>
                    <Layer level={2}>
                        <Layer level={3} isLast>
                            <img
                                src='https://media.discordapp.net/attachments/802076592825827332/869027652672049162/tempBoBAI.png'
                                alt='Composition Icon'
                                style={{ width: '70px', height: '70px' }}
                            />
                        </Layer>
                    </Layer>
                </Layer>
            </BaseLayer>
        </div>
    );
};

export default Circle;
