import React, { useContext, useEffect } from 'react'
import MyContext from '../../../context/data/myContext'
import { Timestamp } from 'firebase/firestore';

function AddProduct() {

    const context = useContext(MyContext);
    const { singleProduct, setSingleProduct, addProduct, loading } = context;

    useEffect(() => {
        setSingleProduct({
            title: '',
            price: '',
            imageUrl: '',
            catergory: '',
            description: '',
            time: Timestamp.now(),
            date: new Date().toLocaleString('en-US', {
              month: 'short',
              day: '2-digit',
              year: 'numeric'
            })
          })
    }, [])

    return (

    <div className='flex justify-center items-center'>
        <div className="form-container flex flex-col">
            <p className="title mb-5">Add new product</p>
            <form className="sign-form">
                <div className="flex flex-col md:flex-row gap-2">
                    <input type="text"
                        value={singleProduct.title}
                        onChange={e => setSingleProduct({ ...singleProduct, title: e.target.value })}
                        name='title'
                        className='border border-[#b8b8b8] px-3 py-2 rounded-md placeholder:text-[#d3d3d3] outline-none'
                        placeholder='Product title'
                    />
                    <input type="text"
                            value={singleProduct.price}
                            onChange={e => setSingleProduct({ ...singleProduct, price: e.target.value })}
                            name='price'
                            className='border border-[#b8b8b8] px-3 py-2 rounded-md placeholder:text-[#d3d3d3] outline-none'
                            placeholder='Product price'
                    />
                </div>
                <div className="flex flex-col md:flex-row gap-2">
                    <input type="text"
                            value={singleProduct.imageUrl}
                            onChange={e => setSingleProduct({ ...singleProduct, imageUrl: e.target.value })}
                            name='imageurl'
                            className='border border-[#b8b8b8] px-3 py-2 rounded-md placeholder:text-[#d3d3d3] outline-none'
                            placeholder='Product imageUrl'
                        />
                    <input type="text"
                            value={singleProduct.catergory}
                            onChange={e => setSingleProduct({ ...singleProduct, catergory: e.target.value })}
                            name='category'
                            className='border border-[#b8b8b8] px-3 py-2 rounded-md placeholder:text-[#d3d3d3] outline-none'
                            placeholder='Product category'
                        />
                </div>
                
                  <textarea cols="30" rows="5" name='title'
                        value={singleProduct.description}
                        onChange={e => setSingleProduct({ ...singleProduct, description: e.target.value })}
                        className='border border-[#b8b8b8] px-3 py-2 rounded-md placeholder:text-[#d3d3d3] outline-none'
                        placeholder='Product description'>
                   </textarea>

                <button
                    type='submit'
                    onClick={addProduct}
                    disabled={loading}
                    className={`${loading && 'bg-gray-500 pointer-events-none'} bg-[#000] text-[#fff] py-3 rounded-md`}>
                    {loading ? 'Loading...' : 'Add product'}
                </button>         
            </form>
        </div>
    </div>
    )
}

export default AddProduct