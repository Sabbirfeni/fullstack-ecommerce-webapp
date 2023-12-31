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
    const { mode, allProducts, searchKey, filterType, filterPrice, setSearchKey, setFilterType, setFilterPrice } = context

    const resetFilters = () => {
        setFilterType('')
        setFilterPrice('')
    }

    return (
        <div className='mb-3 md:mb-5'>
            <div className="flex">
                <div className='filter-options flex-1 flex items-center gap-2 gap-md-5'>
                    {/* <p className='border border-slate-300 text-[#000] text-xs md:text-sm px-2 md:px-5 py-3 md:py-2.5 rounded-sm'>Filters</p> */}
                    <FormControl sx={{ width: { xs: '100px', md:'150px' } }}>
                        <InputLabel id="catergory" color='secondary' className='flex justify-center items-center' size='small' sx={{ fontSize: { xs: '13px', md: '14px'}, marginTop: '3px' }}>Catergory</InputLabel>
                        <Select
                            labelId="catergory"
                            id="catergory"
                            value={filterType}
                            label="Catergory"
                            onChange={e => setFilterType(e.target.value)}
                            color='secondary'
                            size='small'
                            sx={{ padding: { xs: '1px 0px', md: '2px 0px' }}}
                            MenuProps={{
                                disableScrollLock: true,
                              }}
                        >
                            {allProducts.map((item, index) => {
                                return <MenuItem key={index} value={item.catergory} sx={{ fontSize: '14px' }}>{item.catergory}</MenuItem>
                            })}
                            
                        </Select>
                    </FormControl>
                    <FormControl sx={{ width: { xs: '85px', md:'150px' } }}>
                        <InputLabel id="budget" color='secondary' size='small' sx={{ fontSize: { xs: '12px', md: '14px'}, marginTop: '3px'}}>Budget</InputLabel>
                        <Select
                            labelId="budget"
                            id="budget"
                            value={filterPrice}
                            label="Budget"
                            onChange={e => setFilterPrice(Number(e.target.value))}
                            color='secondary'
                            size='small'
                            sx={{ padding: { xs: '1px 0px', md: '2px 0px' }}}
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
                    <button onClick={resetFilters} className='border-none text-[#000] text-xs px-2 md:px-3 rounded-sm'>Reset</button>
                </div>
                {/* <div className='reset-filter flex-1 flex items-center justify-end'>
                   
                </div> */}
            </div>
        </div>
    )
}

export default Filter