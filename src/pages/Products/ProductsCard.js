import React from 'react';
import { BsCheckCircle } from "react-icons/bs";
const ProductsCard = ({product}) => {

    const {name, img, location, originalPrice, resalePrice, posted, seller, usedTime } = product;

    return (
        
            <div className="card lg:card-side bg-base-100 shadow-xl h-[456px] md:w-2/3 mx-auto mb-16">
                <figure className="w-1/2"><img className="h-full" src={img} alt="Album"/></figure>
                <div className="card-body pt-32">
                    <h2 className="card-title text-3xl">{name}</h2>
                    <div className="items-center">
                    <p className="my-2 text-xl font-bold h-8">Price : {resalePrice}</p>
                    <div className="flex justify-between my-2">
                        <div><p className="text-lg">Original Price: {originalPrice}</p></div>
                        <div><p className="text-lg">used for: {usedTime}</p></div>
                    </div>
                    <div className="flex justify-between my-2">
                        <div><p className="text-lg">Seller : {seller} <BsCheckCircle className="inline"></BsCheckCircle></p></div>
                        <div><p className="text-lg">Posted on {posted}</p></div>
                    </div>
                    </div>
                    <div className="card-actions justify-between items-center">
                        <div>
                            <p className="text-lg">Location : {location}</p>
                        </div>
                    <button className="btn btn-primary text-white">Book Now</button>
                    </div>
                </div>
            </div> 
        
    );
};

export default ProductsCard;