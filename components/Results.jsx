import Router from 'next/router'
import React from 'react'
import {AiFillCheckCircle}from 'react-icons/ai'
import {HiDownload}from 'react-icons/hi'
import { useStateContext } from '../context/StateContext'
const Results = ({id,data}) => {
    const{setUserId,setPhotoId,setHide}=useStateContext()
    const userpage=(id)=>{
        setUserId(id)
        Router.push(`/user/${id}`)
        setHide(true)
    }
  return (
    <div key={id} className='relative group mb-10 sm:mb-0 duration-500 ease-in transition-all' >
        <div className="flex items-center justify-between w-[90%] mx-auto mb-3 sm:absolute sm:top-3 sm:w-full  sm:text-white sm:hidden sm:group-hover:flex sm:px-3 z-10 ">
            <div className="flex items-center gap-3 ">
                <img src={data.user.profile_image.medium} className='h-8 w-8 rounded-full cursor-pointer' onClick={()=>userpage(data.user.username)} />
                <div className="flex flex-col items-start">
                    <p className='font-semibold text-sm cursor-pointer'onClick={()=>userpage(data.user.username)} >{data.user.name}</p>
                    {data.user.for_hire?<p className='text-xs flex items-center gap-2'>Avaialable for hire <AiFillCheckCircle/></p>:''}
                </div>
            </div>
            <a href={data.links.download} target='_blank' download='image.jpg' className='bg-gray-500 w-10 h-10 rounded-md flex items-center justify-center'><HiDownload className=' text-white' /></a>
        </div>
        <img src={data.urls.regular} alt="" className='w-full mb-5 rounded-xl filter sm:group-hover:brightness-50 ' onClick={()=>setPhotoId(data.id)} />
    </div>
  )
}

export default Results