import store from '@Stores/deviceDetail';
import { CustomTab, CustomTabPanel } from '@Components/CustomTabs';
import { AiFillRedditCircle, AiFillTwitterCircle } from 'react-icons/ai';
import { SiApple } from 'react-icons/si';

const buttons = [
    {
        children: <AiFillRedditCircle />,
        onClick: () =>
            store.openTab({
                Icon: AiFillRedditCircle,
                type: 'computer',
                text: 'dummy1',
                path: '/sdfs',
            }),
    },
    {
        children: <AiFillTwitterCircle />,
        onClick: () =>
            store.openTab({
                Icon: AiFillTwitterCircle,
                type: 'computer',
                text: 'dummy2',
                path: '/sdfs',
            }),
    },
    {
        children: <SiApple />,
        onClick: () =>
            store.openTab({
                Icon: SiApple,
                type: 'computer',
                text: 'dummy3',
                path: '/sdfs',
            }),
    },
];

export default buttons;
