import Stamp from './Stamp';
import Detail from './Detail';

const Body = props => {
    const { data } = props;
    const { type, state, name, id, info, stat } = data;

    return (
        <div className='profileBody'>
            <Stamp type={type} state={state} name={name} id={id} />
            <Detail info={info} stat={stat} />
        </div>
    );
};

export default Body;
