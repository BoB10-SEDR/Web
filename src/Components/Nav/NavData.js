import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io5';

export const NavData = [
    {
        title: 'Dashboard',
        path: '',
        icon: <AiIcons.AiFillDashboard />,
        cName: '',
        children: []
    },
    {
        title: 'Logs',
        path: '',
        icon: <AiIcons.AiOutlineDatabase />,
        cName: '',
        children: [
            {
                title: 'Deivces',
                path: '',
                cName: ''
            },
            {
                title: 'Networks',
                path: '',
                cName: ''
            },
            {
                title: 'Detected',
                path: '',
                cName: ''
            }
        ]
    },
    {
        title: 'Solutions',
        path: '',
        icon: <IoIcons.IoToggle />,
        cName: '',
        children: []
    },
    {
        title: 'Pen-testing',
        path: '',
        icon: <AiIcons.AiFillFire />,
        cName: '',
        children: []
    }
]