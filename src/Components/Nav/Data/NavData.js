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
            title: 'Dashboard',
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
            title: 'Resources',
            icon: <AiIcons.AiOutlineDatabase className='navIcon' />,
            children: [
                {
                    title: 'Devices',
                    path: '/Resources/Devices',
                    cName: 'nav-collapse-item',
                },
                {
                    title: 'Networks',
                    path: '/Resources/Networks',
                    cName: 'nav-collapse-item',
                },
            ],
        },
        {
            type: 'link',
            isCollapsed: false,
            title: 'Monitoring',
            path: '/Monitoring',
            icon: <IoIcons.IoAnalytics className='navIcon' />,
        },
        {
            type: 'link',
            isCollapsed: false,
            title: 'Solutions',
            path: '/Solutions',
            icon: <IoIcons.IoShieldCheckmarkOutline className='navIcon' />,
        },
        {
            type: 'link',
            isCollapsed: false,
            title: 'Inspection',
            path: '/Inspection',
            icon: <AiIcons.AiFillFire className='navIcon' />,
        },
        {
            type: 'divider',
        },
    ],
};

export default NavData;
