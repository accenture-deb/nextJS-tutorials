import Link from "next/link"


const Products = () => {
  return (
    <div>
        <ul>
            <li><Link href="/products/mango">Mango</Link></li>
            <li><Link href="/products/apple">Apple</Link></li>
            <li><Link href="/products/coconut">Coconut</Link></li>
        </ul>
    </div>
  )
}

export default Products
