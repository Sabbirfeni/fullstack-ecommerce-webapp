import React, { useContext } from 'react'
import MyContext from '../../../context/data/myContext'

function UpdateProduct() {
    const context = useContext(MyContext)
    const { products, setProducts, updateProduct, loading } = context

    return (

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
                        onClick={updateProduct}
                        disabled={loading}
                        className={`${loading && 'bg-gray-500 pointer-events-none'} form-btn`}>
                        {loading ? 'Loading...' : 'Update product'}
                    </button>         
                </form>
            </div>
        </div>

    )
}

export default UpdateProduct