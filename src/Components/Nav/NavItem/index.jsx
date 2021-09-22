const NavItem = props => {
    const item = props.item;
    const type = item.type;
    let result;
    if (type == 'link') {
        if (item.isCollapsed) {
        }
        result = (
            <li className='nav-item'>
                <div className='nav-link'>
                    {item.icon}
                    <span>{item.title}</span>
                </div>
            </li>
        );
    } else if (type == 'heading') {
        result = <div className='nav-heading'>{item.text}</div>;
    } else if (type == 'divider') {
        result = <hr className='nav-divider' />;
    }

    return result;
};

export default NavItem;
