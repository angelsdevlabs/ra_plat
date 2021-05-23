import Head from 'next/head';

import styles from '../styles/pages/Home.module.css';
import { HomeProvider } from '../contexts/HomeContext';


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home | Runners Angels</title>
      </Head>

      <HomeProvider />
    </div >

  )
}