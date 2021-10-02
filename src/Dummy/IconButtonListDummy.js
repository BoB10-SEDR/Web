import { FaCashRegister } from 'react-icons/fa';

const foo = index => {
    alert(`dummy ${index}`);
};

const buttons = [
    {
        Icon: FaCashRegister,
        onClick: () => foo(0),
    },
    {
        Icon: FaCashRegister,
        onClick: () => foo(1),
    },
    {
        Icon: FaCashRegister,
        onClick: () => foo(2),
    },
    {
        Icon: FaCashRegister,
        onClick: () => foo(3),
    },
];

export default buttons;
