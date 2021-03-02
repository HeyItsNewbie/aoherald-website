import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home () {
  return (
    <>
      <Head>
        <title>AO Herald -- A Discord Bot</title>
        <meta name='keywords' content='AO Herald' />
      </Head>
      <div>
        <h1 className={styles.title}>Welcome to Albion Online Herald</h1>
        <h2 className={styles.subtitle}>An Albion Online Discord Bot</h2>
        <h3 className={styles.disclaimer}>AO Herald is not affiliated with Sandbox Interactive (SBI) in any manner at all.</h3>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi impedit suscipit architecto, odio inventore nostrum non neque dicta. Quam magni accusantium culpa distinctio tempore iure accusamus, dolorem nobis odit.</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi impedit suscipit architecto, odio inventore nostrum non neque dicta. Quam magni accusantium culpa distinctio tempore iure accusamus, dolorem nobis odit.</p>
      </div>
    </>
  )
}
