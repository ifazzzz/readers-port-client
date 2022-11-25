import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {

    const {register, handleSubmit, reset} = useForm();
    
    const navigate = useNavigate();

    const addProduct = data => {
        const {category, condition, date, description, location, name, number, originalPrice, price} = data;
        const product = {
            category, condition, date, description, location, name, number, originalPrice, price
        }
        fetch('http://localhost:5000/addedProduct', {
            method: 'POST',
            headers : {
                'Content-Type': 'application/json'
            },
            body : JSON.stringify(product)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                toast.success("product added successfully")
                reset()
                navigate('/dashboard/myProducts')
            }
        })
    }
    return (
        <div className="container mx-auto w-96 lg:w-[1024px] p-6 rounded-sm shadow-xl">
            <div className="bg-accent p-6 rounded-sm">
               <form onSubmit={handleSubmit(addProduct)}>
                    <div className="flex justify-between flex-col md:flex-row lg:flex-row">
                        <input type="text" {...register('name')} placeholder="Product Name" className="input input-bordered w-full mx-2 my-4"/>
                        <input type="text" {...register('price')} placeholder="Sale Price" className="input input-bordered w-full mx-2 my-4"/>            
                    </div>
                    <div className="flex justify-between flex-col md:flex-row lg:flex-row">
                        <select {...register('condition')} className="select select-bordered w-[296px] lg:w-[448px] ml-2">
                            <option disabled selected>Condition</option>
                            <option value="Excellent">Excellent</option>
                            <option value="Good">Good</option>
                            <option value="Fair">Fair</option>
                        </select>
                        <select {...register('category')} className="select select-bordered w-[296px] lg:w-[448px] mr-2">
                            <option disabled selected>Product Category</option>
                            <option value="Novels">Novels</option>
                            <option value="Self Improvement">Self Improvement</option>
                            <option value="Academic">Academic</option>
                        </select>   
                    </div>
                    <div className="flex justify-between flex-col md:flex-row lg:flex-row">
                        <input type="text" {...register('originalPrice')} placeholder="Original Price" className="input input-bordered w-full mx-2 my-4"/>
                        <input type="text" {...register('date')} placeholder="Year Of purchase" className="input input-bordered w-full mx-2 my-4"/>   
                    </div>
                    <div className="flex justify-between flex-col md:flex-row lg:flex-row">
                        <input {...register('location')} type="text" placeholder="Location" className="input input-bordered w-full mx-2 my-4"/>
                        <input {...register('number')} type="number" placeholder="Mobile Number" className="input input-bordered w-full mx-2 my-4"/>   
                    </div>
					<textarea {...register('description')} id="bio" placeholder="Write product description" className="p-2 w-full my-2 mx-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-600 border-gray-300 text-gray-900"></textarea>
                    <input type="submit" value="Add Product" className="btn btn-primary text-white w-full mx-2" />
               </form>
            </div>
        </div>
    );
};

export default AddProduct;