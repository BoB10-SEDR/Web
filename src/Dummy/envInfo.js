import { BiHome } from 'react-icons/bi';
import { MdAttachMoney } from 'react-icons/md';
import { IoFastFoodOutline } from 'react-icons/io5';
import { RiDoorLine } from 'react-icons/ri';
import { HiOutlineServer } from 'react-icons/hi';
import { env1, env2 } from '@Dummy/devicesInfo';

const dummy = [
    {
        id: 0,
        Icon: BiHome,
        title: 'Home',
        devices: env1,
    },
    {
        id: 1,
        Icon: MdAttachMoney,
        title: '계산대',
        devices: env2,
    },
    {
        id: 2,
        Icon: IoFastFoodOutline,
        title: '진열대',
        devices: env1,
    },
    {
        id: 3,
        Icon: RiDoorLine,
        title: '출입구',
        devices: env2,
    },
    {
        id: 4,
        Icon: HiOutlineServer,
        title: '서버실',
        devices: env1,
    },
];

export default dummy;
