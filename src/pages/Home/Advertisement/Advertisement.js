import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import Loader from '../../../Loader/Loader';

const Advertisement = () => {

    const {data : advertisedItems = [], refetch} = useQuery({
        queryKey : ['advertisedItem'],
        queryFn : async ()=> {
            try{
               const res = await fetch('https://readers-port-server.vercel.app/advertisedItems');
               const data = await res.json();
               console.log();
               return data;
            }
            catch(err) {
              console.log(err);
            }
        }
    })

    if(!advertisedItems){
        return <Loader></Loader>
    }

    const updateProduct = (id) => {
        console.log(id);
        fetch(`https://readers-port-server.vercel.app/updateProduct/${id}`,{
            method : 'PATCH',
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0) {
                fetch(`https://readers-port-server.vercel.app/advertisedItems/${id}`, {
                    method : 'DELETE',
                })
                .then(res => res.json())
                .then(data => {
                    if(data.deletedCount > 0) {
                        toast.success('Product has been Sold')
                        refetch();
                    }
                })
            }
        })
    }
    return (
        <div>
            {
                advertisedItems.length > 0 && 
                <div className="container mx-auto my-20">
                    {
                        <>
                        <h1 className="text-3xl font-bold text-center my-12">
                            Advertized Items
                        </h1>
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
                            {
                                advertisedItems.map(item => 
                                    <div key={item._id} className="card w-full bg-primary text-primary-content">
                                        <div className="card-body text-white">
                                            <h2 className="card-title">{item.name}</h2>
                                            <p>Price : {item.price}</p>
                                            <div className="card-actions justify-end">
                                            <button onClick={()=> updateProduct(item._id)} className="btn btn-secondary text-primary">Buy Now</button>
                                            </div>
                                        </div>
                                    </div>
                                    )
                            }
                        </div>
                        </>
                    }

                </div>
            }
        </div>
    );
};

export default Advertisement;