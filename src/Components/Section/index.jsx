import '@Styles/section.css';
import LastBody from './LastBody';

const Section = props => {
    const {
        title,
        data = [],
        grid = 3,
        onSelect = (index, item) => {},
        selectedIndex = false,
        isLast,
        isSubmitted,
        onSubmit = () => {},
    } = props;

    return (
        <div className={`section grid-${grid}`}>
            <Header>{title}</Header>
            {isLast ? (
                <LastBody data={data} onSubmit={onSubmit} isSubmitted={isSubmitted} />
            ) : (
                <Body data={data} onSelect={onSelect} selectedIndex={selectedIndex} />
            )}
        </div>
    );
};

const Header = ({ children }) => {
    return <h4 className='sectionHeader'>{children}</h4>;
};

const Body = props => {
    const { data, onSelect, selectedIndex } = props;

    const handleClick = (index, item) => {
        onSelect(index, item);
    };

    return (
        <ul className='bodyList'>
            {data.map((item, index) => {
                return (
                    <Item
                        key={index}
                        index={index + 1}
                        onClick={() => handleClick(index, item)}
                        isSelected={index === selectedIndex ? '1' : ''}
                    >
                        {item.name}
                    </Item>
                );
            })}
        </ul>
    );
};

const Item = props => {
    const { children, isSelected, onClick, index } = props;

    return (
        <li className='bodyListItem' isSelected={isSelected} onClick={onClick}>
            <div className='index'>
                <div className='indexMarker'>{index}</div>
            </div>
            {children}
        </li>
    );
};

export default Section;
