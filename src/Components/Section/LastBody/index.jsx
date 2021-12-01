import { useState } from 'react';
import Button from '@Components/UI/Button';

const LastBody = props => {
    const { data } = props;
    const [selectedItems, setSelectedItems] = useState(new Set());

    const handleSelectedItem = (item, isSelected) => {
        if (isSelected) {
            selectedItems.add(item);
            setSelectedItems(selectedItems);
        } else if (!isSelected && selectedItems.has(item)) {
            selectedItems.delete(item);
            setSelectedItems(selectedItems);
        }
    };

    const handleClick = () => {
        console.log(selectedItems);
    };

    return (
        <ul className='bodyList'>
            {data.map(item => {
                return <Item key={item.idx} item={item} onSelect={handleSelectedItem} />;
            })}
            <Button onClick={handleClick}>Apply</Button>
        </ul>
    );
};

const Item = props => {
    const { item, onSelect } = props;
    const { idx, name } = item;
    const [isSelected, setIsSelected] = useState(false);

    const handleChange = ({ target }) => {
        setIsSelected(!isSelected);
        onSelect(item, target.checked);
    };

    return (
        <div className={`bodyListItem ${isSelected ? 'checked' : ''}`}>
            <input type='checkbox' id={`check-${idx}`} checked={isSelected} onChange={handleChange} />
            <label htmlFor={`check-${idx}`} className='lastBodyLabel'>
                {name}
            </label>
        </div>
    );
};

export default LastBody;
