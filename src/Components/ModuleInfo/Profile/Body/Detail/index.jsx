import Info from './Info';
import Stat from './Stat';

const Detail = props => {
    const { info, stat } = props;

    return (
        <div className='profileDetail'>
            <Info info={info} />
            <Stat stat={stat} />
        </div>
    );
};

export default Detail;
