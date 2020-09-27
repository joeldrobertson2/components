import React from 'react';
import headerStyles from './header.module.scss';
import Logo from '../icons/logo.svg';

function Header() {
  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.logo}>
        <Logo />
      </div>
      <nav>
        <ul className={headerStyles.nav}>
          <li>
            <a href="/">Page 1</a>
          </li>
          <li>
            <a href="/">Page 2</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
