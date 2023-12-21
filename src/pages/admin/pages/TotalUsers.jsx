import React, { useContext } from 'react'
import MyContext from '../../../context/data/myContext';
import DataTable from '../../../components/table/DataTable';
import { Link } from 'react-router-dom';

function TotalUsers() {
  const context = useContext(MyContext)
  const { mode, product, deleteProduct, editHandle, orders, users } = context
  return (
    
    <DataTable title='All user'>
    <div class="data-table relative overflow-x-auto rounded-md">
        <table class="w-full text-sm text-left rtl:text-right">
            <thead class="text-xs uppercase bg-[#ececec]">
            <tr>
                <th scope="col" className="px-6 py-3">
                    S.No
                </th>

                <th scope="col" className="px-6 py-3">
                    Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Email
                </th>
                <th scope="col" className="px-6 py-3">
                    UID
                </th>
            </tr>
            </thead>
            <tbody>
            {users.map((item, index) => {

              const { name, uid, email } = item
        
                    return (
                        <tr key={`${email}-${index}`} class="bg-white border-b ">
                            <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap ">
                            {index + 1}
                            </th>
                            <td class="px-6 py-4">
                                {name}
                            </td>
                            <td class="px-6 py-4">
                            {email}
                            </td>
                            <td class="px-6 py-4">
                            {uid}
                            </td>
                        </tr>  
                    )
                })}
                
            </tbody>
        </table>
    </div>  
</DataTable>
  )
}

export default TotalUsers