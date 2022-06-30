import React from 'react';


const BillingRow = ({ billing, index }) => {

    const { _id, name, email, phone, paidAmount } = billing


    return (
        <tr>
            <th>{_id}</th>
            <td>{name}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>$ {paidAmount}</td>
            <td><>
                <button class="btn btn-xs mr-3">Edit</button>
                <button class="btn btn-xs btn-error">Delete</button>
            </></td>
        </tr>
    );
};

export default BillingRow;