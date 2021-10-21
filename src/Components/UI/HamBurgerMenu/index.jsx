import '@Styles/ui.css';
import Button from '@Components/UI/Button';
import { GiHamburgerMenu } from 'react-icons/gi';

const HamburgerMenu = props => {
    const { onClick = () => {} } = props;
    return (
        <Button className='hamBurgerMenu' backgroundColor='#24262a' onClick={onClick}>
            <GiHamburgerMenu color='red' size='20' />
        </Button>
    );
};

export default HamburgerMenu;
