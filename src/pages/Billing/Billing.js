import React from 'react';
import { useQuery } from "react-query"
import Loading from '../Shared/Loading';
import BillingRow from './BillingRow';

const Billing = () => {

    const { data: billings, isLoading, refetch } = useQuery('alltools', () => fetch('http://localhost:5000/billing-list').then(res => res.json()))

    if (isLoading) {
        return <Loading />
    }

    return (
        <div className='mt-12'>
            <div className='flex justify-between items-center w-5/6 mx-auto bg-primary p-3 rounded-lg'>
                <div className='flex justify-center items-center'>
                    <h1 className='mr-5 font-semibold'>Billings</h1>
                    <input type="text" placeholder="Type here" class="input w-full max-w-xs border-2 border-black" />
                </div>
                <button class="btn">Button</button>
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
                            billings.map((billing, index) => <BillingRow key={billing._id}
                                billing={billing}
                                index={index}
                            ></BillingRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Billing;