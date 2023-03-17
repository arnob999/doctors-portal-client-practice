import React from 'react';

const AvailableAppointment = ({ appointmentOption, setShowInModals }) => {
    const { name, slots } = appointmentOption
    return (
        <div className="card shadow-lg">
            <div className="card-body text-center">
                <h2 className="text-2xl text-secondary font-bold text-center">{name}</h2>
                <p>
                    {
                        slots.length > 0 ? slots[0] : 'Try Another Day'
                    }
                </p>
                <p>
                    {slots.length} {slots.length > 1 ? 'Slots' : 'Slot'}  Available
                </p>
                <div className="card-actions justify-center">
                    <label
                        onClick={() => setShowInModals(appointmentOption)}
                        htmlFor="appointment" className="btn btn-secondary text-white">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AvailableAppointment;