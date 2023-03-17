import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import AvailableAppointment from './AvailableAppointment';
const AvailableAppointments = ({ selectedDate }) => {
    const [appointmentOptions, setAppointmentOptions] = useState([])

    useEffect(() => {
        fetch('appointmentOptions.json')
            .then(res => res.json())
            .then(data => setAppointmentOptions(data))
    }, [])
    return (
        <div className='my-16'>
            <p className='text-xl text-secondary text-center'>Available Services on {format(selectedDate, 'PP')} </p>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6'>
                {
                    appointmentOptions.map(appointmentOption => <AvailableAppointment key={appointmentOption._id}
                        appointmentOption={appointmentOption} />)
                }
            </div>
        </div>
    );
};

export default AvailableAppointments;