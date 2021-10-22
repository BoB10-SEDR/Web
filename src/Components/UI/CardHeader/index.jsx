import KebabMenu from '@Components/UI/KebabMenu';
import KebabDummy from '@Dummy/KebabDummy';

const CardHeader = props => {
    const { title = '', titleFontColor } = props;

    return (
        <header className='cardHeader'>
            <h6 style={{ color: titleFontColor }}>{title}</h6>
            <KebabMenu items={KebabDummy} />
        </header>
    );
};

export default CardHeader;
