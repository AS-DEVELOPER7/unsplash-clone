import React from 'react'
import { useStateContext } from '../context/StateContext'
const Pagination = () => {
    const {page,setPage}=useStateContext()
    const pages=[1,2,3,4,5,6,7,8,9,10]
  return (
    <div className='flex space-x-3 justify-evenly items-center mt-7 '>
<button onClick={()=>setPage((prevState)=>prevState-1)} disabled={page===1} className='bg-gray-800 rounded-2xl text-white px-3 py-2 shadow-lg font-medium'>Previous </button>
{pages.map((index)=>(
    <button key={index} onClick={()=>setPage(index)} className={`${page==index?'bg-gray-800 h-7 w-7 rounded-full text-white':' '} font-medium hidden md:inline`}>{index}</button>
))}
<button onClick={()=>setPage((prevState)=>prevState+1)}disabled={page===10} className='bg-gray-800 rounded-2xl text-white px-2 py-2 shadow-lg  font-medium'>Next Page</button>
    </div>
  )
}

export default Pagination