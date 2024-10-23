import React, { useState } from 'react';
import Search from './../components/Search';
import { Link } from 'react-router-dom';
import Pagination from '../Pagination';
import { FaEdit, FaTrash, FaEye } from 'react-icons/fa';

const Products = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [searchValue, setSearchValue] = useState("")
    const [parPage, setParPage] = useState(5)

    return (
        <div className='px-2 lg:px-7 pt-5'>
            <h1 className='text-black font-semibold text-lg mb-3'>All Products</h1>

            <div className='w-full p-4 bg-[#6a5fdf] rounded-md'>
                <Search setParPage={setParPage} searchValue={searchValue} setSearchValue={setSearchValue}/>

                <div className='relative mt-5 overflow-x-auto'>
                            <table className='w-full text-sm text-left text-[#d0d2d6]'>
                                <thead className='text-sm text-[#d0d2d6] uppercase border-b border-slate-700'>
                                    <tr>
                                        <th scope='col' className='py-3 px-4'>No</th>
                                        <th scope='col' className='py-3 px-4'>Image</th>
                                        <th scope='col' className='py-3 px-4'>Name</th>
                                        <th scope='col' className='py-3 px-4'>Category</th>
                                        <th scope='col' className='py-3 px-4'>Brand</th>
                                        <th scope='col' className='py-3 px-4'>Price</th>
                                        <th scope='col' className='py-3 px-4'>Discount</th>
                                        <th scope='col' className='py-3 px-4'>Stock</th>
                                        <th scope='col' className='py-3 px-4'>Action</th>
                                    </tr>
                                </thead>
                                
                                <tbody>
                                    {
                                        [1, 2, 3, 4, 5].map((d, i) => <tr key={i}>
                                            <td className='py-1.5 px-4 font-medium whitespace-nowrap'>{d}</td>
                                            <td className='py-1.5 px-4 font-medium whitespace-nowrap'>
                                                <img 
                                                    className='w-[50px] h-[50px] rounded-md'
                                                    src={`http://localhost:3000/images/category/${d}.jpg`} 
                                                    alt="Category" />
                                            </td>
                                            <td className='py-1.5 px-4 font-medium whitespace-nowrap'>Wood Table</td>
                                            <td className='py-1.5 px-4 font-medium whitespace-nowrap'>Sports</td>
                                            <td className='py-1.5 px-4 font-medium whitespace-nowrap'>Anh Thu</td>
                                            <td className='py-1.5 px-4 font-medium whitespace-nowrap'>$999</td>
                                            <td className='py-1.5 px-4 font-medium whitespace-nowrap'>20%</td>
                                            <td className='py-1.5 px-4 font-medium whitespace-nowrap'>99</td>
                                            <td className='py-1.5 px-4 font-medium whitespace-nowrap'>
                                                <div className='flex justify-start items-center gap-4'>
                                                    <Link to={'/admin/edit-product/32'} className='p-[6px] bg-yellow-500 rounded hover:shadow-md hover:shadow-green-500/50'>
                                                        <FaEdit />
                                                    </Link>

                                                    <Link className='p-[6px] bg-green-500 rounded hover:shadow-md hover:shadow-green-500/50'>
                                                        <FaEye />
                                                    </Link>

                                                    <Link className='p-[6px] bg-red-500 rounded hover:shadow-md hover:shadow-green-500/50'>
                                                        <FaTrash />
                                                    </Link>
                                                </div>
                                            </td>
                                        </tr>)
                                    }
                                </tbody>
                            </table>

                            <div className='w-full flex justify-end mt-4 bottom-4 right-4'>
                                <Pagination 
                                    pageNumber={currentPage}
                                    setPageNumber={setCurrentPage}
                                    totalItem={50}
                                    parPage={parPage}
                                    showItem={3}
                                />
                            </div>
                        </div>
            </div>
        </div>
    );
};

export default Products;