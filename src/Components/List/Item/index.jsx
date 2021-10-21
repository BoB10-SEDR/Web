import ToggleSwitch from '@Components/UI/ToggleSwitch';
import '@Styles/listItem.css';

const Item = props => {
    // TODO_P :: ID값을 받아야하고, 나중에 그 값을 통해 요청을 보낼 수 있어야함.
    const { itemType = 'toggle', name = 'itemName', desc = 'description' } = props;

    let isToggle;
    switch (itemType.toLowerCase()) {
        case 'toggle':
            isToggle = true;
            break;
        case 'more':
            isToggle = false;

            break;
        default:
            isToggle = true;
            break;
    }

    return (
        <li id='listItem'>
            <div className='detailWrap'>
                <h3 className='itemName'>{name}</h3>
                <p className='description'>{desc}</p>
            </div>
            {isToggle ? (
                <div className='toggleWrap'>
                    <ToggleSwitch />
                </div>
            ) : (
                <div className='otherWrap'>
                    <h3 className='itemName'>{name}</h3>
                    <p className='description'>{desc}</p>
                </div>
            )}
        </li>
    );
};

export default Item;
