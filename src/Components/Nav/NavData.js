import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io5';
import * as MdIcons from 'react-icons/md';

const NavData = {
    brand: {
        title: 'HurryUp',
        path: 'index.html',
        icon: <MdIcons.MdSecurity className='nav-icon' size='24' color='#fff' />,
    },
    items: [
        {
            type: 'link',
            isMain: true,
            isCollapsed: false,
            title: 'Dashboard',
            path: '/',
            icon: <AiIcons.AiFillDashboard className='nav-icon' />,
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
            isMain: false,
            isCollapsed: true,
            title: 'Logs',
            path: '/Logs',
            icon: <AiIcons.AiOutlineDatabase className='nav-icon' />,
            children: [
                {
                    title: 'Deivces',
                    path: '',
                    cName: 'nav-collapse-item',
                },
                {
                    title: 'Networks',
                    path: '',
                    cName: 'nav-collapse-item',
                },
                {
                    title: 'Detected',
                    path: '',
                    cName: 'nav-collapse-item',
                },
            ],
        },
        {
            type: 'link',
            isMain: true,
            isCollapsed: false,
            title: 'Solutions',
            path: '/Solutions',
            icon: <IoIcons.IoToggle className='nav-icon' />,
        },
        {
            type: 'link',
            isMain: true,
            isCollapsed: false,
            title: 'Pen-testing',
            path: '/PenTesting',
            icon: <AiIcons.AiFillFire className='nav-icon' />,
        },
        {
            type: 'divider',
        },
    ],
};

export default NavData;
