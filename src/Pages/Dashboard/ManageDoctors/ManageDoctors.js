import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../Shared/Loading/Loading';

const ManageDoctors = () => {
    const { data: doctors, isLoading } = useQuery({
        queryKey: ["doctors"],
        queryFn: async () => {
            try {
                const res = await fetch('http://localhost:5000/doctors', {
                    headers: {
                        authorization: `bearrer ${localStorage.getItem('accessToken')}`
                    }
                })
                const data = await res.json();
                return data;
            }
            catch (error) {

            }
        }
    })
    if (isLoading) {
        return <Loading />
    }
    return (
        <div>
            <h2 className='text-3xl'>Manage Doctors</h2>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Specialty</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            doctors.map((doctor, i) => <tr key={doctor._id}>
                                <th>{i + 1}</th>
                                <td></td>
                                <td>{doctor.name}</td>
                                <td>{doctor.email}</td>
                                <td>{doctor.specialty}</td>
                                <td>Blue</td>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageDoctors;