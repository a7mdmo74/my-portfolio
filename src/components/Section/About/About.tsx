/* eslint-disable @next/next/no-img-element */
import React from 'react';

import styles from './index.module.css';

interface IProps {
  refAbout: React.RefObject<HTMLElement>;
}

export default function About(props: IProps) {
  return (
    <section className='About container' ref={props.refAbout}>
      <div className={styles.aboutHeading}>
        <h2 className={styles.aboutTitle}>About me</h2>

        <h3 className={styles.aboutSubtitle}>
          if you&apos;re <span>wondering</span> who <span>I am...</span>
        </h3>
      </div>
      <div className={styles.aboutMe}>
        <p>
          Hi, my name is <span className={styles.hightLight}>Ahmed Muhammad</span>, i&apos;m{' '}
          {new Date().getFullYear() - 2001} years old. I got a bachelor of Computer Science at
          Mansoura University (2019 - 2023). Besides, i am really passionate about{' '}
          <span className={styles.hightLight}>Javascript</span> and{' '}
          <span className={styles.hightLight}>Web Development.</span>
        </p>

        <p>
          I started learning web programming in 2020. Before that, I had a background in C# / python
          programming so getting access to javascript is not difficult. I have been in love with
          javascript since I did not know it, I like it. I searched many different sources to learn
          about this language for example:{' '}
          <span>
            <a href='https://developer.mozilla.org/'>Developer mozilla</a>
          </span>
          ,{' '}
          <span>
            <a href='https://github.com/getify/You-Dont-Know-JS'>You Don&apos;t Know JS</a>
          </span>
          .... I also took some online courses like{' '}
          <span>
            <a href='https://www.udemy.com/course/react-the-complete-guide-incl-redux/'>
              React The Complete Guide in Redux
            </a>
          </span>
          ...
        </p>

        <p>
          In December 2022, when school was almost done, I decided to do an internship at a company
          to experience what a real environment is like. I learned a lot from my boss and colleagues
          while working.
        </p>
        <p>
          I want to be a good person in the field that I have chosen so I tried a lot, worked hard.
        </p>
      </div>
      <div className={styles.aboutMeStack}>
        <h3>
          My current <span className={styles.hightLight}>stack</span>
          of <span className={styles.hightLight}>languages/technologies</span>
          is:
        </h3>
        <div>
          <img
            src='https://img.shields.io/badge/html5-%23E34F26.svg?style=flat-square&logo=html5&logoColor=white'
            alt='HTML5'
          />
          <img
            src='https://img.shields.io/badge/css3-%231572B6.svg?style=flat-square&logo=css3&logoColor=white'
            alt='CSS3'
          />
          <img
            src='https://img.shields.io/badge/SASS-hotpink.svg?style=flat-square&logo=SASS&logoColor=white'
            alt='SASS'
          />
          <img
            src='https://img.shields.io/badge/Tailwindcss-%2338B2AC.svg?style=flat-square&logo=tailwind-css&logoColor=white'
            alt='TailwindCSS'
          />
          <img
            src='https://img.shields.io/badge/Javascript-%23323330.svg?style=flat-square&logo=javascript&logoColor=%23F7DF1E'
            alt='Javascript'
          />
          <img
            src='https://img.shields.io/badge/Typescript-%23007ACC.svg?style=flat-square&logo=typescript&logoColor=white'
            alt='Typescript'
          />
          <img
            src='https://img.shields.io/badge/Reactjs-%2320232a.svg?style=flat-square&logo=react&logoColor=%2361DAFB'
            alt='Reactjs'
          />
          <img
            src='https://img.shields.io/badge/React_Native-%2320232a.svg?style=flat-square&logo=react&logoColor=%2361DAFB'
            alt='React Native'
          />
          <img
            src='https://img.shields.io/badge/Nextjs-black?style=flat-square&logo=next.js&logoColor=white'
            alt='Nextjs'
          />
          <img
            src='https://img.shields.io/badge/Nodejs-6DA55F?style=flat-square&logo=node.js&logoColor=white'
            alt='Nodejs'
          />
          <img
            src='https://img.shields.io/badge/Expressjs-6DA55F?style=flat-square&logo=express&logoColor=white'
            alt='Expressjs'
          />
          <img
            src='https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=flat-square&logo=mongodb&logoColor=white'
            alt='MongoDB'
          />
          <img
            src='https://img.shields.io/badge/Prisma-%232D3748.svg?style=flat-square&logo=prisma&logoColor=white'
            alt='Prisma'
          />
          <img
            src='https://img.shields.io/badge/Clerk-6C47FF?style=flat-square&logo=clerk&logoColor=white'
            alt='Clerk'
          />
          <img
            src='https://img.shields.io/badge/Git-%23E34F26.svg?style=flat-square&logo=git&logoColor=white'
            alt='Git'
          />
        </div>
      </div>

      <div className={styles.aboutContribution}>
        <p className={styles.aboutContributionTitle}>Contributions in this years</p>
        <img src='https://ghchart.rshah.org/a7mdmo74' alt='' />
      </div>
    </section>
  );
}
