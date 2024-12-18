import React, { useState } from 'react';

import styles from './index.module.css';

import { scrollToElement } from 'src/utils';
import Image from 'next/image';
import Canvas from './Canvas';

interface IProps {
  refHeader: React.RefObject<HTMLElement>;
  refAbout: React.RefObject<HTMLElement>;
}

function Header(props: IProps) {
  const { refAbout, refHeader } = props;

  const [idxTag, setIdxTag] = useState(0);
  const tags = ['committed', 'self-taught', 'passionate'];

  React.useEffect(() => {
    setTimeout(() => {
      if (idxTag === tags.length - 1) {
        setIdxTag(0);
      } else {
        setIdxTag(idxTag + 1);
      }
    }, 1000);
  }, [idxTag, tags.length]);

  return (
    <header className={styles.header} ref={refHeader}>
      <div className={styles.headerText}>
        <h1>
          Hello ✌🏼,
          <br />
          I&apos;m
          <>
            <span className={styles.headerName}>Ahmed</span>
          </>
        </h1>
        <h2>
          A
          <div className={styles.headerTagWrapper}>
            <span className={styles.headerTag}>{tags[idxTag]}</span>
          </div>
          Front-end developer
          <span className={styles.block}>|</span>
        </h2>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <button onClick={() => scrollToElement(refAbout.current as HTMLElement)} type='button'>
            About me
          </button>
          <button type='button'>
            <a
              style={{ color: 'white' }}
              target='_blank'
              href='https://drive.google.com/file/d/1HosJaBljxr0K1Dy15uEom89kayJfCCyf/view?usp=sharing'
              rel='noreferrer'
            >
              Download CV
            </a>
          </button>
        </div>
      </div>
      <div className={styles.headerImage}>
        <Image
          src={'/images/logo-large.png'}
          alt=''
          width={1120}
          height={1178}
          objectFit='contain'
          priority={true}
        />
      </div>

      <svg
        strokeWidth={0}
        viewBox='0 0 24 24'
        className={styles.headerSvg}
        height={56}
        width={56}
        xmlns='http://www.w3.org/2000/svg'
        onClick={() => scrollToElement(refAbout.current as HTMLElement)}
      >
        <path d='m12 15.586-4.293-4.293-1.414 1.414L12 18.414l5.707-5.707-1.414-1.414z' />
        <path d='m17.707 7.707-1.414-1.414L12 10.586 7.707 6.293 6.293 7.707 12 13.414z' />
      </svg>

      <Canvas />
    </header>
  );
}

export default React.memo(Header);
