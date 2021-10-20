import '@Styles/ui.css';
import Button from '@Components/UI/Button';
import { GiHamburgerMenu } from 'react-icons/gi';

const HamBurgerMenu = props => {
    return (
        <Button className='hamBurgerMenu' backgroundColor='#24262a'>
            <GiHamburgerMenu color='red' size='20' />
        </Button>
    );
};

export default HamBurgerMenu;
