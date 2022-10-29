import React,{useEffect} from 'react'
import {FaUnsplash}from 'react-icons/fa'
import {BiSearchAlt}from 'react-icons/bi'
import { useStateContext } from '../context/StateContext'
import  Router, { useRouter } from 'next/router'
import { homedir } from 'os'
const Nav = () => {
  const{search,setSearch,setSearched,setPage,setSearchPage,setChange,setHide}=useStateContext()
  const handlesearch=()=>{
    setSearched(search)
    Router.push(`/search/photos/${search}`)
    setPage(1)
    setSearchPage(1)
    setChange(false)
    setHide(false)
  }
  const home=()=>{
    Router.push('/')
    setChange(true)
    setHide(false)
  }
  return (
    <div className='flex items-center p-4 '>
      <button className=" "  onClick={()=>home()}>
        <FaUnsplash className='h-7 w-7'/>
      </button>
      <div className="flex items-center mx-auto w-[70%] md:w-[50%] text-base md:text-lg text-white bg-gray-300 px-2  rounded-full">
        <input type='text' placeholder='Search free photos' value={search} onChange={(e)=>setSearch(e.target.value)} className='w-full bg-transparent placeholder:text-white pl-2 py-1 outline-none' />
        <button  onClick={()=>handlesearch()}>
          <BiSearchAlt className='w-5 h-5'/>
        </button>
      </div>
    </div>
  )
}

export default Nav