'use client'

import { publicRuntimeConfig } from '../../../next.config';

import {useEffect, useState} from 'react'

export default function ProductList() {
    console.log('----------', process.env.NEXT_PUBLIC_APP_SERVER_NAME)

    const [products, setProducts] = useState([]);

    const gettProductData = async()=>{
        let data = await fetch(publicRuntimeConfig.productEndPoint);
        data = await data.json();
        // console.log(data);
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
