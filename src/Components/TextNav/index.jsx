import '@Styles/textNav.css';
import dummyNav from '@Dummy/textNavDummy';

const TextNav = props => {
    const { items = dummyNav } = props;

    return (
        <div id='textNav'>
            <ul>
                {items.map((item, index) => {
                    return <Item key={index} {...item} />;
                })}
            </ul>
        </div>
    );
};

const Item = props => {
    const { Icon, title, count } = props;

    return (
        <li className='textNavItem'>
            <Icon size='20' />
            <span className='title'>{title}</span>
            <span className='count'>{count}</span>
        </li>
    );
};

export default TextNav;
