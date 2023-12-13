import React, { useContext } from 'react'
import MyContext from '../../context/data/myContext'
// import { Select, Option } from "@material-tailwind/react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { purple } from '@mui/material/colors';

function Filter() {

    const context = useContext(MyContext)
    const { mode, product, searchKey, filterType, filterPrice, setSearchKey, setFilterType, setFilterPrice } = context

    const resetFilters = () => {
        setFilterType('')
        setFilterPrice('')
    }

    return (
        <div className='my-8'>
            <div className="flex">
                <div className='filter-options flex-1 flex items-center gap-5'>
                    <p className='border border-slate-200 text-[#000] px-5 py-2 rounded-sm'>Filters</p>
                    <FormControl sx={{ width: '150px' }}>
                        <InputLabel id="catergory" color='secondary' size='small' sx={{ fontSize: '14px' }}>Catergory</InputLabel>
                        <Select
                            labelId="catergory"
                            id="catergory"
                            value={filterType}
                            label="Catergory"
                            onChange={e => setFilterType(e.target.value)}
                            color='secondary'
                            size='small'
                            sx={{ fontSize: '14px', padding: '1px 0px', }}
                            MenuProps={{
                                disableScrollLock: true,
                              }}
                        >
                            {product.map((item, index) => {
                                return <MenuItem key={index} value={item.catergory} sx={{ fontSize: '14px' }}>{item.catergory}</MenuItem>
                            })}
                            
                        </Select>
                    </FormControl>
                    <FormControl sx={{ width: '150px' }}>
                        <InputLabel id="budget" color='secondary' size='small' sx={{ fontSize: '14px' }}>Budget</InputLabel>
                        <Select
                            labelId="budget"
                            id="budget"
                            value={filterPrice}
                            label="Budget"
                            onChange={e => setFilterPrice(Number(e.target.value))}
                            color='secondary'
                            size='small'
                            sx={{ fontSize: '14px', padding: '1px 0px' }}
                            MenuProps={{
                                disableScrollLock: true,
                              }}
                        >
                            <MenuItem value='1000' sx={{ fontSize: '14px' }}>1,000</MenuItem>
                            <MenuItem value='5000' sx={{ fontSize: '14px' }}>5,000</MenuItem>
                            <MenuItem value='10000' sx={{ fontSize: '14px' }}>10,000</MenuItem>
                            <MenuItem value='20000' sx={{ fontSize: '14px' }}>20,000</MenuItem>
                            <MenuItem value='30000' sx={{ fontSize: '14px' }}>30,000</MenuItem>
                            <MenuItem value='50000' sx={{ fontSize: '14px' }}>50,000</MenuItem>
                            
                        </Select>
                    </FormControl>
                </div>
                <div className='reset-filter flex-1 flex items-center justify-end'>
                    <button onClick={resetFilters} className='bg-slate-200 text-[#000] px-4 py-2 rounded-sm'>Reset filters</button>
                </div>
            </div>
        </div>
    )
}

export default Filter