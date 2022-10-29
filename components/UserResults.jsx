import Router from 'next/router'
import React from 'react'
import { useStateContext } from '../context/StateContext'

const UserResults = ({data,id}) => {
    const{setUserId}=useStateContext()
    const userHandle=(id)=>{
        setUserId(id)
        Router.push(`/user/${id}`)
    }
  return (
    <div className='flex flex-col items-center gap-5 '>
        <div className="flex self-start gap-3">
            <img src={data.profile_image.medium} className='h-8 w-8 rounded-full' />
            <div className="flex flex-col items-start gap-1 text-xs">
                <p className='text-xs font-semibold'>{data.name}</p>
                <p className='text-gray-600 font-medium'>{data.username}</p>
            </div>
        </div>
        <div className="flex gap-3 items-center">
            {data.photos.map((data,id)=>(
                <div className=""><img src={data.urls.small} className='h-20 w-28' /></div>
            ))}
        </div>
        <button className='bg-gray-400 text-white w-full py-1 rounded-full font-semibold'onClick={()=>userHandle(data.username)}>View Profile</button>
    </div>
  )
}

export default UserResults