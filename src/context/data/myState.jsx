import React, { useEffect, useState } from 'react'
import MyContext from './myContext'
import { toast } from 'react-toastify';
import { fireDB } from '../../firebase/FirebaseConfig';
import { AuthErrorCodes } from 'firebase/auth';
import { QuerySnapshot, Timestamp, addDoc, collection, deleteDoc, doc, onSnapshot, orderBy, query, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

function MyState(props) {
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

  const addProduct = async () => {
    console.log(products)
    if(products.title == null || products.price == null || products.imageUrl == null || products.catergory == null || products.description == null) {
      return toast.error('All fields required!');
    }

    setLoading(true)

    try {
      const productRef = collection(fireDB, 'products');
      await addDoc(productRef, products)
      toast.success('Product Added.')
      setTimeout(() => {
        window.location.href = '/dashboard'
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

  const updateProduct = async () => {
    setLoading(true)
    try {
      const docRef = doc(fireDB, 'products', products.id)
      await setDoc(docRef, products)
      toast.success('Product updated')
      setTimeout(() => {
        window.location.href = '/dashboard'
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
      toast.warning('Product deleted')
      getProductData()
      setLoading(false)
    } catch(err) {
      console.log(err)
      setLoading(false)
    }
  }

  useEffect(() => {
    getProductData()
  }, [])

  return (
    <MyContext.Provider value={{ mode, toggleMode, loading, setLoading, products, setProducts, addProduct, product, editHandle, updateProduct, deleteProduct }}>
        {props.children}
    </MyContext.Provider>
  )
}

export default MyState