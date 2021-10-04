import { FaCashRegister } from 'react-icons/fa';

const foo = index => {
    alert(`dummy ${index}`);
};

const buttons = [
    {
        children: <FaCashRegister />,
        onClick: () => foo(0),
    },
    {
        children: <FaCashRegister />,
        onClick: () => foo(1),
    },
    {
        children: <FaCashRegister />,
        onClick: () => foo(2),
    },
    {
        children: <FaCashRegister />,
        onClick: () => foo(3),
    },
];

export default buttons;
