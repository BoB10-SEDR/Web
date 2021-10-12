import '@Styles/ui.css';

const TabHeader = props => {
    const { title, subTitle } = props;
    //TODO_S: TabHeader style 정의

    return (
        <div className='tabHeader'>
            <div className='title'>{title}</div>
            <div className='subTitle'>{subTitle}</div>
        </div>
    );
};

export default TabHeader;
