import React, { useContext, useEffect, useState } from 'react'
import myContext from '../../context/data/myContext';
import Layout from '../../components/layout/Layout';
import Modal from '../../components/modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFromCart } from '../../redux/cartSlice';
import { toast } from 'react-toastify';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { fireDB } from '../../firebase/FirebaseConfig';
import { useNavigate } from 'react-router-dom';
import './cart.css'


function Cart() {
  // cart
  const context = useContext(myContext)
  const { mode, setOrders, setLoading } = context;
  const cartItem = useSelector(state => state.cart)
  const user = JSON.parse(localStorage.getItem('user')) 
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const descriptionTest = 'description description description description description description description description description description description description description description description ' 
  // All the values of fakepay form (order form)
  const [ addressInfo, setAddressInfo ] = useState({
    fullName: '',
    address: '',
    cardNo: '',
    cardExpDate: '',
    code: ''
  })


  const fakePayOnChange = e => {
    setAddressInfo(state => ({ ...state, [e.target.name]: e.target.value }))
  }

  

  const handleBuy = async e => {

    const { fullName, address, cardNo, cardExpDate, code } = addressInfo
    e.preventDefault()

    if(fullName == '' && address == '' && cardNo == '' && cardExpDate == '' && code == '') {
      toast.info('please enter all field')
      return
    }

    const userid = JSON.parse(localStorage.getItem('user')).user.uid
    const userInfoWithOrder = {
      orderItem: cartItem,
      addressInfo,
      date: new Date().toLocaleString("en-US", {
        month: 'short',
        day: '2-digit',
        year: 'numeric'
      }),
      email: JSON.parse(localStorage.getItem('user')).user.email,
      userid,
      paymentId: userid.slice(0, 8)
    }

    try {
      const docRef = collection(fireDB, 'orders')
      await addDoc(docRef, userInfoWithOrder)

      const orders = await getDocs(collection(fireDB, 'orders'))
      const orderArray = [];
      orders.forEach(doc => {
        orderArray.push(doc.data())
        setLoading(false)
      })
      setOrders(orderArray)
      navigate('/order')
      toast.success('order completed!')
    } catch(err) {
      console.log(err)
    }
  }

  const deleteCart = item => {
    dispatch(deleteFromCart(item))
    toast.info('product deleted from cart.')
  }

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItem))
  }, [cartItem])

  const [ totalAmount, setTotalAmount ] = useState(0)
  let shipping = totalAmount == 0 ? 0 : 100;
  let groundTotal = shipping + totalAmount
  useEffect(() => {
    let temp = 0
    cartItem.forEach(item => {
      temp += parseInt(item.price)
    })
    setTotalAmount(temp)

  }, [cartItem])

  useEffect(() => {
    // scroll to top on page load
    window.scrollTo({top: 0, left: 0});
  }, []);

  return (
    <>
    {cartItem.length > 0 ? (
      <div className='flex justify-between w-full flex-col lg:flex-row gap-2 md:gap-3'>
        <div className='cart-item-container w-full lg:w-2/3 grid xl:grid-cols-2 grid-cols-1 gap-2 md:gap-3'>
          {cartItem.map((item, index) => {
            const { title, description, price, imageUrl } = item
            
            return (

                <div key={`${title}-${index}`} className='cart-item bg-[#fff] w-full flex rounded-md overflow-hidden'>
                    <img src={imageUrl} alt="product-image" className="w-28 lg:w-40 object-cover" />
                    <div className="flex w-full justify-between px-3 py-4">
                      <div className="">
                        <h2 className="text-md font-bold " style={{ color: mode === 'dark' ? 'white' : '' }}>{title}</h2>
                        <h2 className="text-xs md:text-sm my-2" style={{ color: mode === 'dark' ? 'white' : '' }}>{description.length > 50 ? description.slice(0, 50) : description}</h2>
                        <h2 className="text-md font-bold mt-2" style={{ color: mode === 'dark' ? 'white' : '' }}>$ {price}</h2>
                      </div>
                      <div onClick={() => deleteCart(item)} className="flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                        </svg>
                      </div>
                    </div>
                </div>
        
            
            )
          })}
        </div>
        <div className='price-calculator bg-[#fff] w-full h-[fit-content] lg:w-1/3 px-5 py-4 rounded-md'>
          <div className='subtotal flex items-center justify-between'>
            <p>Subtotal</p>
            <p>$ {totalAmount}</p>
          </div>
          <div className='shipping flex items-center justify-between my-3'>
            <p>Shipping</p>
            <p>$ {shipping}</p>
          </div>
          <div className='border border-[#e7e7e7] my-4'></div>
          <div className='shipping flex items-center justify-between my-3'>
            <p className='font-bold'>Total</p>
            <p className='font-bold'>$ {groundTotal}</p>
          </div>
          
          <Modal orderInfo={addressInfo} handleOnChange={fakePayOnChange} handleBuy={handleBuy} />
        </div>
        
      </div>
      
    ) :
    <div className='text-center'>No cart</div>}

    </>

  )
}

export default Cart