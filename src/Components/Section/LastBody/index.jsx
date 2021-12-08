import { useState, useEffect } from 'react';

const LastBody = props => {
    const { data, onSubmit, isSubmitted } = props;
    const [selectedItems, setSelectedItems] = useState(new Set());

    useEffect(() => {
        const param = [];
        selectedItems.forEach(item => {
            param.push(JSON.parse(item));
        });
        onSubmit(param);
    }, [isSubmitted]);

    const handleSelectedItem = (item, isSelected) => {
        const element = JSON.stringify(item);
        if (isSelected) {
            selectedItems.add(element);
            setSelectedItems(selectedItems);
        } else if (!isSelected && selectedItems.has(element)) {
            selectedItems.delete(element);
            setSelectedItems(selectedItems);
        }
    };

    return (
        <ul className='bodyList'>
            {data.map(item => {
                return <Item key={item.idx} item={item} onSelect={handleSelectedItem} />;
            })}
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
