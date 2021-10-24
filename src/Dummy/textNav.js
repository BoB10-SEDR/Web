import { BiHome } from 'react-icons/bi';
import { MdAttachMoney } from 'react-icons/md';
import { IoFastFoodOutline } from 'react-icons/io5';
import { RiDoorLine } from 'react-icons/ri';
import { HiOutlineServer } from 'react-icons/hi';
import { dummyDeviceInfoByLayer, dummyDeviceInfoByLayer2 } from '@Dummy/dummyDeviceInfoByLayer';

const dummy = [
    {
        id: 0,
        Icon: BiHome,
        title: 'Home',
        count: 6,
        circle: dummyDeviceInfoByLayer,
    },
    {
        id: 1,
        Icon: MdAttachMoney,
        title: '계산대',
        count: 8,
        circle: dummyDeviceInfoByLayer2,
    },
    {
        id: 2,
        Icon: IoFastFoodOutline,
        title: '진열대',
        count: 5,
        circle: dummyDeviceInfoByLayer,
    },
    {
        id: 3,
        Icon: RiDoorLine,
        title: '출입구',
        count: 3,
        circle: dummyDeviceInfoByLayer2,
    },
    {
        id: 4,
        Icon: HiOutlineServer,
        title: '서버실',
        count: 2,
        circle: dummyDeviceInfoByLayer,
    },
    {
        id: 5,
        Icon: BiHome,
        title: 'Home',
        count: 6,
        circle: dummyDeviceInfoByLayer2,
    },
];

export default dummy;
