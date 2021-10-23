import { AiFillRedditCircle } from 'react-icons/ai';

export const dummyDeviceInfoByLayer = [
    {
        level: 0,
        devices: [
            {
                Icon: AiFillRedditCircle,
                deviceType: 'computer',
                deviceName: '화재경보기기',
                deviceId: '20190003709',
                path: '/sdfs',
                location: 30,
                isRunning: true,
            },
            {
                Icon: AiFillRedditCircle,
                deviceType: 'computer',
                deviceName: '알람',
                deviceId: '20190003709',
                path: '/sdfs',
                location: 210,
                isRunning: true,
            },
        ],
    },
    {
        level: 1,
        devices: [
            {
                Icon: AiFillRedditCircle,
                deviceType: 'computer',
                deviceName: '장비 1',
                deviceId: '20190003709',
                path: '/sdfs',
                location: 0,
                isRunning: true,
            },
            {
                Icon: AiFillRedditCircle,
                deviceType: 'computer',
                deviceName: '장비 2',
                deviceId: '20190003709',
                path: '/sdfs',
                location: 120,
                isRunning: false,
            },
            {
                Icon: AiFillRedditCircle,
                deviceType: 'computer',
                deviceName: '장비 3',
                deviceId: '20190003709',
                path: '/sdfs',
                location: 240,
                isRunning: true,
            },
        ],
    },
    {
        level: 2,
        devices: [
            {
                Icon: AiFillRedditCircle,
                deviceType: 'computer',
                deviceName: '장비 4',
                deviceId: '20190003709',
                path: '/sdfs',
                location: 90,
                isRunning: true,
            },
            {
                Icon: AiFillRedditCircle,
                deviceType: 'computer',
                deviceName: '장비 5',
                deviceId: '20190003709',
                path: '/sdfs',
                location: 180,
                isRunning: false,
            },
        ],
    },
];
