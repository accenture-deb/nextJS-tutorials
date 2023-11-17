import Image from 'next/image';
import MainImage from '../../public/vercel.svg';
import styles from './page.module.css'
import Link from 'next/link';
console.log(MainImage);
export default function Home() {

  return (
    <main className={styles.main}>
      <h1>Welcome to NextJS Session</h1>
      <Link href="/userslist">Users</Link>
      <Image src="https://media.istockphoto.com/id/511367374/de/foto/sch%C3%B6ne-wolkengebilde-%C3%BCber-dem-meer.jpg?s=2048x2048&w=is&k=20&c=bqwItGb2RQsXUeaKG7S26_xiY3nJZnDexJku2_6e_2k=" 
      width={600} 
      height={600}
      alt='my image'
      priority='true'
      />
      <br />
    </main>
  )
}
