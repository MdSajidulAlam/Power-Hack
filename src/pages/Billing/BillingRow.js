import React from 'react';
import Loading from '../Shared/Loading';
import AddNewBill from './AddNewBill';
import UpdateBill from './UpdateBill';


const BillingRow = ({ billing, setBill, refetch }) => {

    const { _id, name, email, phone, paidAmount } = billing



    return (
        <tr>
            <th>{_id ? "Generated Billing Id" : <Loading></Loading>}</th>
            <td>{name}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>$ {paidAmount}</td>
            <td><>
                <label
                    for="update-bill"
                    class="btn modal-button btn-xs mr-3"

                >Edit</label>
                <label
                    for="delete-modal"
                    className="btn modal-button  btn-xs btn-error"
                    onClick={() => setBill(billing)}

                >Delete</label>
            </></td>
            <AddNewBill ></AddNewBill>
            <UpdateBill _id={_id} refetch={refetch}></UpdateBill>
        </tr>
    );
};

export default BillingRow;