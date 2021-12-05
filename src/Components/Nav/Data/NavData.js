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
                    path: '/Resources',
                    cName: 'nav-collapse-item',
                },
                {
                    title: '즐겨찾기',
                    path: '/Resources/Bookmarks',
                    cName: 'nav-collapse-item',
                },
            ],
        },
        {
            type: 'link',
            isCollapsed: true,
            title: '모니터링',
            icon: <IoIcons.IoAnalytics className='navIcon' />,
            children: [
                {
                    title: '대시보드',
                    path: '/Monitoring',
                    cName: 'nav-collapse-item',
                },
                {
                    title: '모니터링 설정',
                    path: '/Monitoring/Settings',
                    cName: 'nav-collapse-item',
                },
            ],
        },
        {
            type: 'link',
            isCollapsed: true,
            title: '정책',
            icon: <IoIcons.IoShieldCheckmarkOutline className='navIcon' />,
            children: [
                {
                    title: '대시보드',
                    path: '/Solutions',
                    cName: 'nav-collapse-item',
                },
                {
                    title: '정책 설정',
                    path: '/Solutions/Settings',
                    cName: 'nav-collapse-item',
                },
                {
                    title: '정책 점검',
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
