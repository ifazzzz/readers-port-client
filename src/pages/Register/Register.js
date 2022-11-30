import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const Register = () => {

    const navigate = useNavigate();

    const {createUser, updateUser} = useContext(AuthContext);

    const {register, handleSubmit, formState :{ errors}, reset} =  useForm();

    const handleRegister = (data) => {
        console.log(data);
          const {name, email, image, password, type} = data;

          createUser(email, password)
          .then(result => {
            const user = result.user;
            console.log(user); 
            reset();          
            const profile = {
                displayName : name,
                photoURL : image
            }
            updateUser(profile)
            .then(() => {navigate('/')})
            .catch(() => {})
            saveUser(name, email, type)
          })
          .catch(err => console.error(err));
    }

    const saveUser = (name, email, type) => {
        const user = {
            name, 
            email,
            type
        }
        fetch('https://readers-port-server.vercel.app/users',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body : JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                toast.success('User created successfully')
            }
        })

    }

    return (
        <div className="container mx-auto my-40">
            <div className="flex flex-col w-1/3 mx-auto p-6 rounded-md sm:p-10 bg-gray-50 text-gray-800">
                <div className="mb-8 text-center">
                    <h1 className="my-3 text-4xl font-bold">Sign in</h1>
                    <p className="text-sm text-gray-600">Sign in to access your account</p>
                </div>
                <form onSubmit={handleSubmit(handleRegister)} className="space-y-12 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-4">
                        <div>
                            <select {...register('type')} className="select select-bordered w-full border-gray-300 bg-gray-50 text-gray-800">
                            <option defaultValue value="user">User</option>
                            <option value="seller">Seller</option>                          
                            </select>
                        </div>
                        <div>
                            <label htmlFor="name" className="block mb-2 text-sm">Full Name</label>
                            <input type="name" name="name" placeholder="Enter Full Name" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800" 
                            {...register('name', 
                            {required : "Name is required"})}
                            />
                            {errors.name && <p className="text-red-600">{errors.name.message}</p>}  
                        </div>
                        <div>
                            <label htmlFor="image" className="block mb-2 text-sm">Photo URL</label>
                            <input type="text" name="image" placeholder="Photo URL" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800" 
                            {...register('image')}/>
                        </div>
                            
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
                            <input type="email" name="email" id="email" placeholder="Enter Email Address" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
                            {...register('email', {required : true})}
                            />
                            
                        </div>
                        <div>
                            <div className="flex justify-between mb-2">
                                <label htmlFor="password" className="text-sm">Password</label>                              
                            </div>
                            <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800" 
                            {...register('password',
                            {required: "Password is required",
                             minLength: {value:6, message: "Password must be at least 6 characters"},
                             pattern : {value: /^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/, message: "password must be strong"}
                        }
                            )}
                            />
                            {errors.password && <p className="text-red-600">{errors.password.message}</p>}  
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div>
                            <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-primary text-gray-50">Sign Up</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;