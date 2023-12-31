import React from 'react';

import styles from './index.module.css';

import { scrollToElement } from 'src/utils';
import CheckboxIos from 'src/components/UI/CheckboxIos';
import Logo from 'src/components/UI/Icon/logo';

interface IProps {
  refSection: {
    refHeader: React.RefObject<HTMLElement>;
    refAbout: React.RefObject<HTMLElement>;
    refPortfolio: React.RefObject<HTMLElement>;
    refContact: React.RefObject<HTMLElement>;
  };
  handleToggleDarkTheme: () => void;
  toggle: boolean;
}

function Navbar(props: IProps) {
  const { refSection, handleToggleDarkTheme, toggle } = props;

  return (
    <nav className={styles.navBar}>
      <div className='container'>
        <ul className={styles.navList}>
          <li
            className={`${styles.navItem} ${styles.navItemLogo}`}
            onClick={() => scrollToElement(refSection.refHeader.current as HTMLElement)}
          >
            <>
              <Logo />
            </>
          </li>
          <li
            className={styles.navItem}
            onClick={() => scrollToElement(refSection.refAbout.current as HTMLElement)}
          >
            About Me
          </li>
          <li
            className={styles.navItem}
            onClick={() => scrollToElement(refSection.refPortfolio.current as HTMLElement)}
          >
            Portfolio
          </li>
          <li
            className={styles.navItem}
            onClick={() => scrollToElement(refSection.refContact.current as HTMLElement)}
          >
            Contact Me
          </li>
          <li className={styles.navItem}>
            <CheckboxIos id={2} isChecked={toggle} handleToggle={handleToggleDarkTheme} />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default React.memo(Navbar);
