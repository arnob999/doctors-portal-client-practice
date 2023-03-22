import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm()

    const handleLogin = data => {
        console.log(data);
    }
    return (
        <div className='h-[800px]  flex justify-center items-center'>
            <div className='w-96 p-9'>
                <h2 className='text-xl text-center'>
                    Login
                </h2>
                <form onSubmit={handleSubmit(handleLogin)}>

                    <div className="form-control w-full max-w-xs">
                        <label className='label'>
                            <span className='label-text'>
                                Email
                            </span>
                        </label>
                        <input className="input input-bordered w-full max-w-xs" type="text" {...register("email", { required: "Email must Not be empty" })} />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className='label'>
                            <span className='label-text'>
                                Password
                            </span>
                        </label>
                        <input className="input input-bordered w-full max-w-xs" type="password" {...register("password", { required: 'Password is required', minLength: { value: 6, message: 'Password Must be 6 character or longer' } })} />
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                        <label className='label'>
                            <span className='label-text'>
                                Forget Password?
                            </span>
                        </label>
                    </div>
                    <input className='btn btn-accent w-full' value="Login" type="submit" />
                </form>
                <p>
                    New to Doctor's Portal? <Link className='text-secondary' to={"/signup"}>Create New Account</Link>
                </p>
                <div className="divider">OR</div>
                <button className='uppercase w-full btn btn-outline'>
                    Continue With GOOGLE
                </button>
            </div>
        </div>
    );
};

export default Login;