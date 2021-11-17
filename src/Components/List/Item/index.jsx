import ToggleSwitch from '@Components/UI/ToggleSwitch';
import '@Styles/listItem.css';

const Item = props => {
    // TODO_P :: ID값을 받아야하고, 나중에 그 값을 통해 요청을 보낼 수 있어야함.
    const { isLast, itemType = 'toggle', name = 'itemName', desc = 'description', value = '80%' } = props;

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
        <>
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
                        <span className='value'>{value}</span>
                        {/* <h3 className='itemName'>{name}</h3>
                        <p className='description'>{desc}</p> */}
                    </div>
                )}
            </li>

            {!isLast && <hr style={{ margin: 0, border: '.1px solid #303236' }} />}
        </>
    );
};

export default Item;

// 3가지로 분화되어야 한다 X => 나머지 알고보니 전부 Table임.
