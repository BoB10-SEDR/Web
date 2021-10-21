import store from '@Stores/nav';
import HamburgerMenu from '@Components/UI/HamburgerMenu';

const NavToggle = () => {
    const handleClick = () => {
        store.setOpen(!store.open);
    };

    return <HamburgerMenu onClick={handleClick} />;
};

export default NavToggle;
