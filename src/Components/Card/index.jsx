/* eslint-disable jsx-a11y/anchor-is-valid */
import '@Styles/card.css';
import KebabMenu from '@Components/UI/KebabMenu';

const Card = props => {
    const { title = '', children = [] } = props;

    const hasTitle = title !== '';

    return hasTitle ? (
        <div className='card'>
            <Header title={title} />
            <Body>{children}</Body>
        </div>
    ) : (
        <div className='cardSimple'>
            <Body isSimple>{children}</Body>
        </div>
    );
};

const Header = props => {
    const { title = '' } = props;

    return (
        <header className='cardHeader'>
            <h6>{title}</h6>
            <KebabMenu items={null} />
        </header>
    );
};

const Body = props => {
    const { children = [], isSimple } = props;

    const bodyClassName = isSimple ? 'cardBodySimple' : 'cardBody';

    return <div className={bodyClassName}>{children}</div>;
};

// TODO_P :: 아래 Assets 그리고 UI Component 각 알맞는 디렉토리에 분리

// const svg = {
//     threeDotsButton: (
//         <path d='M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z' />
//     ),
// };

// const SVG = props => {
//     const { width, height, name } = props;

//     return (
//         <svg
//             x='0px'
//             y='0px'
//             width={width ?? 'auto'}
//             height={height ?? 'auto'}
//             viewBox={`0 0 ${width ?? 'auto'} ${height ?? 'auto'}`}
//         >
//             {svg[name]}
//         </svg>
//     );
// };

export default Card;
