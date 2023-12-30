import React from 'react'

function OrderForm({ handleOnChange, handleSubmit, formData }) {
    const { fullName, address, phone, cardNo, cardExpDate, code } = formData
  return (
    <section className="">
    <div className="flex flex-col  justify-center mx-auto">
        
        <div className="w-full rounded-lg text-center md:mt-0 sm:max-w-md p-3 lg:p-5">
            <h1 className='text-xl font-bold mb-2 lg:mb-2'>FakePay</h1>
            <div className="space-y-4 md:space-y-6">
                
                <form className="space-y-2 text-left md:space-y-6" action="#">
                    <div>
                        <label htmlFor="name" className="block mb-1 lg:mb-2 text-xs lg:text-sm font-medium text-gray-900">Full Name</label>
                        <input  type="name" name="fullName" value={fullName} onChange={e => handleOnChange(e)} id="name" className=" border outline-0 border-gray-300 text-gray-900 text-xs lg:text-sm rounded-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2 lg:p-2.5 bg-gray-100" required />
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-1 lg:mb-2 text-sm font-medium text-gray-900">Full Address</label>
                        <input type="text" name="address" value={address} onChange={e => handleOnChange(e)} id="address" className=" border outline-0 border-gray-300 text-gray-900 text-xs lg:text-sm rounded-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2 lg:p-2.5 bg-gray-100" required />
                    </div>
                    <div>
                        <label htmlFor="phone" className="block mb-1 lg:mb-2 text-sm font-medium text-gray-900">Phone</label>
                        <input type="tel" name="phone" value={phone} placeholder="must be 11 digit" pattern="[0-9]{11}" onChange={e => handleOnChange(e)} className="border outline-0 border-gray-300 text-gray-900 text-xs lg:text-sm rounded-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2 lg:p-2.5 bg-gray-100" required />
                    </div>
                    <div>
                        <label htmlFor="pincode" className="block mb-1 lg:mb-2 text-sm font-medium text-gray-900">Card Number</label>
                        <input type="number" name="cardNo" value={cardNo} onChange={e => handleOnChange(e)} id="pincode" className=" border outline-0 border-gray-300 text-gray-900 text-xs lg:text-sm rounded-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2 lg:p-2.5 bg-gray-100" required />
                    </div>
                    <div>
                        <label htmlFor="mobileNumber" className="block mb-1 lg:mb-2 text-sm font-medium text-gray-900">Card Expire Date</label>
                        <input type="date" name="cardExpDate" value={cardExpDate} onChange={e => handleOnChange(e)} id="mobileNumber" className=" border outline-0 border-gray-300 text-gray-900 text-xs lg:text-sm rounded-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2 lg:p-2.5 bg-gray-100" required />
                    </div>
                    <div>
                        <label htmlFor="mobileNumber" className="block mb-1 lg:mb-2 text-sm font-medium text-gray-900">ZIP Code</label>
                        <input type="number" name="code" value={code} onChange={e => handleOnChange(e)} id="mobileNumber" className=" border outline-0 border-gray-300 text-gray-900 text-xs lg:text-sm rounded-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2 lg:p-2.5 bg-gray-100" required />
                    </div>

                </form>
                <button onClick={e => {
                    handleSubmit(e)
                }} type="submit" className='w-full bg-[#000] text-[#fff] py-2.5 text-sm rounded-sm mt-5'>Confirm order</button>
              </div>
        </div>
    </div>
    </section>
  )
}

export default OrderForm