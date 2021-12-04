import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io5';
import * as MdIcons from 'react-icons/md';
import * as GrIcons from 'react-icons/gr';

const NavData = {
    brand: {
        title: 'Hurry Up',
        path: 'index.html',
        icon: <MdIcons.MdSecurity className='navIcon' size='24' color='#fff' />,
        path: '/',
    },
    items: [
        {
            type: 'link',
            isCollapsed: false,
            title: '대시보드',
            path: '/Dashboard',
            icon: <AiIcons.AiFillDashboard className='navIcon' />,
        },
        {
            type: 'divider',
        },
        {
            type: 'heading',
            text: 'About :',
        },
        {
            type: 'link',
            isCollapsed: true,
            title: '자원',
            icon: <AiIcons.AiOutlineDatabase className='navIcon' />,
            children: [
                {
                    title: '환경',
                    path: '/Resources/Environments',
                    cName: 'nav-collapse-item',
                },
                {
                    title: '즐겨찾기',
                    path: '/Resources/Favorites',
                    cName: 'nav-collapse-item',
                },
            ],
        },
        {
            type: 'link',
            isCollapsed: false,
            title: '모니터링',
            path: '/Monitoring',
            icon: <IoIcons.IoAnalytics className='navIcon' />,
            children: [
                {
                    title: 'Main',
                    path: '/Monitoring/Main',
                    cName: 'nav-collapse-item',
                },
                {
                    title: 'Settings',
                    path: '/Monitoring/Settings',
                    cName: 'nav-collapse-item',
                },
            ],
        },
        {
            type: 'link',
            isCollapsed: false,
            title: '정책',
            path: '/Solutions',
            icon: <IoIcons.IoShieldCheckmarkOutline className='navIcon' />,
            children: [
                {
                    title: 'Main',
                    path: '/Solutions/Main',
                    cName: 'nav-collapse-item',
                },
                {
                    title: 'Settings',
                    path: '/Solutions/Settings',
                    cName: 'nav-collapse-item',
                },
                {
                    title: 'Inspection',
                    path: '/Solutions/Inspection',
                    cName: 'nav-collapse-item',
                },
            ],
        },
        {
            type: 'divider',
        },
    ],
};

export default NavData;
