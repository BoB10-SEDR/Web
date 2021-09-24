import '@Styles/dropDownMenu.css';

const DropDownMenu = props => {
    return (
        <div class='dropdown'>
            <a className='dropdownToggle'>
                <SVG name='threeDotsButton' height='16px' width='16px' />
            </a>
        </div>
    );
};

export default DropDownMenu;
