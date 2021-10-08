import '@Styles/cardBodyForm.css';

const CardBodyForm = props => {
    const {
        mode = 'default',
        title = '제목 없음',
        content = '내용 없음',
        icon = '',
        titleFontColor = '#FFF',
        contentFontColor = '#FFF',
        titleFontSize = '14px',
        contentFontSize = '18px',
    } = props;

    switch (mode.toLocaleLowerCase()) {
        case 'default':
            return (
                <div className='defaultCardBody'>
                    <article className='description'>
                        <h4 className='title' style={{ color: titleFontColor, fontSize: titleFontSize }}>
                            {title}
                        </h4>
                        <p className='content' style={{ color: contentFontColor, fontSize: contentFontSize }}>
                            {content}
                        </p>
                    </article>
                    <div className='cardIcon'>
                        <img src={icon} alt='' />
                    </div>
                </div>
            );
        default:
            return <></>;
    }
};

export default CardBodyForm;
