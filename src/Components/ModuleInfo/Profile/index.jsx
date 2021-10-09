import '@Styles/moduleInfo.css';
import Body from './Body';
import KebabMenu from '@Components/UI/KebabMenu';
import KebabDummy from '@Dummy/KebabDummy';

const Profile = props => {
    const { data } = props;

    return (
        <div className='moduleProfile'>
            <Header />
            <Body data={data} />
        </div>
    );
};

const Header = () => {
    return (
        <div className='profileHeader'>
            <div className='profileMenu'>
                <KebabMenu color='#97989b' items={KebabDummy} />
            </div>
        </div>
    );
};

export default Profile;
