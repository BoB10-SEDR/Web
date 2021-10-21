/* eslint-disable jsx-a11y/anchor-is-valid */
import '@Styles/header.css';
import NavToggle from '@Components/Header/NavToggle';

const Header = () => {
    return (
        <header id='topbar'>
            <TopbarNav>
                <TopbarNavItem>
                    <NavToggle />
                </TopbarNavItem>
                {/* <li class='topbarNavItem'>
                    <a
                        class='nav-link dropdown-toggle'
                        href='#'
                        id='searchDropdown'
                        role='button'
                        data-toggle='dropdown'
                        aria-haspopup='true'
                        aria-expanded='false'
                    >
                        <i class='fas fa-search fa-fw'></i>
                    </a>
                </li>

                <li class='nav-item dropdown no-arrow mx-1'>
                    <a
                        class='nav-link dropdown-toggle'
                        href='#'
                        id='alertsDropdown'
                        role='button'
                        data-toggle='dropdown'
                        aria-haspopup='true'
                        aria-expanded='false'
                    >
                        <i class='fas fa-bell fa-fw'></i>
                        <span class='badge badge-danger badge-counter'>3+</span>
                    </a>
                </li>

                <li class='nav-item dropdown no-arrow mx-1'>
                    <a
                        class='nav-link dropdown-toggle'
                        href='#'
                        id='messagesDropdown'
                        role='button'
                        data-toggle='dropdown'
                        aria-haspopup='true'
                        aria-expanded='false'
                    >
                        <i class='fas fa-envelope fa-fw'></i>
                        <span class='badge badge-danger badge-counter'>7</span>
                    </a>
                </li>

                <div class='topbar-divider d-none d-sm-block'></div>

                <li class='nav-item dropdown no-arrow'>
                    <a
                        class='nav-link dropdown-toggle'
                        href='#'
                        id='userDropdown'
                        role='button'
                        data-toggle='dropdown'
                        aria-haspopup='true'
                        aria-expanded='false'
                    >
                        <span class='mr-2 d-none d-lg-inline text-gray-600 small'>Douglas McGee</span>
                        <img class='img-profile rounded-circle' src='img/undraw_profile.svg' />
                    </a>
                </li> */}
            </TopbarNav>
        </header>
    );
};

const TopbarNav = ({ children }) => {
    return <ul className='topbarNav'>{children}</ul>;
};

const TopbarNavItem = ({ children }) => {
    return <li className='topbarNavItem'>{children}</li>;
};

export default Header;
