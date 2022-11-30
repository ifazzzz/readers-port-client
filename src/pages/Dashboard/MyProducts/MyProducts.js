import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Contexts/AuthProvider';

const MyProducts = () => {

    const {user} = useContext(AuthContext);
    const [myProducts, setMyProducts] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5000/myProducts?email=${user?.email}`)
        .then(data => {
            const loaded = data.data;
            setMyProducts(loaded);
        })
    },[user?.email])

    const handleAdvertise = (product) => {
        
        fetch('http://localhost:5000/advertise', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                toast.success('Advertized Successfully')
            }
        })
    }

    const deleteProduct = (id) => {
        fetch(`http://localhost:5000/addedProducts/${id}`,{
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                toast.success('Product Deleted')
                window.location.reload()
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
                        <th>Price</th>
                        <th>Status</th>
                        <th>Manage</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            myProducts.map((product, index) => 
                            <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.status}</td>
                                <td>{
                                    product.status === "available" && 
                                    <button onClick={()=> handleAdvertise(product)} className="btn btn-primary text-secondary">Advertise</button>                                    
                                    }
                                </td>
                                <td><button onClick={()=>deleteProduct(product._id)} className="btn btn-error">X</button></td>
                            </tr>
                            )
                        }
                    
                   
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProducts;