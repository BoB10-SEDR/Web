import '@Styles/argumentForm.css';
import { useState, useRef } from 'react';
import { useFormContext } from 'react-hook-form';
import Button from '@Components/UI/Button';

const ArgumentForm = ({ argument = [] }) => {
    return (
        <div id='argumentForm'>
            {argument.map((item, index) => {
                if (!Array.isArray(item)) return <Items id={index} item={item} />;
                return <ItemsRowController items={item} />;
            })}
        </div>
    );
};

const ItemsRowController = props => {
    const { items = [] } = props;
    const [rows, setRows] = useState([[...items]]);

    const handleAdd = (index, data, isDelete) => {
        setRows(p => {
            const newRows = [...p];
            isDelete ? newRows.splice(index, 1) : newRows.push(data);

            return newRows;
        });
    };

    return rows.map((row, index) => {
        return (
            <ItemsRow key={index} rowIndex={index} rowData={row} onAdd={handleAdd} isLast={rows.length === index + 1} />
        );
    });
};

const ItemsRow = props => {
    const { rowData = [], onAdd = () => {}, rowIndex, isLast } = props;

    const handleClick = (index, isDelete) => {
        onAdd(index, rowData, isDelete);
    };

    return (
        <div className='itemsRow'>
            {rowData.map((item, index) => {
                return <Items id={index} item={item} rowId={rowIndex} isRowItem />;
            })}
            <div className='inputBox'>
                {isLast && (
                    <Button className='addButton' onClick={() => handleClick(rowIndex)}>
                        Add
                    </Button>
                )}
                <Button className='deleteButton' onClick={() => handleClick(rowIndex, true)}>
                    Delete
                </Button>
            </div>
        </div>
    );
};

const Items = props => {
    const { register } = useFormContext();
    const { id, item, isRowItem, rowId } = props;
    const { name, type = 'text', options, description, value } = item;

    const fieldName = isRowItem ? `rows.${rowId}.${name}` : `general.${name}`;

    return (
        <div className='inputBox'>
            {type === 'select' ? (
                <label htmlFor='selectDevice'>
                    <div className='title'>{name}</div>
                    <select id={id} {...register(fieldName)}>
                        {options.map((option, index) => {
                            return (
                                <option key={index} value={option}>
                                    {option}
                                </option>
                            );
                        })}
                    </select>
                </label>
            ) : (
                <div key={id} className='inputBox'>
                    <label htmlFor={id}>
                        <div className='title'>{name}</div>
                        <div className='description'>{description}</div>
                        <input type={type} id={id} defaultValue={value} {...register(fieldName)} />
                    </label>
                </div>
            )}
        </div>
    );
};

export default ArgumentForm;
