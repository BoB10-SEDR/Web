import '@Styles/textNav.css';
import Item from './Item';
import dummyNav from '@Dummy/envInfo';

const TextNav = props => {
    const { items = dummyNav } = props;

    return (
        <div id='textNav'>
            <div className='content'>
                <div className='heading'>환경구성 목록</div>
                <div className='listWrapper'>
                    <ul>
                        {items.map(item => {
                            return <Item key={item.id} item={item} />;
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default TextNav;
