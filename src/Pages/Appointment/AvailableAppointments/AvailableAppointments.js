import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import AvailableAppointment from './AvailableAppointment';
import AppointmentModal from '../AppointmentModal/AppointmentModal';
import { useQuery } from '@tanstack/react-query';
const AvailableAppointments = ({ selectedDate }) => {
    const [showInModals, setShowInModals] = useState([])


    // const [appointmentOptions, setAppointmentOptions] = useState([])

    // useEffect(() => {
    //     fetch('http://localhost:5000/appointmentOptions')
    //         .then(res => res.json())
    //         .then(data => setAppointmentOptions(data))
    // }, [])

    const { data: appointmentOptions = [] } = useQuery({
        queryKey: ['appointmentOptions'],
        queryFn: () => fetch('http://localhost:5000/appointmentOptions')
            .then(res => res.json())
    })


    return (
        <div className='my-16'>
            <p className='text-xl text-secondary text-center'>Available Services on {format(selectedDate, 'PP')} </p>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6'>
                {
                    appointmentOptions.map(appointmentOption => <AvailableAppointment
                        key={appointmentOption._id}
                        appointmentOption={appointmentOption}
                        setShowInModals={setShowInModals} />)
                }
            </div>
            <AppointmentModal showInModals={showInModals}
                selectedDate={selectedDate}></AppointmentModal>
        </div>
    );
};

export default AvailableAppointments;