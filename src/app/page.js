import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: '200',
  subsets: ['latin'],
  display: 'swap'
})

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={poppins.className}>Welcome to NEXTJS Sesion</h1>
      <Link href="/userslist">Users</Link>
    </main>
  )
}
