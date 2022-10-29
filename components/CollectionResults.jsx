import Router from 'next/router'
import React from 'react'
import { useStateContext } from '../context/StateContext'
const CollectionResults = ({data,id}) => {
    const {setCollectionId,setHide}=useStateContext()
    const handleCollection=(id,title)=>{
        setCollectionId(id)
        Router.push(`/collection/${title}`)
        setHide(true)
    }
  return (
    <div className='flex flex-col items-start gap-2  cursor-pointer'onClick={()=>handleCollection(data.id,data.title)}>
        <div className="h-[35vh] w-full grid  grid-cols-2 gap-x-1 gap-y-1 grid-rows-2  rounded-2xl overflow-hidden ">
            {data.preview_photos.map((data,id)=>(
                <div className="" key={id}><img src={data.urls.small} className='h-[100%] w-full' /></div>
            ))}
        </div>
        <div className='flex items-center justify-between w-full text-xs  font-semibold'>
            <p className='text-base font-bold tracking-widest'>{data.title}</p>
            <p>{data.total_photos} Photos</p>
        </div>
        <p className='text-gray-600 text-xs font-semibold'>Curated by {data.user.name}</p>
    </div>
  )
}

export default CollectionResults