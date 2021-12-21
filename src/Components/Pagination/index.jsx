import Pagination from 'rc-pagination';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const CustomPagination = props => {
    return <Pagination {...props} prevIcon={IoIosArrowBack} nextIcon={IoIosArrowForward} />;
};

export default CustomPagination;
