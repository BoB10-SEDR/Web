import { BsFilter } from 'react-icons/bs';
import Button from '@Components/UI/Button';

const FilterButton = () => {
    return (
        <div id='filterButton'>
            <Button backgroundColor='#1b1e22'>
                <BsFilter />
            </Button>
        </div>
    );
};

export default FilterButton;
