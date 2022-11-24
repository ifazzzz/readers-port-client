import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Loader from '../../Loader/Loader';
import ProductsCard from './ProductsCard';

const Products = () => {
    const data = useLoaderData()
    const products = data.products;

    if(!products){
        return <Loader></Loader>
    }
    return (
        <div className="container mx-auto my-40">
           {
            products.map((product, index) =>
            <ProductsCard
            key={index}
            product={product}
            ></ProductsCard>
            )
           }
        </div>
    );
};

export default Products;