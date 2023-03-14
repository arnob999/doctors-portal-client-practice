import React from 'react';
import treatment from "../../../assets/images/treatment.png"
const SpecialService = () => {
    return (
        <div className="card h-[576px] w-fit lg:mt-28 md:mt-20 mt-14 md:card-side lg:card-side bg-base-100 mx-auto">
            <figure><img className='h-full w-[458px]' src={treatment} alt="Movie" /></figure>
            <div className="card-body max-w-lg lg:ml-[102px] h-96 my-auto">
                <h2 className="card-title text-5xl">Exceptional Dental Care, on Your Terms</h2>
                <p className='mt-[26px]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <div className="card-actions">
                    <button className="mt-[45px] btn bg-gradient-to-r from-primary to-secondary text-white">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default SpecialService;