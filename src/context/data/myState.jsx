import React, { useEffect, useState } from 'react'
import MyContext from './myContext'
import { toast } from 'react-toastify';
import { fireDB } from '../../firebase/FirebaseConfig';
import { AuthErrorCodes } from 'firebase/auth';
import { QuerySnapshot, Timestamp, addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, orderBy, query, setDoc } from 'firebase/firestore';
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

  const [ products, setProducts ] = useState({
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
    if(products.title == '' || products.price == '' || products.imageUrl == '' || products.catergory == '' || products.description == '') {
      toast.error('All fields required!');
      return 
    }

    try {
      setLoading(true)
      const productRef = collection(fireDB, 'products');
      await addDoc(productRef, products)
      toast.success('new product added.')
      setTimeout(() => {
        navigate('/dashboard/all-products');
      }, 800)
      getProductData()
      setLoading(false)
    } catch(err) {
      console.log(AuthErrorCodes)
      setLoading(false)
    }

  }

  const [ product, setProduct ] = useState([])

  const getProductData = async () => {
    setLoading(true);

    try {
      const q = query(
        collection(fireDB, 'products'),
        orderBy('time')
      );

      const data = onSnapshot(q, (QuerySnapshot) => {
        let productArray = []
        QuerySnapshot.forEach(doc => {
          productArray.push({ ...doc.data(), id: doc.id })
        })
        setProduct(productArray)
        setLoading(false)
      });

      return () => data

    } catch(err) {
      console.log(err)
      setLoading(false)
    }
  }

  const editHandle = item => {
    setProducts(item)
  }

  const updateProduct = async (e) => {
    e.preventDefault()

    try {
      setLoading(true)
      const docRef = doc(fireDB, 'products', products.id)
      await setDoc(docRef, products)
      toast.success('product updated.')
      setTimeout(() => {
        navigate('/dashboard/all-products');
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
      const docRef = doc(fireDB, 'products', item.id)
      await deleteDoc(docRef)
      toast.info('product deleted.')
      getProductData()
      setLoading(false)
    } catch(err) {
      console.log(err)
      setLoading(false)
    }
  }

  const [ orders, setOrders ] = useState([]);

  const getOrderData = async () => {
    setLoading(true)
    try {
      const result = await getDocs(collection(fireDB, 'orders'))
      const orderArray = [];
      result.forEach(doc => {
        orderArray.push(doc.data())
        setLoading(false)
      })
      setOrders(orderArray)
      setLoading(false)
    } catch(err) {
      console.log(err)
      setLoading(false)
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

  const values = { 
    mode, 
    toggleMode,
    mobileMenuOpen,
    setMobileMenuOpen,
    loading, 
    setLoading, 
    products, 
    setProducts, 
    addProduct, 
    product, 
    editHandle, 
    updateProduct, 
    deleteProduct, 
    orders, 
    setOrders,
    users,
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