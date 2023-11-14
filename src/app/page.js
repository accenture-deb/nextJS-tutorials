// import Image from 'next/image'
import styles from './page.module.css'
import User from './user/page'


export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Welcome to session 2</h1>
      <User name="Deb" />
      <User name="Eric" />
      <User name="Paulina" />
    </main>
  )
}
