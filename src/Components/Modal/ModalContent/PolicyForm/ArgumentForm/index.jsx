import '@Styles/argumentForm.css';
import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import Button from '@Components/UI/Button';

const ArgumentForm = ({ argument = [] }) => {
    return (
        <div id='argumentForm'>
            {argument.map((item, index) => {
                if (!Array.isArray(item)) return <Items id={index} item={item} />;
                return <ItemsRowController item={item} />;
            })}
        </div>
    );
};

const ItemsRowController = ({ item }) => {
    const [bottomRows, setBottomRows] = useState([]);

    const handleClick = () => {
        bottomRows.push(item);
        setBottomRows(bottomRows);
    };

    return (
        <>
            <ItemsRow rowData={item} />
            <Button onClick={handleClick}>ADD</Button>
            {bottomRows.map(row => {
                return <ItemsRow rowData={row} />;
            })}
        </>
    );
};

const ItemsRow = ({ rowData = [] }) => {
    return (
        <div className='row'>
            {rowData.map((item, index) => {
                return <Items id={index} item={item} />;
            })}
        </div>
    );
};

const Items = props => {
    const { register } = useFormContext();
    const { id, item } = props;
    const { name, type = 'text', options, description, value } = item;

    return (
        <div className='items'>
            {type === 'select' ? (
                <label htmlFor='selectDevice'>
                    <select id={id} {...register(name, { required: true })}>
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
                        <input type={type} id={id} defaultValue={value} {...register(name, { required: true })} />
                    </label>
                </div>
            )}
        </div>
    );
};

export default ArgumentForm;
