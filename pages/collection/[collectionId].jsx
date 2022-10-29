import React, { useEffect } from 'react'
import { useStateContext } from '../../context/StateContext'
import {useCollectionDetailsQuery, useCollectionPhotosQuery, useCollectionRelatedCollectionQuery}from '../../app/services'
import Router from 'next/router'
import Loading from '../../components/Loading'
import Results from '../../components/Results'
import CollectionResults from '../../components/CollectionResults'
const Collection = () => {
  const {collectionId,setUserId,setHide}=useStateContext()
  const collectionDetails=useCollectionDetailsQuery(collectionId)
  const collectionPhotos =useCollectionPhotosQuery(collectionId)
  const collectionRelatedCollection=useCollectionRelatedCollectionQuery(collectionId)
  // console.log(collectionRelatedCollection)
  // console.log(collectionId)
  const handleuser=(name)=>{
    setUserId(name)
    Router.push(`/user/${name}`)
  }
  useEffect(()=>{setHide(true)},[])
  return (
    <div className='flex flex-col gap-10'>
      <div className='flex flex-col items-start gap-5 w-[90%] mx-auto'>
        <p className='font-bold text-3xl'>{collectionDetails?.data?.title}</p>
        <div className="flex items-center gap-3">
          <img src={collectionDetails?.data?.user?.profile_image?.medium} alt="" className='h-9 w-9 rounded-full cursor-pointer' onClick={()=>handleuser(collectionDetails?.data?.user?.username)} />
          <div className="flex flex-col items-start">
            <p className='font-semibold text-lg cursor-pointer' onClick={()=>handleuser(collectionDetails?.data?.user?.username)}>{collectionDetails?.data?.user?.name}</p>
            <p className='font-semibold text-sm'>{collectionDetails?.data?.total_photos} Photos</p>
          </div>
        </div>
      </div>
      <div className="gridLayout mt-10">
      {!collectionPhotos?.isLoading ? (
      collectionPhotos?.data?.map((data, id) => (
        <div className="" key={id}>
          <Results data={data} id={id} />
        </div>
      ))
    ) : (
      <Loading />
    )}
      </div>
      <div className="flex flex-col items-start  gap-5">
        <p className='text-lg font-bold tracking-wider w-[90%] mx-auto'>You Might Also Like</p>
        <div className=" flex items-center justify-evenly flex-wrap w-[100%] mx-auto ">
        {!collectionRelatedCollection?.isLoading ? (
      collectionRelatedCollection?.data?.map((data, id) => (
        <div className=" mb-12 w-[90%] md:w-[40%] lg:w-[25%] mx-auto" key={id}>
          <CollectionResults data={data} id={id} />
        </div>
      ))
    ) : (
      <Loading />
    )}
        </div>
      </div>
    </div>
  )
}

export default Collection