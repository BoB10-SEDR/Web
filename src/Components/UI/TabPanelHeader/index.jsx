import '@Styles/ui.css';

const TabPanelHeader = props => {
    const { name, id } = props;

    return (
        <div className='tabPanelHeader'>
            <div className='name'>{name}</div>
            <div className='id'>{`ID: ${id}`}</div>
        </div>
    );
};

export default TabPanelHeader;
