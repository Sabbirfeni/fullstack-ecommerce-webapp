import React, { useEffect, useState } from 'react'
import MyContext from './myContext'
import { toast } from 'react-toastify';
import { fireDB } from '../../firebase/FirebaseConfig';
import { AuthErrorCodes } from 'firebase/auth';
import { QuerySnapshot, Timestamp, addDoc, collection, deleteDoc, doc, getDoc, getDocs, onSnapshot, orderBy, query, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

function MyState(props) {

  const navigate = useNavigate();

  const [ mode, setMode ] = useState('light');
  const toggleMode = () => {
    if(mode == 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'rgb(17, 24, 39)'
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
    }
  }

  const [ loading, setLoading ] = useState(false);
  const [ mobileMenuOpen, setMobileMenuOpen ] = useState(false)

  const [ singleProduct, setSingleProduct ] = useState({
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

  const addProduct = async (e) => {
    e.preventDefault()
    if(singleProduct.title == '' || singleProduct.price == '' || singleProduct.imageUrl == '' || singleProduct.catergory == '' || singleProduct.description == '') {
      toast.error('All fields required!');
      return 
    }

    try {
      // setLoading(true)
      const allProductsRef = collection(fireDB, 'products');
      await addDoc(allProductsRef, singleProduct)
      toast.success('new allProducts added.')
      setTimeout(() => {
        navigate('/dashboard/all-products');
      }, 800)
      setLoading(false)
    } catch(err) {
      console.log(AuthErrorCodes)
      setLoading(false)
    }
  }

  const [ allProducts, setAllProducts ] = useState([])
  const getProductData = async () => {
    setLoading(true);
    try {
      const q = query(
        collection(fireDB, 'products'),
        orderBy('time')
      );

      const data = onSnapshot(q, (QuerySnapshot) => {
        let allProductsArray = []
        QuerySnapshot.forEach(doc => {
          
          allProductsArray.push({ ...doc.data(), productId: doc.id })
        })
        setAllProducts(allProductsArray)
        setLoading(false)
      });

      return () => data

    } catch(err) {
      console.log(err)
      setLoading(false)
    }
  }

  const editHandle = item => {
    setSingleProduct(item)
  }

  const updateProduct = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
      const docRef = doc(fireDB, 'singleProduct', singleProduct.allProductsId)
      await setDoc(docRef, singleProduct)
      toast.success('allProducts updated.')
      setTimeout(() => {
        navigate('/dashboard/all-singleProduct');
      }, 800)
      getProductData()
      setLoading(false)
    } catch(err) {
      console.log(err)
      setLoading(false)
    }
  }

  const deleteProduct = async item => {
    setLoading(true)
    try {
      const docRef = doc(fireDB, 'singleProduct', item.allProductsId)
      await deleteDoc(docRef)
      toast.info('allProducts deleted.')
      getProductData()
      setLoading(false)
    } catch(err) {
      console.log(err.message)
      setLoading(false)
    }
  }

  const [ orders, setOrders ] = useState([]);
  const getOrderData = async () => {
    setLoading(true)
    try {
      const orderRef = await getDocs(collection(fireDB, 'orders'))
      const orderArray = [];
      orderRef.forEach(doc => {
        orderArray.push({...doc.data(), orderId: doc.id})
        setLoading(false)
      })
      setOrders(orderArray)
      setLoading(false)
    } catch(err) {
      console.log(err)
      setLoading(false)
    }
  }

  const [ reviews, setReviews ] = useState([])
  const getReviews = async () => {
    try {
      const reviewRef = await getDocs(collection(fireDB, 'product-reviews'))
      const reviewArray = []
      reviewRef.forEach(doc => {
        reviewArray.push({ ...doc.data(), reviewId: doc.id })
      })
      setReviews(reviewArray)
    } catch(err) {
      console.log(err.message)
    }
  }


  const [ users, setUsers ] = useState([])
  const getUserData = async () => {
    setLoading(true)
    const usersArray = []
    try {
      const result = await getDocs(collection(fireDB, 'users'))
     
      result.forEach(doc => {
        usersArray.push(doc.data())
        setLoading(false)
      })
      setUsers(usersArray)
      setLoading(false)

    } catch(err) {
      console.log(err.message)
      setLoading(false)
    }
  }

  const [ searchKey, setSearchKey ] = useState('')
  const [ filterType, setFilterType ] = useState('')
  const [ filterPrice, setFilterPrice ] = useState('')

  useEffect(() => {
    getProductData()
    getUserData()
  }, [])

  useEffect(() => {
    getOrderData()
  }, [])

  useEffect(() => {
    getReviews()
  }, [])

  const values = { 
    mode, 
    toggleMode,
    mobileMenuOpen,
    setMobileMenuOpen,
    loading, 
    setLoading, 
    singleProduct, 
    setSingleProduct, 
    addProduct, 
    allProducts, 
    editHandle, 
    updateProduct, 
    deleteProduct, 
    orders,
    getOrderData,
    setOrders,
    users,
    getUserData,
    reviews,
    setReviews,
    getReviews,
    searchKey,
    filterType,
    filterPrice,
    setSearchKey,
    setFilterType,
    setFilterPrice
  }

  return (
    <MyContext.Provider value={values}>
        {props.children}
    </MyContext.Provider>
  )
}

export default MyState