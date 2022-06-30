import React from 'react';
import { useForm } from 'react-hook-form';

const AddNewBill = ({ refetch }) => {

    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const onSubmit = async data => {
        const name = data.name
        const email = data.email
        const phone = data.phone
        const paidAmount = data.amount
        const billing = { name, email, phone, paidAmount }
        console.log(billing);
        fetch('http://localhost:5000/add-billing', {
            method: "POST",
            headers: {
                'content-type': 'application/json',

            },
            body: JSON.stringify(billing)
        })
            .then(res => res.json())
            .then(data => {
                refetch()
                reset()

            })


    };

    let submitError
    return (
        <div>
            {/* <!-- The button to open modal --> */}


            {/* <!-- Put this part before </body> tag --> */}
            <input type="checkbox" id="add-new-bill" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box relative">
                    <label for="add-new-bill" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="text-lg font-bold">ADD A NEW BILL!</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: "Name is required"
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.name?.type === 'required' &&
                                    <span className="label-text-alt text-red-500">{errors.name.message}</span>}

                            </label>
                        </div>
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
                                <span className="label-text">Phone</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Phone Number"
                                className="input input-bordered w-full max-w-xs"
                                {...register("phone", {
                                    required: {
                                        value: true,
                                        message: "Phone is required"
                                    },
                                    minLength: {
                                        value: 11,
                                        message: "Must be 11 digit"
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.phone?.type === 'required' &&
                                    <span className="label-text-alt text-red-500">{errors.phone.message}</span>}
                                {errors.phone?.type === 'minLength' &&
                                    <span className="label-text-alt text-red-500">{errors.phone.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Paid Amount</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Paid Amount"
                                className="input input-bordered w-full max-w-xs"
                                {...register("amount", {
                                    required: {
                                        value: true,
                                        message: "Amount is required"
                                    },

                                })}
                            />
                            <label className="label">
                                {errors.amount?.type === 'required' &&
                                    <span className="label-text-alt text-red-500">{errors.amount.message}</span>}
                            </label>
                        </div>
                        {submitError}
                        <input className='btn w-full max-w-xs' type="submit" value="ADD A NEW BILL" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddNewBill;