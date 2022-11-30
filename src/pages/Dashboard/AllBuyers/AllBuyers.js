import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllBuyers = () => {

    const {data : allBuyers = [], refetch} = useQuery({
        queryKey : ['buyer'],
        queryFn : async ()=> {
            const res = await fetch('https://readers-port-server.vercel.app/allBuyers')
            const data = await res.json();
            return data;
        }
    })

    const deleteBuyer = (id) => {
         fetch(`https://readers-port-server.vercel.app/allBuyers/${id}`,{
            method: 'DELETE',
         })
         .then(res => res.json())
         .then(data => {
            if(data.deletedCount > 0) {
                toast.success("Buyer Deleted successfully")
                refetch()
            }
         })
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    
                    <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        allBuyers.map((buyer, index) => 
                        <tr key={buyer._id}>
                            <th>{index + 1}</th>
                            <td>{buyer.name}</td>
                            <td>{buyer.email}</td>
                            <td><button onClick={()=>deleteBuyer(buyer._id)} className="btn btn-error">Delete</button></td>
                        </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBuyers;