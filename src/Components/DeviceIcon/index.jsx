import '@Styles/deviceIcon.css';
import iconMap from './Data/deviceIconMap';

const DeviceIcon = props => {
    const { type = 'computer', size = 50, isActive } = props;
    const Icon = iconMap[type];

    const style = {
        width: size,
        height: size,
    };

    return (
        <div className='deviceIcon' style={style}>
            <Icon size={size * 0.7} />
            <div className={'statusDot' + (isActive && ' active')}></div>
        </div>
    );
};

export default DeviceIcon;
