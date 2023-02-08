import '@/styles/globals.css'

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

// AOS.init();

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <>
  <Component {...pageProps} />
  </>
  )
}
