import Card from '@Components/Card';
import Item from '@Components/List/Item';
import DummyCardEx from '@Dummy/DummyCardEx';
import '@Styles/list.css';

const List = props => {
    // TODO_P :: listType 기준 명세에 적어야함.
    const {
        title = 'ListTitle',
        titleFontColor = '#F02632',
        content = [],
        itemType = 'toggle',
        defaultListHeight = '215px',
    } = props;

    return (
        <Card title={title} titleFontColor={titleFontColor}>
            <DummyCardEx height={defaultListHeight}>
                <ul>
                    {content.map((c, i) => (
                        <Item {...c} itemType={itemType} isLast={i === content.length - 1} />
                    ))}
                </ul>
            </DummyCardEx>
        </Card>
    );
};

export default List;
