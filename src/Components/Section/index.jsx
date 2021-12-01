import LastBody from './LastBody';

const Section = props => {
    const { title, data = [], grid = 3, onSelect = () => {}, selectedIndex = false, isLast } = props;

    return (
        <div className={`section grid-${grid}`}>
            <Header>{title}</Header>
            {isLast ? <LastBody data={data} /> : <Body data={data} onSelect={onSelect} selectedIndex={selectedIndex} />}
        </div>
    );
};

const Header = ({ children }) => {
    return <h4 className='sectionHeader'>{children}</h4>;
};

const Body = props => {
    const { data, onSelect, selectedIndex } = props;

    const handleClick = index => {
        onSelect(index);
    };

    return (
        <ul className='bodyList'>
            {data.map((item, index) => {
                return (
                    <Item
                        key={index}
                        onClick={() => handleClick(index)}
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
    const { children, isSelected, onClick } = props;

    return (
        <li className='bodyListItem' isSelected={isSelected} onClick={onClick}>
            {children}
        </li>
    );
};

export default Section;
