import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
import Loading from '../../../Shared/Loading/Loading';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK)
const Payment = () => {
    const booking = useLoaderData()

    //beware of NAVIGATION it is not navigate
    const navigation = useNavigation()
    const { treatment, price, appointmentDate, slot } = booking

    //to show a loading spinner when using default Loader of React-Router-Dom
    if (navigation.state === "loading") {
        return <Loading />
    }

    return (
        <div>
            <h3 className='text-3xl'>Payment for {treatment}</h3>
            <p className='text-xl'>Please pay <strong>$ {price}</strong> for your appointment on <strong>{appointmentDate}</strong></p>

            <div className='w-96 my-6'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm booking={booking} />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;