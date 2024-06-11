"use client"
import { useEffect, useState } from 'react';
import styles from '../styles/home.module.css';

const IndexPage: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };


    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  return (
    <div className={styles.section} style={{overflowX: 'hidden'}}>
      <div className={styles.textContainer}>
        <div className={styles.textLine}>
          <h1 className={styles.movingTextLeft} style={{color:'white', fontSize: `${windowWidth * 0.05}px` }}>LEE JAEYOUNG</h1>
        </div>
        <div className={styles.textLine}>
          <h1 className={styles.movingTextRight} style={{color:'white', fontSize: `${windowWidth * 0.05}px` }}>WEB PORTFOLIO</h1>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;