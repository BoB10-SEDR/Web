import Detail from '@Components/UI/Detail';
import store from '@Stores/deviceTabs';
import { AiFillRedditCircle, AiFillTwitterCircle } from 'react-icons/ai';
import { SiApple } from 'react-icons/si';

const dummyColumns = [
    {
        Header: '장치 종류',
        accessor: 'Col1',
    },
    {
        Header: '장치 이름',
        accessor: 'Col2',
    },

    {
        Header: '소속 구성',
        accessor: 'Col3',
    },
    {
        Header: '식별번호',
        accessor: 'Col4',
    },
    {
        Header: '트래픽 변화량',
        accessor: 'Col5',
    },
    {
        Header: '연결 상태',
        accessor: 'Col6',
    },
    {
        Header: '연결 모듈 수',
        accessor: 'Col7',
    },
    {
        Header: '상세 정보',
        accessor: 'Col8',
    },
];

const dummyData = [
    {
        Col1: 'icon1',
        Col2: '화재경보기기',
        Col3: '구성이름입니다.',
        Col4: '219170147',
        Col5: '13,395',
        Col6: '양호',
        Col7: '23개',
        Col8: (
            <Detail
                onClick={() =>
                    store.openTab({
                        Icon: AiFillRedditCircle,
                        deviceType: 'computer',
                        deviceName: '화재경보기기',
                        deviceId: '20190003709',
                        path: '/sdfs',
                    })
                }
            />
        ),
    },
    {
        Col1: 'icon2',
        Col2: 'IP 카메라',
        Col3: '구성이름입니다.',
        Col4: '219170147',
        Col5: '13,395',
        Col6: '위험',
        Col7: '23개',
        Col8: (
            <Detail
                onClick={() =>
                    store.openTab({
                        Icon: AiFillTwitterCircle,
                        deviceType: 'camera',
                        deviceName: 'IP 카메라',
                        deviceId: '20190003709',
                        path: '/sdfs',
                    })
                }
            />
        ),
    },
    {
        Col1: 'icon3',
        Col2: '공유기',
        Col3: '구성이름입니다.',
        Col4: '219170147',
        Col5: '13,395',
        Col6: '위험',
        Col7: '23개',
        Col8: (
            <Detail
                onClick={() =>
                    store.openTab({
                        Icon: SiApple,
                        deviceType: 'computer',
                        deviceName: '공유기',
                        deviceId: '20190003709',
                        path: '/sdfs',
                    })
                }
            />
        ),
    },
    {
        Col1: 'icon4',
        Col2: '장치 이름입니다.',
        Col3: '구성이름입니다.',
        Col4: '219170147',
        Col5: '13,395',
        Col6: '양호',
        Col7: '23개',
        Col8: <Detail />,
    },
    {
        Col1: 'icon5',
        Col2: '장치 이름입니다.',
        Col3: '구성이름입니다.',
        Col4: '219170147',
        Col5: '13,395',
        Col6: '위험',
        Col7: '23개',
        Col8: <Detail />,
    },
    {
        Col1: 'icon6',
        Col2: '장치 이름입니다.',
        Col3: '구성이름입니다.',
        Col4: '219170147',
        Col5: '13,395',
        Col6: '양호',
        Col7: '23개',
        Col8: <Detail />,
    },
    {
        Col1: 'icon7',
        Col2: '장치 이름입니다.',
        Col3: '구성이름입니다.',
        Col4: '219170147',
        Col5: '13,395',
        Col6: '위험',
        Col7: '23개',
        Col8: <Detail />,
    },
    {
        Col1: 'icon8',
        Col2: '장치 이름입니다.',
        Col3: '구성이름입니다.',
        Col4: '219170147',
        Col5: '13,395',
        Col6: '양호',
        Col7: '23개',
        Col8: <Detail />,
    },
    {
        Col1: 'icon9',
        Col2: '장치 이름입니다.',
        Col3: '구성이름입니다.',
        Col4: '219170147',
        Col5: '13,395',
        Col6: '위험',
        Col7: '23개',
        Col8: <Detail />,
    },
    {
        Col1: 'icon10',
        Col2: '장치 이름입니다.',
        Col3: '구성이름입니다.',
        Col4: '219170147',
        Col5: '13,395',
        Col6: '양호',
        Col7: '23개',
        Col8: <Detail />,
    },
];

export { dummyColumns, dummyData };
