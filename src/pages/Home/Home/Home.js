import React from 'react';
import Advertisement from '../Advertisement/Advertisement';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import FeedBack from '../Feedback/FeedBack';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <Advertisement></Advertisement>
            <FeedBack></FeedBack>
        </div>
    );
};

export default Home;