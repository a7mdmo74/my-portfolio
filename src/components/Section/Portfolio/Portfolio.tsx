import Image from 'next/image';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import styles from './index.module.css';

interface IProps {
  refPortfolio: React.RefObject<HTMLElement>;
  portfolioImg: any;
}

// Filter projects based on active tab

const PROJECTS = [
  {
    name: 'Plantex',
    description: 'Landing page website',
    stack: 'HTML - CSS - JavaScript',
    linkDemo: 'https://a7mdmo74.github.io/plantex',
    source: 'https://github.com/a7mdmo74/plantex',
    image: '/images/plantex.png',
    tab: 'landing',
  },
  {
    name: 'Hospital Website',
    description: 'Landing page hospital care website',
    stack: 'HTML - CSS - JavaScript',
    linkDemo: 'https://a7mdmo74.github.io/hospital-website',
    source: 'https://github.com/a7mdmo74/hospital-website',
    image: '/images/hospital.png',
    tab: 'landing',
  },
  {
    name: 'holux',
    description: 'Landing page website',
    stack: 'HTML - CSS - JavaScript',
    linkDemo: 'https://a7mdmo74.github.io/holux',
    source: 'https://github.com/a7mdmo74/holux',
    image: '/images/holux.png',
    tab: 'landing',
  },
  {
    name: 'Education Website',
    description: 'Landing page education website',
    stack: 'HTML - CSS - JavaScript',
    linkDemo: 'https://a7mdmo74.github.io/nline-education',
    source: 'https://github.com/a7mdmo74/nline-education',
    image: '/images/education.png',
    tab: 'landing',
  },
  {
    name: 'Brainwave',
    description: 'Build a landing page website with Reactjs',
    stack: 'Reactjs - Tailwindcss',
    linkDemo: 'https://brainwave-a7mdmo74.vercel.app/',
    source: 'https://github.com/a7mdmo74/brainwave',
    image: '/images/brainwave.png',
    tab: 'reactjs',
  },
  {
    name: 'Awards Winning',
    description: 'Build a gamming website',
    stack: 'Reactjs - Redux - Tailwindcss',
    linkDemo: 'https://awards-winning-a7mdmo74.vercel.app/',
    source: 'https://github.com/a7mdmo74/awards-winning',
    image: '/images/awards.png',
    tab: 'reactjs',
  },
  {
    name: 'amazon clone',
    description: 'Build a clone ecommerce website with Nextjs',
    stack: 'Nextjs - Reactjs - Redux - Tailwindcss',
    linkDemo: 'https://amazon-a7mdmo74.vercel.app/',
    source: 'https://github.com/a7mdmo74/amazon',
    image: '/images/amazon.jpg',
    tab: 'nextjs',
  },
  {
    name: 'Mealify',
    description: 'Build a restaurant website',
    stack: 'Nextjs - Reactjs - Taiwindcss - Prisma - mongoDB - Clerk',
    linkDemo: 'https://mealify-a7mdmo74.vercel.app/',
    source: 'https://github.com/a7mdmo74/mealify',
    image: '/images/mealify.png',
    tab: 'nextjs',
  },
  {
    name: 'V Social',
    description: 'Build a social media website',
    stack: 'Nextjs, Reactjs, Redux, Tailwindcss',
    linkDemo: 'https://v-a7mdmo74.vercel.app/',
    source: 'https://github.com/a7mdmo74/v-social',
    image: '/images/vsocial.png',
    tab: 'nextjs',
  },
  {
    name: 'Atomix Design',
    description: 'Build a site atomix',
    stack: 'Nextjs - Reactjs - tailwindCSS',
    linkDemo: 'https://atomix-design-a7mdmo74.vercel.app/',
    source: 'https://github.com/a7mdmo74/atomix-design',
    image: '/images/atomix.jpg',
    tab: 'nextjs',
  },
  {
    name: 'Metaversus',
    description: 'Build UI metaversus',
    stack: 'Reactjs, Vite, Tailwindcss',
    linkDemo: 'https://metaversus-a7mdmo74.vercel.app/',
    source: 'https://github.com/a7mdmo74/metaversus',
    image: '/images/metaverse.jpg',
    tab: 'reactjs',
  },
  {
    name: 'GPT-3 website',
    description: 'A basic landing page',
    stack: 'Reactjs - tailwindcss',
    linkDemo: 'https://gpt3-website-a7mdmo74.vercel.app/',
    source: 'https://github.com/a7mdmo74/gpt3-website',
    image: '/images/gpt.jpg',
    tab: 'reactjs',
  },
  {
    name: 'landing page',
    description: 'A basic landing page',
    stack: 'Reactjs - tailwindcss - shadcn',
    linkDemo: 'https://shadcn-landing-page-a7mdmo74.vercel.app/',
    source: 'https://github.com/a7mdmo74/shadcn-landing-page',
    image: '/images/shadcn-ui.png',
    tab: 'reactjs',
  },
  {
    name: 'Airbnb clone',
    description: 'Build an Airbnb website with Nextjs',
    stack: 'Nextjs - Reactjs - Redux - Tailwindcss',
    linkDemo: 'https://airbnb-clone-a7mdmo74.vercel.app/',
    source: 'https://github.com/a7mdmo74/airbnb-clone',
    image: '/images/airbnb.jpg',
    tab: 'nextjs',
  },
  {
    name: 'Taqwa',
    description: 'Build an Islamic website with Nextjs',
    stack: 'Nextjs - Reactjs - Tailwindcss - API',
    linkDemo: 'https://islamic-a7mdmo74.vercel.app/',
    source: 'https://github.com/a7mdmo74/islamic',
    image: '/images/taqwa.png',
    tab: 'nextjs',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const projectVariants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      ease: 'easeOut',
      duration: 0.3,
    },
  },
};

