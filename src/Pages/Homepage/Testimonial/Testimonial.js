import React from 'react';
import comma from "../../../assets/icons/quote.svg"
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import Review from '../Review/Review';
const Testimonial = () => {
    const reviews = [
        {
            _id: 1,
            name: "Winson Herry",
            review: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            location: "California",
            pic: people1
        },
        {
            _id: 2,
            name: "Winson Herry",
            review: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            location: "California ",
            pic: people2
        },
        {
            _id: 3,
            name: "Winson Herry",
            review: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            location: "California",
            pic: people3
        },
    ]
    return (
        <section className='my-16'>
            <div className='flex justify-between'>
                <div>
                    <h4 className="text-xl text-primary font-bold">
                        Testimonial
                    </h4>
                    <h2 className='text-4xl'>
                        What Our Patients Says
                    </h2>

                </div>
                <figure>
                    <img className='w-24 md:w-36 lg:w-48' src={comma} alt="" />
                </figure>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    reviews.map(review => <Review review={review} key={review._id}></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonial;