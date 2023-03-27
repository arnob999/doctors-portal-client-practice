import { format } from 'date-fns';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';

const AppointmentModal = ({ setTreatment, treatment, selectedDate }) => {
    const date = format(selectedDate, 'PP')
    const { user } = useContext(AuthContext)
    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const phone = form.phone.value;
        const slot = form.slot.value;
        const email = form.email.value;


        const booking = {
            appointmentDate: date,
            treatment: treatment.name,
            patient: name,
            slot,
            email,
            phone
        }
        console.log(booking)

        fetch('http://localhost:5000/bookings', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)

                if (data.acknowledged) {
                    setTreatment(null)
                    toast.success("Booking Confirm")
                }
            })
    }
    return (
        <>
            <input type="checkbox" id="appointment" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="appointment" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">
                        {treatment && treatment.name}
                    </h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-4 mt-10'>
                        <input type="text" value={date} className="input input-bordered w-full" disabled />
                        <select name='slot' className="select select-bordered w-full">
                            {
                                treatment?.slots?.map((slot, index) => <option
                                    value={slot}
                                    key={index}>
                                    {slot}
                                </option>)
                            }
                        </select>
                        <input name='name' type="text" defaultValue={user?.displayName} disabled placeholder="Full Name" className="input input-bordered w-full" />

                        <input name='phone' type="text" placeholder="Phone" className="input input-bordered w-full" />

                        <input name='email' type="text"
                            defaultValue={user?.email}
                            disabled
                            placeholder="Your Email Here" className="input input-bordered w-full" />

                        <br />
                        <input className='btn btn-accent w-full' type="submit" value='Submit' />
                    </form>
                </div>
            </div>
        </>
    );
};

export default AppointmentModal;