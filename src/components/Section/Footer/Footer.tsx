import React from 'react';
import Logo from 'src/components/UI/Icon/logo';

import styles from './index.module.css';

type TProps = {
  toggle: boolean;
};

function Footer(props: TProps) {
  return (
    <footer className={`container ${styles.footer}`}>
      <>
        <Logo />
      </>
      <p>
        Copyright &copy; {new Date().getFullYear()},{' '}
        <a target='_blank' href='https://github.com/a7mdmo74' rel='noreferrer'>
          @a7mdmo74
        </a>
      </p>
    </footer>
  );
}

export default React.memo(Footer);