const TABS = ['nextjs', 'reactjs', 'landing'];

export default function Portfolio(props: IProps) {
  const [activeTab, setActiveTab] = useState('nextjs');

  const filteredProjects = PROJECTS.filter((project) =>
    activeTab === 'all' ? true : project.tab === activeTab,
  );

  return (
    <section className='Portfolio container' ref={props.refPortfolio}>
      <h2 className={styles.portfolioTitle}>My Projects</h2>
      {/* Add tabs */}
      <div className={styles.tabs}>
        {TABS.map((tab) => (
          <button
            key={tab}
            className={`${styles.tabButton} ${
              activeTab === tab ? `${styles.active} bg-[#F25F4C]` : ''
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className={styles.project}>
        <AnimatePresence>
          <motion.ul
            key={activeTab}
            variants={containerVariants}
            initial='hidden'
            animate='visible'
          >
            {filteredProjects.map((item, idx) => (
              <motion.li
                key={item.name}
                className={styles.projectItem}
                variants={projectVariants}
                layout
              >
                <div className='Project__item__wrapper'>
                  <div className={styles.projectItemImage}>
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={357}
                      height={202}
                      objectFit='cover'
                      // placeholder='blur'
                      // blurDataURL={portfolioImg[idx]?.base64}
                      priority={true}
                    />
                  </div>
                  <div className={styles.projectItemInfo}>
                    <h3>
                      <span>{item.name}</span>
                    </h3>
                    <p
                      className={styles.itemInfo}
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    />
                    <p className={styles.itemStack}>{item.stack}</p>
                    <p className={styles.itemView}>
                      <a
                        href={item.linkDemo || '/'}
                        target='_blank'
                        rel='noreferrer'
                        className={styles.linkHighlight}
                      >
                        <svg
                          aria-hidden='true'
                          focusable='false'
                          data-prefix='fas'
                          data-icon='link'
                          className='svg-inline--fa fa-link fa-w-16 portfolioItem__StyledIcon-sc-1n9h1q1-7 fUtfwQ'
                          role='img'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 512 512'
                        >
                          <path
                            fill='currentColor'
                            d='M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 0 1-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0 1 20.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0 0 20.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 0 0-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z'
                          />
                        </svg>
                        Visit
                      </a>
                      <a
                        href={item.source || '/'}
                        target='_blank'
                        rel='noreferrer'
                        className={styles.linkBorder}
                      >
                        <svg
                          aria-hidden='true'
                          focusable='false'
                          data-prefix='fab'
                          data-icon='github'
                          className='svg-inline--fa fa-github fa-w-16 portfolioItem__StyledIcon-sc-1n9h1q1-7 fUtfwQ'
                          role='img'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 496 512'
                        >
                          <path
                            fill='currentColor'
                            d='M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z'
                          />
                        </svg>
                        Source
                      </a>
                    </p>
                  </div>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </AnimatePresence>
      </div>
    </section>
  );
}
