import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import useToken from '../../hooks/useToken';


const Login = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState([])
    const [token] = useToken(user)
    console.log(token);

    const { register, getValues, formState: { errors }, handleSubmit } = useForm();
    let signInError
    const onSubmit = data => {
        fetch('https://remembrance-toonie-89591.herokuapp.com/login', {
            method: "GET",
        })
            .then(res => res.json())
            .then(users => {
                const foundedUser = users.find(user => user.email == data.email && user.password == data.password)
                if (foundedUser) {
                    setUser(foundedUser)
                    if (token) {
                        toast.success("Login Successful", { id: "Sajid" })
                        navigate('/')
                    }

                } else {
                    toast.error("Invalid User", { id: "Sajid" })
                }

            })
    };




    return (
        <div className='flex justify-center items-center h-screen'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Email is required"
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: "Provide a valid email"
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' &&
                                    <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' &&
                                    <span className="label-text-alt text-red-500">{errors.email.message}</span>}

                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: "Password is required"
                                    },
                                    minLength: {
                                        value: 6,
                                        message: "Must be 6 characters or longer"
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' &&
                                    <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' &&
                                    <span className="label-text-alt text-red-500">{errors.password.message}</span>}

                            </label>
                        </div>
                        {signInError}
                        <input className='btn w-full max-w-xs' type="submit" value="Login" />
                    </form>
                    <p><small>New to Power Tools? <Link className='text-green-600' to='/signup'>Create New Account</Link></small></p>

                </div>
            </div>
        </div>
    );
};

export default Login;