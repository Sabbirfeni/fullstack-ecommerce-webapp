// import React from 'react'

// function TotalOrders() {
//   return (
//     <div>TotalOrders</div>
//   )
// }

// export default TotalOrders

import React, { useContext } from 'react'
import MyContext from '../../../context/data/myContext';
import DataTable from '../../../components/table/DataTable';
import { Link } from 'react-router-dom';

function TotalOrders() {
  const context = useContext(MyContext)
  const { mode, product, deleteProduct, editHandle, orders, users } = context

  let orderSerial = 0;

  return (
    <DataTable title='All user'>
    <div className="data-table relative overflow-x-auto rounded-md">
        <table className="w-full text-sm text-left rtl:text-right">
            <thead className="text-xs uppercase">
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
                    Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Address
                </th>
                <th scope="col" className="px-6 py-3">
                    Email
                </th>
                <th scope="col" className="px-6 py-3">
                    Date
                </th>
              </tr>
            </thead>

            {orders.map((order, index, arr) => {
                  
                const { addressInfo, date, email, orderItem } = order
                const { fullName, address } = addressInfo
                return (
                    <tbody key={index}>
                        {orderItem.map((item, orderIndex) => {
                            orderSerial += 1
                            const { title, price, catergory, imageUrl } = item
                            return (

                                <tr key={`${orderIndex}`} className="bg-white border-b ">
                                  <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap ">
                                    {orderSerial}
                                  </th>
                                  <td className="px-6 py-4">
                                    <img className='w-16' src={imageUrl} alt="img" />
                                  </td>
                                  <td className="px-6 py-4">
                                  {title}
                                  </td>
                                  <td className="px-6 py-4">
                                  ₹{price}
                                  </td>
                                  <td className="px-6 py-4">
                                  {catergory}
                                  </td>
                                  <td className="px-6 py-4">
                                  {fullName}
                                  </td>
                                  <td className="px-6 py-4">
                                  {address}
                                  </td>
                                  <td className="px-6 py-4">
                                  {email}
                                  </td>
                                  <td className="px-6 py-4">
                                  {date}
                                  </td>
                                </tr>  )
                                // <tr key={index} className="bg-gray-50 border-b  dark:border-gray-700" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }} >
                                    
                                //     <th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">
                                //         <img className='w-16' src={imageUrl} alt="img" />
                                //     </th>
                                //     <td className="px-6 py-4 text-black " style={{ color: mode === 'dark' ? 'white' : '' }}>
                                //         {title}
                                //     </td>
                                //     <td className="px-6 py-4 text-black " style={{ color: mode === 'dark' ? 'white' : '' }}>
                                //         ₹{price}
                                //     </td>
                                //     <td className="px-6 py-4 text-black " style={{ color: mode === 'dark' ? 'white' : '' }}>
                                //         {catergory}
                                //     </td>
                                
                                //     <td className="px-6 py-4 text-black " style={{ color: mode === 'dark' ? 'white' : '' }}>
                                //         {fullName}
                                //     </td>
                                //     <td className="px-6 py-4 text-black " style={{ color: mode === 'dark' ? 'white' : '' }}>
                                //         {address}
                                //     </td>
                                //     <td className="px-6 py-4 text-black " style={{ color: mode === 'dark' ? 'white' : '' }}>
                                //         {email}
                                //     </td>
                                //     <td className="px-6 py-4 text-black " style={{ color: mode === 'dark' ? 'white' : '' }}>
                                //         {date}
                                //     </td>
                                // </tr>)
                        })}
                    </tbody>
                )
            })}
        </table>
    </div>  
</DataTable>
  )
}

export default TotalOrders