import store from '@Stores/deviceTabs';
import { AiFillRedditCircle, AiFillTwitterCircle } from 'react-icons/ai';
import { SiApple } from 'react-icons/si';

const buttons = [
    {
        children: <AiFillRedditCircle size='20' />,
        title: '화재경보기기',
        onClick: () =>
            store.openTab({
                Icon: AiFillRedditCircle,
                deviceType: 'computer',
                deviceName: '화재경보기기',
                deviceId: '20190003709',
                path: '/sdfs',
            }),
    },
    {
        children: <AiFillTwitterCircle size='20' />,
        title: 'IP 카메라',
        onClick: () =>
            store.openTab({
                Icon: AiFillTwitterCircle,
                deviceType: 'camera',
                deviceName: 'IP 카메라',
                deviceId: '20190003709',
                path: '/sdfs',
            }),
    },
    {
        children: <SiApple size='20' />,
        title: '공유기',
        onClick: () =>
            store.openTab({
                Icon: SiApple,
                deviceType: 'computer',
                deviceName: '공유기',
                deviceId: '20190003709',
                path: '/sdfs',
            }),
    },
];

export default buttons;
