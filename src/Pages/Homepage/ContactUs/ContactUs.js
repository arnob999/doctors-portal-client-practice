import React from 'react';
import contactUsBg from '../../../assets/images/appointment.png'
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';
const ContactUs = () => {
    return (
        <section className='pb-12' style={{
            background: `url(${contactUsBg})`
        }}>
            <div className='lg:w-[450] lg:h-[468px] w-[359px] h-[475px] mx-auto pt-[50px]'>
                <p className='text-primary font-bold text-center'>
                    Contact Us
                </p>

                <p className='text-center text-3xl text-center mt-3 text-white'>
                    Stay connected with us
                </p>
                <div>

                    <input type="text" placeholder="Email Address" className="input input-bordered w-full mt-[41px]" />

                    <input type="text" placeholder="Subject" className="mt-[19px] input input-bordered w-full" />


                    <input type="text" placeholder="Your message" className="mt-[19px] input input-bordered w-full h-[136px]" />

                </div>

            </div>
            <div className='flex justify-center'>
                <PrimaryButton>Submit</PrimaryButton>
            </div>
        </section>);
};

export default ContactUs;