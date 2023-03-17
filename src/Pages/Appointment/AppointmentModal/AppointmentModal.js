import { format } from 'date-fns';
import React from 'react';

const AppointmentModal = ({ showInModals, selectedDate }) => {
    const date = format(selectedDate, 'PP')
    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const phone = form.phone.value;
        const slot = form.slot.value;
        const email = form.email.value;

        const booking = {
            appointmentDate: date,
            treatment: showInModals.name,
            patient: name,
            slot,
            email,
            phone
        }
        console.log(booking)
    }
    return (
        <>
            <input type="checkbox" id="appointment" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="appointment" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">
                        {showInModals && showInModals.name}
                    </h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-4 mt-10'>
                        <input type="text" value={date} className="input input-bordered w-full" disabled />
                        <select name='slot' className="select select-bordered w-full">
                            {
                                showInModals?.slots?.map((slot, index) => <option
                                    value={slot}
                                    key={index}>
                                    {slot}
                                </option>)
                            }
                        </select>
                        <input name='name' type="text" placeholder="Full Name" className="input input-bordered w-full" />

                        <input name='phone' type="text" placeholder="Phone" className="input input-bordered w-full" />

                        <input name='email' type="text" placeholder="Your Email Here" className="input input-bordered w-full" />

                        <br />
                        <input className='btn btn-accent w-full' type="submit" value='Submit' />
                    </form>
                </div>
            </div>
        </>
    );
};

export default AppointmentModal;