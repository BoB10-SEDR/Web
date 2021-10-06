import { useState } from 'react';

const SearchBar = props => {
    const { placeholder = 'Search', onChange = () => {} } = props;
    const [query, setQuery] = useState('');

    const handleChange = event => {
        setQuery(event.target.value);
    };

    return (
        <div className='searchBar'>
            <input type='text' placeholder={placeholder} value={query} onChange={handleChange} />
        </div>
    );
};

export default SearchBar;
