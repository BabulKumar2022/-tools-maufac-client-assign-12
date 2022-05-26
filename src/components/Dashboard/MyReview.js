import React from 'react';
import pepole1 from '../../assets/images/people1.png'
import pepole2 from '../../assets/images/people2.png'
import pepole3 from '../../assets/images/people3.png'
import Review from '../Home/Review';

const MyReview = () => {
    const reviews =[
        {
            _id:1,
            name: 'Calivart',
            review: '',
            location:'Dhaka',
            img:pepole1
        },
        {
            _id:2,
            name: 'Hery son',
            review: '',
            location:'Dhaka',
            img:pepole2
        },
        {
            _id:3,
            name: 'Robert hooks',
            review: '',
            location:'Dhaka',
            img:pepole3
        }
    ]


    return (
        <div >
            <div className="">
                 <h1 className="text-center text-3xl">Reviews</h1>
            </div >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

            {
                reviews.map(review=><Review
                key={review._id}
                review={review}
                ></Review>)
            }
            </div>
          
        </div>
    );
};

export default MyReview;