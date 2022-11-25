import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="mb-24">
            <div className="hero h-96 lg:h-[656px]" style={{ backgroundImage: `url("https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                    <h1 className="text-white mb-5 text-5xl font-bold hidden lg:block">Buy And Sell Books</h1>
                    <p className="text-white mb-5 hidden lg:block">Get Your desired Book With Best Price or sell your used books at reasonable prices. You Can buy or sell books anywhere near Dhaka city. Build and share your knowledge</p>
                    <Link to='/register'><button className="btn btn-secondary text-primary">Get Started</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;