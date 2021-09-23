import Card from '@Components/Card';
import Item from '@Components/List/Item';
import '@Styles/list.css';

const List = props => {
    // TODO_P :: listType 기준 명세에 적어야함.
    const { title = 'ListTitle', content = [], itemType = 'toggle' } = props;

    return (
        <Card title={title}>
            <ul>
                {content.map(c => (
                    <Item {...c} itemType={itemType} />
                ))}
            </ul>
        </Card>
    );
};

export default List;
