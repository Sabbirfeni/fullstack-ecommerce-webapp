import React, { useContext } from 'react'
import MyContext from '../../context/data/myContext';

function ReviewForm({ handleOnChange, handleSubmit, value }) {
    const context = useContext(MyContext);
    const { loading } = context;
  return (

    <div className='flex justify-center items-center'>
        <div className="form-container h-[fit-content] flex flex-col">
            <p className="title mb-5">Share you experience</p>
            <form className="sign-form">
                <textarea cols="30" rows="5" name='title'
                    value={value}
                    onChange={(e) => handleOnChange(e.target.value)}
                    className='border border-[#b8b8b8] px-3 py-2 rounded-md placeholder:text-[#d3d3d3] outline-none'
                    placeholder='Product description'>
                </textarea>
                <button
                    type='submit'
                    onClick={e => handleSubmit(e)}
                    disabled={loading}
                    className={`${loading && 'bg-gray-500 pointer-events-none'} bg-[#000] text-[#fff] py-3 rounded-md`}>
                    {loading ? 'Loading...' : 'Add product'}
                </button>         
            </form>
        </div>
    </div>

  )
}

export default ReviewForm