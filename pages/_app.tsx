import Lenis from '@studio-freight/lenis';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useEffect } from 'react';
import '../styles/globals.css';

const Cursor = dynamic(() => import('src/components/UI/Cursor/Cursor'), {
  ssr: false,
});

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      direction: 'vertical', // vertical, horizontal
      gestureDirection: 'vertical', // vertical, horizontal, both
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: any) {
      if (!time) return;
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      window.cancelAnimationFrame(raf as any);
    };
  }, []);

  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <title>Ahmed | Front-end Developer</title>

        <meta property='og:type' content='website' />

        <link rel='shortcut icon' href='/favicon.ico' />

        <meta name='title' content='a7mdmo74 | Front-end Developer' />
        <meta
          name='description'
          content="I'm Ahmed an Front-end Developer. I got a bachelor of Computer Science at Mansoura University (2019 - 2023)"
        />

        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://my-portfolio-a7mdmo74.vercel.app/' />
        <meta property='og:title' content='Ahmed | Front-end Developer' />
        <meta
          property='og:description'
          content="I'm Ahmed an Front-end Developer. I got a bachelor of Computer Science at Mansoura University (2019 - 2023)"
        />

        <meta property='og:image:type' content='image/jpeg' />
      </Head>
      <Component {...pageProps} />

      <Cursor />
    </>
  );
}

export default MyApp;
