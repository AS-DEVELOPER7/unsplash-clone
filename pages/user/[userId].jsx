import React, { useEffect } from 'react'
import { useStateContext } from '../../context/StateContext'
import {useUsersProfileQuery} from '../../app/services'
import {AiFillCheckCircle}from 'react-icons/ai'
import {ImLocation}from 'react-icons/im'
import Link from 'next/link'
import { BsPatchCheckFill } from 'react-icons/bs'
import { useState } from 'react'
import Photos from '../../components/user/Photos'
import Likes from '../../components/user/Likes'
import Collection from '../../components/user/Collection'

const User = () => {
  const {userId,setHide,setSearched,userFilters}=useStateContext()
  const userProfile =useUsersProfileQuery(userId)
  // console.log(userProfile)
  useEffect(()=>{setHide(true)},[])
  const [selected,setSelected]=useState('Photos')
  return (
    <div className=''>
      <div className="w-[90%] md:w-[80%] mx-auto flex items-start justify-center gap-5">
        <img src={userProfile?.data?.profile_image?.large} className='rounded-full w-[20%] md:w-[13%]' />
        <div className="flex flex-col items-start gap-2">
          <div className="flex items-center gap-3">
            <p className='text-2xl font-bold'>{userProfile?.data?.name}</p>
            {userProfile?.data?.badge?.primary?<BsPatchCheckFill className='text-blue-800 text-xl'/>:''}
          </div>
          <p className='text-sm  md:w-[60%]'>{userProfile.data?.bio}</p>
          {userProfile?.data?.for_hire?
          <p className='font-bold text-blue-800 text-sm flex items-center gap-2'>Avaialable for hire <AiFillCheckCircle/></p>
          :<></>
          }
          {userProfile?.data?.location===null?<></>:
          <p className='text-sm font-semibold flex items-center gap-2 text-gray-500'><ImLocation/> {userProfile?.data?.location}</p>
          }
          <div className="flex items-start flex-col gap-2">
            <p className='font-semibold text-lg'>Interest</p>
            <div className="flex flex-wrap items-center gap-5">
              {userProfile?.data?.tags?.custom.map((data,id)=>(
                <div className=' bg-gray-500 text-white py-1 rounded-lg px-3' onClick={()=>setSearched(data.title)} key={id}>
                  <Link href={`/search/photos/${data.title}`}>{data.title}</Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className='flex items-center sm:w-[80%] w-[100%] mx-auto mt-10 px-5 h-7'>
        <div className="flex items-center justify-evenly w-full sticky mb-2 shadow-sm top-0">
            {userFilters.map((data,id)=>(
                <div className={`flex items-center gap-2 cursor-pointer font-semibold ${selected===data.title?'border-b-[3px] border-black':''}`} key={id} onClick={()=>setSelected(data.title)} >
                    <data.icon/>{data.title}
                </div>
                    
            ))}
        </div>
      </div>
      <div className=" mt-5"> 
      {selected==='Photos'?<Photos/>
      :selected==='Likes'?<Likes/>
      :<Collection/>
      }
      </div>
    </div>
  )
}

export default User