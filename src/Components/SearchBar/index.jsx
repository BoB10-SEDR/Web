import '@Styles/searchBar.css';
import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import Button from '@Components/UI/Button';

const SearchBar = props => {
    const { placeholder = 'Search', onClick = () => {} } = props;
    const [input, setInput] = useState('');

    const handleChange = event => {
        setInput(event.target.value);
    };

    const handleClick = () => {
        onClick(input);
    };

    const handleKeyUp = event => {
        if (event.keyCode === 13) {
            event.preventDefault();
            handleClick();
        }
    };

    return (
        <div className='searchBar'>
            <input
                type='text'
                className='searchInput'
                placeholder={placeholder}
                value={input}
                onChange={handleChange}
                onKeyUp={handleKeyUp}
            />
            <Button className='searchButton' onClick={handleClick}>
                <AiOutlineSearch />
            </Button>
        </div>
    );
};

export default SearchBar;
