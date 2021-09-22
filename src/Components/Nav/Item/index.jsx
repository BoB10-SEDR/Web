import LinkItem from '@Components/Nav/Item/LinkItem';
import Heading from '@Components/Nav/Item/Heading';
import Divider from '@Components/Nav/Item/Divider';

const Item = props => {
    const item = props.item;
    const type = item.type;
    let result;
    if (type == 'link') {
        result = <LinkItem isCollapsed={item.isCollapsed} item={item}></LinkItem>;
    } else if (type === 'heading') {
        result = <Heading text={item.text}></Heading>;
    } else if (type === 'divider') {
        result = <Divider></Divider>;
    }

    return result;
};

export default Item;
