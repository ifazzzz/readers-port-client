import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllSellers = () => {

    const {data : allSellers = [], refetch} = useQuery({
        queryKey : ['seller'],
        queryFn : async ()=> {
            const res = await fetch('https://readers-port-server.vercel.app/allSellers')
            const data = await res.json();
            return data;
        }
    })

    const deleteSeller = (id) => {
         fetch(`https://readers-port-server.vercel.app/allSellers/${id}`,{
            method: 'DELETE',
         })
         .then(res => res.json())
         .then(data => {
            if(data.deletedCount > 0) {
                toast.success("seller Deleted successfully")
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
                        allSellers.map((seller, index) => 
                        <tr key={seller._id}>
                            <th>{index + 1}</th>
                            <td>{seller.name}</td>
                            <td>{seller.email}</td>
                            <td><button onClick={()=>deleteSeller(seller._id)} className="btn btn-error">Delete</button></td>
                        </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSellers;