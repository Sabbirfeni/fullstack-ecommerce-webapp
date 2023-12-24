import React, { useContext } from 'react'
import { HiOutlineUsers } from "react-icons/hi2";
import { BsCartCheck } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";

import './overview.css'
import MyContext from '../../../../context/data/myContext';
import { Link } from 'react-router-dom';
import DataTable from '../../../../components/table/DataTable';

function Overview() {
    const context = useContext(MyContext)
    const { mode, product, deleteProduct, editHandle, orders, users } = context
    const totalOrders = []
    orders.map(order => order.orderItem.map(item => {
        totalOrders.push(item)
    }))
  return (
    <div className='flex flex-col md:gap-3 gap-2'>
        <div className="overview-cards-container flex md:flex-row flex-col md:gap-3 gap-2">
            <div className="overview-card bg-[#fff] flex flex-col flex-1 p-4 space-y-12 border rounded-md">
                <div className='flex items-center justify-between lg:text-3xl text-2xl'>
                    <h3>{users.length}</h3>
                    <div><HiOutlineUsers/></div>
                </div>
                <h3 className='text-xl'>Total users</h3>
            </div>
            <div className="overview-card bg-[#fff] flex flex-col flex-1 p-4 space-y-12 border rounded-md">
                <div className='flex items-center justify-between lg:text-3xl text-2xl'>
                    <h3>{product.length}</h3>
                    <div><BsCartCheck/></div>
                </div>
                <h3 className='text-xl'>Total products</h3>
            </div>
            <div className="overview-card bg-[#fff] flex flex-col flex-1 p-4 space-y-12 border rounded-md">
                <div className='flex items-center justify-between lg:text-3xl text-2xl'>
                    <h3>{totalOrders.length}</h3>
                    <div><TbTruckDelivery/></div>
                </div>
                <h3 className='text-xl'>Total orders</h3>
            </div>
        </div>

        <DataTable title='Latest products' shortTable={true} link='/dashboard/all-products'>
            <div class="data-table relative overflow-x-auto rounded-md">
                <table class="w-full text-sm text-left rtl:text-right">
                    <thead class="text-xs uppercase">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                S.No
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Image
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Title
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Category
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Date
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    {product.slice(0, 5).map((item, index) => {

                        const { title, price, imageUrl, catergory, description, time, date } = item;
                
                            return (
                                <tr key={`${time}`} class="bg-white border-b ">
                                    <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap ">
                                    {index + 1}
                                    </th>
                                    <td class="px-6 py-4">
                                        <img className='w-16' src={imageUrl} alt="img" />
                                    </td>
                                    <td class="px-6 py-4">
                                    {title}
                                    </td>
                                    <td class="px-6 py-4">
                                    {price}/-
                                    </td>
                                    <td class="px-6 py-4">
                                    { catergory }
                                    </td>
                                    <td class="px-6 py-4">
                                    { date }
                                    </td>
                                    <td class="px-6 py-4">
                                    <div className=" flex gap-2">
                                            <div className=" flex gap-2 cursor-pointer text-black " style={{ color: mode === 'dark' ? 'white' : '' }}>
                                                <div onClick={() => deleteProduct(item)} >
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                    </svg>
                                                </div>
                                                <Link to={'/dashboard/updateproduct'}>
                                                    <div onClick={() => editHandle(item)}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                                        </svg>
                                                    </div>
                                                </Link>
                                                
                                            </div>
                                        </div>
                                    </td>
                                </tr>  
                            )
                        })}
                        
                    </tbody>
                </table>
            </div>  
        </DataTable>




    </div>
  )
}

export default Overview