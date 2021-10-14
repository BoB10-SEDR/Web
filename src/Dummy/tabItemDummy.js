import store from '@Stores/deviceDetail';
import { SiApple } from 'react-icons/si';
import { CustomTab, CustomTabPanel } from '@Components/CustomTabs';
import { AiFillRedditCircle, AiFillTwitterCircle } from 'react-icons/ai';

const buttons = [
    {
        children: <AiFillRedditCircle />,
        onClick: () =>
            store.openTab(<CustomTab Icon={AiFillRedditCircle}>dummy1</CustomTab>, <CustomTabPanel title={'dummy1'} />),
    },
    {
        children: <AiFillTwitterCircle />,
        onClick: () =>
            store.openTab(
                <CustomTab Icon={AiFillTwitterCircle}>dummy2</CustomTab>,
                <CustomTabPanel title={'dummy2'} />
            ),
    },
    {
        children: <SiApple />,
        onClick: () => store.openTab(<CustomTab Icon={SiApple}>dummy3</CustomTab>, <CustomTabPanel title={'dummy3'} />),
    },
];

export default buttons;
