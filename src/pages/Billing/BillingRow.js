import React from 'react';
import Loading from '../Shared/Loading';


const BillingRow = ({ billing, setBill }) => {

    const { _id, name, email, phone, paidAmount } = billing



    return (
        <tr>
            <th>{_id ? _id : <Loading></Loading>}</th>
            <td>{name}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>$ {paidAmount}</td>
            <td><>
                <button class="btn btn-xs mr-3">Edit</button>
                <label
                    for="delete-modal"
                    className="btn modal-button  btn-xs btn-error"
                    onClick={() => setBill(billing)}

                >Delete</label>
                {/* <button onClick={() => handleDelete(_id)} class="btn btn-xs btn-error">Delete</button> */}
            </></td>
        </tr>
    );
};

export default BillingRow;