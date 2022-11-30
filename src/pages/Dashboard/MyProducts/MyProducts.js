import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
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
                    </tr>
                    </thead>
                    <tbody>
                        {
                            myProducts.map((product, index) => 
                            <tr>
                                <th>{index + 1}</th>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.status}</td>
                                <td>{
                                    product.status === "available" ? 
                                    <button className="btn btn-primary text-secondary">Advertise</button>
                                    :
                                    <button className="btn btn-error">Delete</button>
                                    }
                                </td>
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