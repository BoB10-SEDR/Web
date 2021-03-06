/* eslint-disable jsx-a11y/anchor-is-valid */
import '@Styles/card.css';
import Header from '@Components/UI/CardHeader';

const Card = props => {
    const {
        title = '',
        titleFontColor = '#FFF',
        children = [],
        border = '',
        borderRadius = '6px',
        padding = '20px',
    } = props;

    const hasTitle = title !== '';

    return hasTitle ? (
        <div className='card'>
            <Header title={title} titleFontColor={titleFontColor} />
            <Body padding={padding}>{children}</Body>
        </div>
    ) : (
        <div
            className='cardSimple'
            style={{ border: border ?? '1px solid rgba(154, 161, 171, 0.2)', borderRadius: borderRadius }}
        >
            <Body isSimple padding={padding}>
                {children}
            </Body>
        </div>
    );
};

const Body = props => {
    const { children = [], isSimple, padding } = props;

    const bodyClassName = isSimple ? 'cardBodySimple' : 'cardBody';

    return (
        <div className={bodyClassName} style={{ padding: padding }}>
            {children}
        </div>
    );
};

export default Card;
