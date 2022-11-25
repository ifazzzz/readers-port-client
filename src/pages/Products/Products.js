import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Loader from '../../Loader/Loader';
import OpenModal from './OpenModal';
import ProductsCard from './ProductsCard';

const Products = () => {

    const [modalInfo, setModalInfo] = useState(null);

    const data = useLoaderData()
    const products = data.products;

    if(!data){
        return <Loader></Loader>
    }

    return (
        <section>
            <div className="container mx-auto my-40">
           {
            products.map((product, index) =>
            <ProductsCard
            key={index}
            product={product}
            setModalInfo={setModalInfo}
            ></ProductsCard>)
           }
           </div>
           {
            modalInfo && 
            <OpenModal
           modalInfo={modalInfo}
           setModalInfo={setModalInfo}
           ></OpenModal>
           }
        </section>
    );
};

export default Products;