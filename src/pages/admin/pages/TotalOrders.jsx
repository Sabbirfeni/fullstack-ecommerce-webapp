import React, { useContext, useEffect, useState } from 'react'
import MyContext from '../../../context/data/myContext';
import DataTable from '../../../components/table/DataTable';
import { Link } from 'react-router-dom';
import { QuerySnapshot, Timestamp, addDoc, collection, deleteDoc, doc, getDoc, getDocs, onSnapshot, orderBy, query, setDoc } from 'firebase/firestore';
import { fireDB } from '../../../firebase/FirebaseConfig';


function TotalOrders() {
  let orderSerial = 0;
  const context = useContext(MyContext)
  const { mode, product, deleteProduct, editHandle, orders, setOrders, getOrderData, users } = context
  const [ loading, setLoading ] = useState(false)

  const setOrderStatus = async (status, orderId) => {
    setLoading(true)
    try {
        const docRef = doc(fireDB, 'orders', orderId)
        const orderData = orders.find(item => item.orderId === orderId);
        await setDoc(docRef, {...orderData, orderStatus: status})
        const result = await getDocs(collection(fireDB, 'orders'))
        getOrderData()
        setLoading(false)
    } catch(err) {
        console.log(err)
        setLoading(false)
    }
  }

  useEffect(() => {
    getOrderData()
  }, [])


  return (
    <DataTable title='All user'>
    <div className="data-table relative overflow-x-auto rounded-md">
        <table className="w-full text-sm text-left rtl:text-right">
            <thead className="text-xs uppercase">
              <tr>
                <th scope="col" className="p-3">
                    S.No
                </th>
                <th scope="col" className="p-3">
                    Image
                </th>
                <th scope="col" className="p-3">
                    Title
                </th>
                <th scope="col" className="p-3">
                    Price
                </th>
                <th scope="col" className="p-3">
                    Name
                </th>
                <th scope="col" className="p-3">
                    Address
                </th>
                <th scope="col" className="p-3">
                    Phone
                </th>
                <th scope="col" className="p-3">
                    Date
                </th>
                <th scope="col" className="p-3">
                    Action
                </th>
              </tr>
            </thead>
            <tbody>
            {orders.map((order, index, arr) => {
                const { orderId, fullName, address, phone, date, orderStatus, email, title, price, imageUrl, productId } = order
                orderSerial += 1
                return (
                    <tr key={`${orderId}`} className="bg-white border-b ">
                        <td scope="row" className="px-4 font-medium whitespace-nowrap ">
                        {orderSerial}
                        </td>
                        <td className="p-3">
                        <img className='w-16 h-16 object-cover rounded-sm' src={imageUrl} alt="img" />
                        </td>
                        <td className="p-3">
                        {title}
                        </td>
                        <td className="p-3">
                        ₹{price}
                        </td>
                        <td className="p-3">
                        {fullName}
                        </td>
                        <td className="p-3">
                        {address}
                        </td>
                        <td className="p-3">
                        {phone}
                        </td>
                        <td className="p-3">
                        {date}
                        </td>
                        <td className="p-3">
                        <div className=" flex gap-2">
                                <div className=" flex gap-2 cursor-pointer text-black " style={{ color: mode === 'dark' ? 'white' : '' }}>
                                    {orderStatus == 'completed' ? null :
                                        <div onClick={() => setOrderStatus('delivering', orderId)} >
                                            <button className={`bg-[#000] text-[#fff] text-xs px-2 py-1 rounded-sm cursor-pointer ${loading ? 'cursor-none' : 'cursor-pointer'}`}>
                                                {orderStatus == 'delivering' && 'delivering'}
                                                {orderStatus == 'processing' && 'deliver'}
                                            </button>
                                        </div>
                                    }
                                    
                                   {orderStatus == 'delivering' || orderStatus == 'completed' ?
                                    <div onClick={() => setOrderStatus('completed', orderId)}>
                                        <button 
                                            className={`bg-[#000] text-[#fff] ${orderStatus == 'completed' ? 'bg-[#42ca30]' : 'bg-[#000]'} text-xs px-2 py-1 rounded-sm`}>
                                            {orderStatus == 'completed' ? 'completed' : 'Done'}
                                        </button>
                                    </div> :
                                    null
                                   }
                                </div>
                            </div>
                        </td>
                    </tr>  )
                    // <tr key={index} className="bg-gray-50 border-b  dark:border-gray-700" style={{ backgroundColor: mode === 'dark' ? 'rgb(36 49 55)' : '', color: mode === 'dark' ? 'white' : '', }} >
                        
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
        </table>
    </div>  
</DataTable>
  )
}

export default TotalOrders