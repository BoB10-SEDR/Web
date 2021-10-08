import '@Styles/moduleInfo.css';
import Header from './Header';
import Body from './Body';

const Profile = props => {
    const { data } = props;

    return (
        <div className='moduleProfile'>
            <Header />
            <Body data={data} />
        </div>
    );
};

export default Profile;
