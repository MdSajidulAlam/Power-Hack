import React, { useState } from 'react';
import Loading from '../Shared/Loading';
import AddNewBill from './AddNewBill';
import BillingForm from './BillingForm';
import toast from 'react-hot-toast';


const BillingRow = ({ billing, setBill, refetch }) => {

    const { _id, name, email, phone, paidAmount } = billing


    const onSubmit = async data => {
        const name = data.name
        const email = data.email
        const phone = data.phone
        const paidAmount = data.amount
        const billing = { name, email, phone, paidAmount }
        fetch(`https://remembrance-toonie-89591.herokuapp.com/update-bill/${_id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json',

            },
            body: JSON.stringify(billing)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                refetch()
                toast.success("Bill Updated Successfully", { id: "Sajid" })

            })
    };

    return (
        <tr>
            <th>{_id ? "Generated Billing Id" : <Loading></Loading>}</th>
            <td>{name}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>$ {paidAmount}</td>
            <td><>
                <label
                    for="bill-form"
                    class="btn modal-button btn-xs mr-3"
                >Edit</label>
                <label
                    for="bill-form"
                    className="btn modal-button btn-xs btn-error"
                    onClick={() => setBill(billing)}

                >Delete</label>
            </></td>
            <BillingForm onSubmit={onSubmit}></BillingForm>
        </tr>
    );
};

export default BillingRow;