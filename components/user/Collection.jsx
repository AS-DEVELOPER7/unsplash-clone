import React from 'react'
import { useUsersCollectionQuery } from '../../app/services'
import { useStateContext } from '../../context/StateContext'
import Loading from '../Loading'
import CollectionResults from '../CollectionResults'


const Collection = () => {
    const {userId}=useStateContext()
    const userCollection=useUsersCollectionQuery(userId)
    // console.log(userCollection)
  return (
    <div className=''>
        {!userCollection?.isLoading ? userCollection?.data?.length==0?
        <div className='flex items-center justify-center w-full h-[20vh] text-lg font-bold'>There are no Collections !!</div>
        : (
            <div className="flex items-center justify-start flex-wrap w-[90%]">
                {
                    userCollection?.data?.length>0 && userCollection?.data?.map((data, id) => (
                        <div className=" mb-12 w-[90%] md:w-[40%] lg:w-[25%] mx-auto" key={id}>
                             <CollectionResults data={data} id={id} />
                         </div>
                 ))}
            </div>
        ) : (
      <Loading />
    )}
    </div>
  )
}

export default Collection