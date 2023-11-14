// import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Welcome to NextJS Session</h1>
      <Link href="/productslist">Go to Product Page</Link>
      <Link href="/userslist">Go to Users Page</Link>
    </main>
  )
}
