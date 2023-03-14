import React from 'react';
//We use review:userReview because if we use review it will reffer the review we destructure before 
const Review = ({ review }) => {
    const { name, review: userReview, pic, location } = review
    return (
        <div className="card shadow-xl">
            <div className="card-body">
                <p>{userReview}</p>
                <div className="flex mt-6 items-center ">
                    <div className="avatar mr-6">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img alt='' src={pic} />
                        </div>
                    </div>
                    <div>
                        <h5 className='text-lg'>{name}</h5>
                        <div>

                            <p className='font-medium'>{location}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;