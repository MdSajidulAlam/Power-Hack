import React, { useState } from 'react';
import { useQuery } from "react-query"
import Loading from '../Shared/Loading';
import AddNewBill from './AddNewBill';
import BillingRow from './BillingRow';
import DeleteModal from './DeleteModal';
import Pagination from './Pagination';

const Billing = () => {

    const [bill, setBill] = useState(null)

    const [currentPage, setCurrentPage] = useState(1)
    const [billingPerPage, setPostPerPage] = useState(10)
    const [searchData, setSearchData] = useState('')

    const { data: billings, isLoading, refetch } = useQuery('alltools', () => fetch('http://localhost:5000/billing-list').then(res => res.json()))

    if (isLoading) {
        return <Loading />
    }

    function reverse(billings) {
        return billings.map((item, idx) => billings[billings.length - 1 - idx])
    }
    const reversed = reverse(billings)

    const indexOfLastBilling = currentPage * billingPerPage
    const indexOfFirstBilling = indexOfLastBilling - billingPerPage
    const currentBillings = reversed.slice(indexOfFirstBilling, indexOfLastBilling)

    const paginate = pageNumber => setCurrentPage(pageNumber);


    return (
        <div className='mt-12'>
            <div className='flex justify-between items-center w-5/6 mx-auto bg-primary p-3 rounded-lg'>
                <div className='flex justify-center items-center'>
                    <h1 className='mr-5 font-semibold'>Billings</h1>
                    <input onChange={event => { setSearchData(event.target.value) }} type="text" placeholder="Search here" class="input w-full max-w-xs border-2 border-black" />
                </div>
                <label for="add-new-bill" class="btn modal-button">Add New Bill</label>
                {/* <button class="btn text-white">Add New Bill</button> */}
            </div>
            <div class="overflow-x-auto mt-8">
                <table class="table w-5/6 mx-auto ">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th className='border border-r-slate-700 rounded-none'>Billing ID</th>
                            <th className='border border-r-slate-700'>Full Name</th>
                            <th className='border border-r-slate-700'>Email</th>
                            <th className='border border-r-slate-700'>Phone</th>
                            <th className='border border-r-slate-700'>Paid Amount</th>
                            <th className=''>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}

                        {
                            currentBillings.filter((value) => {
                                if (searchData == '') {
                                    return value
                                }
                                else if (value.name.toLowerCase().includes(searchData.toLowerCase()) || value.email.toLowerCase().includes(searchData.toLowerCase()) || value.phone.includes(searchData)) {
                                    return value
                                }
                            }).map((billing, index) => <BillingRow key={billing._id}
                                billing={billing}
                                setBill={setBill}
                            ></BillingRow>)
                        }
                        <Pagination billingPerPage={billingPerPage} totalBillings={billings.length} paginate={paginate}></Pagination>
                        <AddNewBill refetch={refetch}></AddNewBill>
                        {bill && <DeleteModal bill={bill} setBill={setBill} refetch={refetch} />}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Billing;