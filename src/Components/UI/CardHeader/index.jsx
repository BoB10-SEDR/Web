import KebabMenu from '@Components/UI/KebabMenu';
import KebabDummy from '@Dummy/KebabDummy';

const CardHeader = props => {
    const { title = '' } = props;

    return (
        <header className='cardHeader'>
            <h6>{title}</h6>
            <KebabMenu items={KebabDummy} />
        </header>
    );
};

export default CardHeader;
