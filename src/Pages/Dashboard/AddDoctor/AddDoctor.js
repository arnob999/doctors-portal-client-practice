import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import Loading from '../../Shared/Loading/Loading';

const AddDoctor = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();

    const { data: specialties, isLoading } = useQuery({
        queryKey: ['specialty'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/appointmentSpeciality')
            const data = await res.json()
            return data;
        }
    })

    const handleAddDoctor = data => {
        console.log(data)
    }

    if (isLoading) {
        return <Loading />
    }
    return (
        <div className='w-96 p-7'>
            <h2 className='text-3xl'>Add a doctor</h2>

            <form onSubmit={handleSubmit(handleAddDoctor)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Name</span></label>
                    <input type="text"
                        {...register("name", {
                            required: "Name is required"
                        })}
                        className="input input-bordered w-full max-w-xs" />
                    {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Email</span></label>
                    <input type="text"
                        {...register("email", {
                            required: "Email Address is required"
                        })}
                        className="input input-bordered w-full max-w-xs" />
                    {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Specialty</span></label>
                    <select {...register('specialty')}
                        className="select select-bordered w-full max-w-xs">
                        <option disabled selected>Please Select One</option>
                        {
                            specialties?.map(specialty =>
                                <option
                                    key={specialty._id}
                                    value={specialty.name}
                                >{specialty.name}
                                </option>

                            )
                        }
                    </select>
                </div>

                <div className="form-control">
                    <label className="label"> <span className="label-text">Upload Your Image</span></label>
                    <input type="file"
                        {...register("img", {
                            required: "Image is required"
                        })}
                        className="input " />
                    {errors.img && <p className='text-red-600'>{errors.img?.message}</p>}
                </div>


                <input className='btn btn-accent w-full mt-4' value="Add Doctor" type="submit" />
                {/* <div>
                    {loginError && <p className='text-red-600'>{loginError}</p>}
                </div> */}
            </form>
        </div>
    );
};

export default AddDoctor;