import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io5';
import * as MdIcons from 'react-icons/md';

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
            title: 'Logs',
            icon: <AiIcons.AiOutlineDatabase className='navIcon' />,
            children: [
                {
                    title: 'Devices',
                    path: '/Logs/Devices',
                    cName: 'nav-collapse-item',
                },
                {
                    title: 'Networks',
                    path: '/Logs/Networks',
                    cName: 'nav-collapse-item',
                },
                {
                    title: 'Log Magician',
                    path: '/Logs/Magician',
                    cName: 'nav-collapse-item',
                },
            ],
        },
        {
            type: 'link',
            isCollapsed: false,
            title: 'Solutions',
            path: '/Solutions',
            icon: <IoIcons.IoToggle className='navIcon' />,
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
