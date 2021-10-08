import KebabMenu from '@Components/UI/KebabMenu';
import KebabDummy from '@Dummy/KebabDummy';

const Header = () => {
    return (
        <div className='profileHeader'>
            <div className='profileMenu'>
                <KebabMenu color='#97989b' items={KebabDummy} />
            </div>
        </div>
    );
};

export default Header;
