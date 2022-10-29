import Link from 'next/link'
import  Router, { useRouter }  from 'next/router'
import React from 'react'
import { useStateContext } from '../context/StateContext'

const QuickSearch = () => {
    const{quickSearch,selected,setSelected,setPage}=useStateContext()
    const handlesearch=(title)=>{
      setSelected(title)
      setPage(1)
    }
    // console.log(Router);

  return (
    <div className=' w-[90%] mx-auto  h-7 overflow-hidden'>
      <div className="flex items-center md:justify-evenly  justify-start gap-5 pb-2 overflow-x-scroll">
        {quickSearch.map((data,id)=>(
            <div className={`font-semibold cursor-pointer text-gray-500 ${selected===data.title ?'border-b-[3px] border-b-black ':''} `} key={id} onClick={()=>handlesearch(data.title)} >
              <Link href={data.route}>
                <p>{data.title}</p>
              </Link>
              </div>
        ))}
      </div>
    </div>
  )
} 

export default QuickSearch