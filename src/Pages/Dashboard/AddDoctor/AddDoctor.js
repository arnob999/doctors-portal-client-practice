import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import Loading from '../../Shared/Loading/Loading';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddDoctor = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate()
    const { data: specialties, isLoading } = useQuery({
        queryKey: ['specialty'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/appointmentSpecialty')
            const data = await res.json()
            return data;
        }
    })

    if (isLoading) {
        return <Loading />
    }
    const handleAddDoctor = data => {
        const image = data.img[0]
        const formData = new FormData()
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url)

                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        image: imgData.data.url

                    }

                    //save doctors all info to my database

                    fetch('http://localhost:5000/doctors', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result)
                            toast.success(`${data.name} is addedd successfully`)
                            navigate('/dashboard/managedoctors')
                        })
                }
            })
    }



    const imageHostKey = process.env.REACT_APP_imgbb_key
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
            </form>
        </div>
    );
};

export default AddDoctor;