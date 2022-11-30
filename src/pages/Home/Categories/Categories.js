import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {

    const {data : categories = []} = useQuery({
        queryKey: ['category'],
        queryFn: async ()=> {
           try{
            const res = await fetch('https://readers-port-server-ifazzzz.vercel.app/categories');
            const data = await res.json();
            return data;
           }
           catch(err){
            console.log(err);
           }
        }
    })

    return (
        <div className="container mb-20 mx-auto">
            <h1 className="text-4xl font-bold text-center">Book Categories</h1>
            <div className="my-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    categories.map(category => 
                    <div key={category._id} className="card card-compact w-full bg-gray-100 shadow-xl">
                        <figure><img className="w-full" src={category.thumbnail} alt="cardImage" /></figure>
                        <div className="card-body">
                        <h2 className="text-xl font-bold text-center my-3">{category.title}</h2>
                        <div className="card-actions justify-center">
                            <Link to={`/category/${category._id}`}><button className="btn btn-primary text-white mb-2">View Products</button></Link>
                        </div>
                        </div>
                    </div>
                  )
                }
            </div>
        </div>
    );
};

export default Categories;