import React from 'react'
import { Link } from 'react-router-dom'
import './dataTable.css'

function DataTable({ title, link, shortTable, limit, children }) {
  return (
    <div className='flex flex-col md:gap-3 gap-2 '>
        <div className="table-title flex items-center justify-between">
            <h3>{ title }</h3>
            { shortTable && <Link to={link} className='text-sm'>See all</Link> }
        </div>
        {children}
    </div>
  )
}

export default DataTable