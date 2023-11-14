import Image from 'next/image'
import styles from './page.module.css'
import User from './user/page'

export default function Home() {
  return (
    <main>
      <h1>Welcome to Next JS</h1>
      <User />
    </main>
  )
}
