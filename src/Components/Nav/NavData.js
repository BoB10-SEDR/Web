import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io5';
import * as MdIcons from 'react-icons/md';

const NavData = {
    brand: {
        title: 'HurryUp',
        path: 'index.html',
        icon: <MdIcons.MdSecurity size='24' />,
    },
    items: [
        {
            isCollapsed: false,
            title: 'Dashboard',
            path: '',
            icon: <AiIcons.AiFillDashboard color='#fff' />,
            cName: 'nav-item',
        },
        {
            isCollapsed: true,
            title: 'Logs',
            path: '',
            icon: <AiIcons.AiOutlineDatabase color='#fff' />,
            cName: 'nav-item collapsed',
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
            isCollapsed: false,
            title: 'Solutions',
            path: '',
            icon: <IoIcons.IoToggle color='#fff' />,
            cName: 'nav-item',
        },
        {
            isCollapsed: false,
            title: 'Pen-testing',
            path: '',
            icon: <AiIcons.AiFillFire color='#fff' />,
            cName: 'nav-item',
        },
    ],
};

export default NavData;
