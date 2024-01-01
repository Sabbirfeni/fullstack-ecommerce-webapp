import React from 'react'
import { Link } from 'react-router-dom'
import { animate, motion } from "framer-motion"

function ProductReviewList() {
    const reviewText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"

    return (
    <div className='grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-3'>

        {/* Review */}
        <motion.div
            initial={{ opacity: 0, }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            className='bg-[#fff] flex flex-col sm:px-10 sm:py-8 p-4 rounded-md'>
            <div className='flex items-center'>
                <img src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1703808000&semt=ais" alt="" 
                    className='w-12 h-12 object-cover rounded-full'
                />
                <div className='ml-4'>
                    <p className='flex-2 lg:text-sm text-xs'>Sabbir</p>
                    <p className='flex-2 text-xs'>user</p>
                </div>
            </div>
            <p className='text-xs mt-4'>"{reviewText.length > 100 ? reviewText.slice(0, 100) + '...' : reviewText}"</p>
        </motion.div>
        <motion.div
            initial={{ opacity: 0, }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            className='bg-[#fff] flex flex-col sm:px-10 sm:py-8 p-4 rounded-md'>
            <div className='flex items-center'>
                <img src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1703808000&semt=ais" alt="" 
                    className='w-12 h-12 object-cover rounded-full'
                />
                <div className='ml-4'>
                    <p className='flex-2 lg:text-sm text-xs'>Sabbir</p>
                    <p className='flex-2 text-xs'>user</p>
                </div>
            </div>
            <p className='text-xs mt-4'>"{reviewText.length > 100 ? reviewText.slice(0, 100) + '...' : reviewText}"</p>
        </motion.div>
        <motion.div
            initial={{ opacity: 0, }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            className='bg-[#fff] flex flex-col sm:px-10 sm:py-8 p-4 rounded-md'>
            <div className='flex items-center'>
                <img src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1703808000&semt=ais" alt="" 
                    className='w-12 h-12 object-cover rounded-full'
                />
                <div className='ml-4'>
                    <p className='flex-2 lg:text-sm text-xs'>Sabbir</p>
                    <p className='flex-2 text-xs'>user</p>
                </div>
            </div>
            <p className='text-xs mt-4'>"{reviewText.length > 100 ? reviewText.slice(0, 100) + '...' : reviewText}"</p>
        </motion.div>
        <motion.div
            initial={{ opacity: 0, }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            className='bg-[#fff] flex flex-col sm:px-10 sm:py-8 p-4 rounded-md'>
            <div className='flex items-center'>
                <img src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1703808000&semt=ais" alt="" 
                    className='w-12 h-12 object-cover rounded-full'
                />
                <div className='ml-4'>
                    <p className='flex-2 lg:text-sm text-xs'>Sabbir</p>
                    <p className='flex-2 text-xs'>user</p>
                </div>
            </div>
            <p className='text-xs mt-4'>"{reviewText.length > 100 ? reviewText.slice(0, 100) + '...' : reviewText}"</p>
        </motion.div>
        <motion.div
            initial={{ opacity: 0, }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            className='bg-[#fff] flex flex-col sm:px-10 sm:py-8 p-4 rounded-md'>
            <div className='flex items-center'>
                <img src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1703808000&semt=ais" alt="" 
                    className='w-12 h-12 object-cover rounded-full'
                />
                <div className='ml-4'>
                    <p className='flex-2 lg:text-sm text-xs'>Sabbir</p>
                    <p className='flex-2 text-xs'>user</p>
                </div>
            </div>
            <p className='text-xs mt-4'>"{reviewText.length > 100 ? reviewText.slice(0, 100) + '...' : reviewText}"</p>
        </motion.div>
        <motion.div
            initial={{ opacity: 0, }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            className='bg-[#fff] flex flex-col sm:px-10 sm:py-8 p-4 rounded-md'>
            <div className='flex items-center'>
                <img src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1703808000&semt=ais" alt="" 
                    className='w-12 h-12 object-cover rounded-full'
                />
                <div className='ml-4'>
                    <p className='flex-2 lg:text-sm text-xs'>Sabbir</p>
                    <p className='flex-2 text-xs'>user</p>
                </div>
            </div>
            <p className='text-xs mt-4'>"{reviewText.length > 100 ? reviewText.slice(0, 100) + '...' : reviewText}"</p>
        </motion.div>
        <motion.div
            initial={{ opacity: 0, }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            className='bg-[#fff] flex flex-col sm:px-10 sm:py-8 p-4 rounded-md'>
            <div className='flex items-center'>
                <img src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1703808000&semt=ais" alt="" 
                    className='w-12 h-12 object-cover rounded-full'
                />
                <div className='ml-4'>
                    <p className='flex-2 lg:text-sm text-xs'>Sabbir</p>
                    <p className='flex-2 text-xs'>user</p>
                </div>
            </div>
            <p className='text-xs mt-4'>"{reviewText.length > 100 ? reviewText.slice(0, 100) + '...' : reviewText}"</p>
        </motion.div>
        <motion.div
            initial={{ opacity: 0, }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            className='bg-[#fff] flex flex-col sm:px-10 sm:py-8 p-4 rounded-md'>
            <div className='flex items-center'>
                <img src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1703808000&semt=ais" alt="" 
                    className='w-12 h-12 object-cover rounded-full'
                />
                <div className='ml-4'>
                    <p className='flex-2 lg:text-sm text-xs'>Sabbir</p>
                    <p className='flex-2 text-xs'>user</p>
                </div>
            </div>
            <p className='text-xs mt-4'>"{reviewText.length > 100 ? reviewText.slice(0, 100) + '...' : reviewText}"</p>
        </motion.div>
    </div>
  )
}

export default ProductReviewList