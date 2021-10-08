import Info from './Info';
import Stat from './Stat';

const Detail = props => {
    return (
        <div className='profileDetail'>
            <Info />
            <Stat totalLogs={'210,926'} attackRate={'10%'} />
        </div>
    );
};

export default Detail;
