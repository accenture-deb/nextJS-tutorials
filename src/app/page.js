// import Image from 'next/image'
// import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="main">
      <h1>Welcome to session 3</h1>
      <Link href="/about">About</Link>
    </main>
  )
}
