import React from 'react'
import { useStateContext } from '../../context/StateContext'
import{useSearchPhotosQuery} from '../../app/services'
import Results from '../Results'
import Loading from '../Loading'

const Photos = () => {
    const {userId}=useStateContext()
    const userPhotos=useSearchPhotosQuery(userId)
    // console.log(userPhotos)
  return (
    <div className=''>
        {!userPhotos?.isLoading ? userPhotos?.data?.length==0?
        <div className='flex items-center justify-center w-full h-[20vh] text-lg font-bold'>There are no Photos !!</div>: (
        <div className="gridLayout">
      {userPhotos?.data?.results?.map((data, id) => (
        <div className="mb-10 sm:mb-0" key={id}>
          <Results data={data} id={id} />
        </div>
      ))}
      </div>
    ) : (
      <Loading />
    )}
    </div>
  )
}

export default Photos