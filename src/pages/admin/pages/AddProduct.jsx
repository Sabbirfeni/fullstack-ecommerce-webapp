import React, { useContext } from 'react'
import MyContext from '../../../context/data/myContext'

function AddProduct() {

    const context = useContext(MyContext);
    const { products, setProducts, addProduct, loading } = context;


    return (
        // <div>
        //     <div className=' flex justify-center items-center h-screen'>
        //         <div className=' bg-gray-800 px-10 py-10 rounded-xl '>
        //             <div className="">
        //                 <h1 className='text-center text-white text-xl mb-4 font-bold'>Add Product</h1>
        //             </div>
        //             <div>
        //                 <input type="text"
        //                     value={products.title}
        //                     onChange={e => setProducts({ ...products, title: e.target.value })}
        //                     name='title'
        //                     className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
        //                     placeholder='Product title'
        //                 />
        //             </div>
        //             <div>
        //                 <input type="text"
        //                     value={products.price}
        //                     onChange={e => setProducts({ ...products, price: e.target.value })}
        //                     name='price'
        //                     className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
        //                     placeholder='Product price'
        //                 />
        //             </div>
        //             <div>
        //                 <input type="text"
        //                     value={products.imageUrl}
        //                     onChange={e => setProducts({ ...products, imageUrl: e.target.value })}
        //                     name='imageurl'
        //                     className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
        //                     placeholder='Product imageUrl'
        //                 />
        //             </div>
        //             <div>
        //                 <input type="text"
        //                     value={products.catergory}
        //                     onChange={e => setProducts({ ...products, catergory: e.target.value })}
        //                     name='category'
        //                     className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
        //                     placeholder='Product category'
        //                 />
        //             </div>
        //             <div>
        //                <textarea cols="30" rows="10" name='title'
        //                     value={products.description}
        //                     onChange={e => setProducts({ ...products, description: e.target.value })}
        //                     className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
        //                     placeholder='Product description'>
        //                </textarea>
        //             </div>
        //             <div className=' flex justify-center mb-3'>
        //                 <button
        //                     onClick={addProduct}
        //                     className=' bg-yellow-500 w-full text-black font-bold  px-2 py-2 rounded-lg'>
        //                     { loading ? 'Adding Product': 'Add Product' }
        //                 </button>
        //             </div>
                 
        //         </div>
        //     </div>
        // </div>
        <div className='flex justify-center items-center'>
        <div className="form-container flex flex-col">
            <p className="title mb-5">Update product</p>
            <form className="sign-form">
                <div className="flex flex-col md:flex-row gap-2">
                    <input type="text"
                        value={products.title}
                        onChange={e => setProducts({ ...products, title: e.target.value })}
                        name='title'
                        className='input'
                        placeholder='Product title'
                    />
                    <input type="text"
                            value={products.price}
                            onChange={e => setProducts({ ...products, price: e.target.value })}
                            name='price'
                            className='input'
                            placeholder='Product price'
                    />
                </div>
                <div className="flex flex-col md:flex-row gap-2">
                    <input type="text"
                            value={products.imageUrl}
                            onChange={e => setProducts({ ...products, imageUrl: e.target.value })}
                            name='imageurl'
                            className='input'
                            placeholder='Product imageUrl'
                        />
                    <input type="text"
                            value={products.catergory}
                            onChange={e => setProducts({ ...products, catergory: e.target.value })}
                            name='category'
                            className=' input'
                            placeholder='Product category'
                        />
                </div>
                
                  <textarea cols="30" rows="5" name='title'
                        value={products.description}
                        onChange={e => setProducts({ ...products, description: e.target.value })}
                        className='input'
                        placeholder='Product description'>
                   </textarea>

                <button
                    onClick={addProduct}
                    disabled={loading}
                    className={`${loading && 'bg-gray-500 pointer-events-none'} form-btn`}>
                    {loading ? 'Loading...' : 'Update product'}
                </button>         
            </form>
        </div>
    </div>
    )
}

export default AddProduct