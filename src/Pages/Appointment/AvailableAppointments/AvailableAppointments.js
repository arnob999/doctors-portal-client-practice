import React from 'react';
import { format } from 'date-fns';
const AvailableAppointments = ({ selectedDate }) => {
    return (
        <div>
            <p className='text-xl text-secondary text-center'>Available Services on {format(selectedDate, 'PP')} </p>
        </div>
    );
};

export default AvailableAppointments;