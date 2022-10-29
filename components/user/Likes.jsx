import React from 'react'
import { useUsersLikedPhotosQuery } from '../../app/services'
import { useStateContext } from '../../context/StateContext'
import Loading from '../Loading'
import Results from '../Results'

const Likes = () => {
    const {userId}=useStateContext()
    const userLikes=useUsersLikedPhotosQuery(userId)
    // console.log(userLikes)
  return (
    <div className={` ${userLikes?.data?.length==0?'':'gridLayout'}`}>
        {!userLikes?.isLoading ? userLikes?.data?.length==0?
        <div className='flex items-center justify-center w-full h-[20vh] text-lg font-bold'>There are no liked pictures !!</div>
        : (
     userLikes?.data?.length>0 &&userLikes?.data?.map((data, id) => (
        <div className="mb-10 sm:mb-0" key={id}>
          <Results data={data} id={id} />
        </div>
      ))
    ) : (
      <Loading />
    )}
    </div>
  )
}

export default Likes