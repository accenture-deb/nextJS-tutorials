import Link from "next/link";

export default function About() {
  return (
    <div>
        <h1>About Page</h1>
        <Link href="/about/about-product">Product</Link><br />
        <Link href="/about/about-user">Users</Link>
    </div>
  )
}
