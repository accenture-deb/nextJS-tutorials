'use client'

import {useEffect, useState} from 'react'

export default function ProductList() {
    const [products, setProducts] = useState([]);

    const gettProductData = async()=>{
        let data = await fetch('https://dummyjson.com/products');
        data = await data.json();
        console.log(data);
        setProducts(data.products);
    }

    useEffect(()=>{
        gettProductData();
    },[])
  return (
    <div>
        <h1>Products List</h1>
        {
            products.map((item)=>(
                <div key={item.id}>
                    <p>Product Name: {item.title}</p>

                </div>
            ))
        }
    </div>
  )
}
