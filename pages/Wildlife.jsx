import React, { useEffect } from 'react'
import { useWildlifeImagesQuery } from '../app/services'
import Loading from '../components/Loading'
import Pagination from '../components/Pagination'
import Results from '../components/Results'
import { useStateContext } from '../context/StateContext'

const Wildlife = () => {
  const{page,setHide}=useStateContext()
    const wildlife=useWildlifeImagesQuery(page)
    useEffect(()=>{setHide(false)},[])
  return (
    <div>
    <div className="gridLayout">
    {!wildlife?.isLoading ? (
      wildlife?.data?.results?.map((data, id) => (
        <div className="" key={id}>
          <Results data={data} id={id} />
        </div>
      ))
    ) : (
      <Loading />
    )}
  </div>
  <Pagination/>
  </div>
  )
}

export default Wildlife