import Link from 'next/link'
import React from 'react'
import { useStateContext } from '../context/StateContext'

const SearchFilters = () => {
    const{filterSelected,setFilterSelected,searchFilters}=useStateContext()
    const filterHandle=(title)=>{
        setFilterSelected(title)
    }
  return (
    <div className='flex items-center sm:w-[80%] w-[100%] mx-auto px-5 mb-2 h-7'>
        <div className="flex items-center justify-evenly w-full">
            {searchFilters.map((data,id)=>(
                <div  key={id} onClick={()=>filterHandle(data.title)} >
                    <Link href={data.route} ><div className={`flex items-center gap-2 cursor-pointer font-semibold ${filterSelected===data.title?'border-b-[3px] border-black':''}`}><data.icon/>{data.title}</div></Link>
                    </div>
            ))}
        </div>

    </div>
  )
}

export default SearchFilters