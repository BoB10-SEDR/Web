import '@Styles/textNav.css';
import Item from './Item';
import store from '@Stores/envInfo';
import dummyNav from '@Dummy/textNavDummy';

const TextNav = props => {
    const { items = dummyNav } = props;

    return (
        <div id='textNav'>
            <div className='content'>
                <div className='heading'>환경구성 목록</div>
                <ul>
                    {items.map(item => {
                        const { id } = item;
                        return <Item key={id} {...item} />;
                    })}
                </ul>
            </div>
        </div>
    );
};

export default TextNav;
