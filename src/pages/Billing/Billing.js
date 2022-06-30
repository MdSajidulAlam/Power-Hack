import React from 'react';

const Billing = () => {
    return (
        <div class="overflow-x-auto mt-12">
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

                    {/* <!-- row 2 --> */}
                    <tr>
                        <th>2</th>
                        <td>Hart Hagerty</td>
                        <td>Desktop Support Technician</td>
                        <td>Purple</td>
                    </tr>
                    {/* <!-- row 3 --> */}
                    <tr>
                        <th>3</th>
                        <td>Brice Swyre</td>
                        <td>Tax Accountant</td>
                        <td>Red</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Billing;