import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Contexts/AuthProvider';

const OpenModal = ({modalInfo, setModalInfo}) => {

    const {name,  resalePrice} = modalInfo;

    const {user} = useContext(AuthContext);

    const handleSubmit = event => {
         event.preventDefault();
         const form = event.target
         const user = form.user.value;
         const email = form.email.value;
         const product = form.product.value;
         const price = form.price.value;
         const number = form.number.value;
         const location = form.location.value;

         const bookingInfo = {
            user,
            email,
            product,
            price,
            number,
            location
         }

         fetch('http://localhost:5000/bookings',{
            method: 'POST',
            headers : {
                'content-type': 'application/json'
            },
            body : JSON.stringify(bookingInfo)
         })
         .then(res => res.json())
         .then(data => {
            if(data.acknowledged){
                toast.success("booking confirmed")
                setModalInfo(null)
            }
         })
         
    }

    return (
        <div>         
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handleSubmit}>
                    <input type="text" name="user" disabled defaultValue={user?.displayName} className="input input-bordered w-full my-2" />
                    <input type="email" name="email" disabled defaultValue={user?.email}  className="input input-bordered w-full my-2" />
                    <input type="text" name="product" disabled defaultValue={name} className="input input-bordered w-full my-2" />
                    <input type="text" name="price"  disabled defaultValue={resalePrice}  className="input input-bordered w-full my-2" />
                    <input type="number" name="number" placeholder="Your Contact Number" className="input input-bordered w-full my-2" />
                    <input type="text" name="location" placeholder="Your Location" className="input input-bordered w-full my-2" />
                    <input type="submit" value="Submit" className="btn btn-primary w-full my-2 text-secondary" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default OpenModal;