import React from 'react';

const DeleteModal = ({ bill, setBill, refetch }) => {

    const handleDelete = (id) => {
        fetch(`https://remembrance-toonie-89591.herokuapp.com/delete-bill/${id}`, {
            method: "DELETE",
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                setBill(null)
                refetch()
                console.log(data);
            })
    }

    return (
        <div>
            <input type="checkbox" id="delete-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <label htmlFor="delete-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">Are you sure to delete this bill?</h3>
                    <p className="py-4">Name: {bill?.name}</p>
                    <p className="py-4">Email: {bill?.email}</p>
                    <div className="modal-action">
                        <label for="my-modal" className="btn" onClick={() => handleDelete(bill?._id)}>Confirm</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;