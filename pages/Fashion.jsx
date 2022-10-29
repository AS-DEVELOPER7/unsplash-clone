import React, { useEffect } from 'react'
import { useFashionImagesQuery } from '../app/services'
import Loading from '../components/Loading'
import Pagination from '../components/Pagination'
import Results from '../components/Results'
import { useStateContext } from '../context/StateContext'

const Fashion = () => {
  const{page,setHide}=useStateContext()
    const fashion=useFashionImagesQuery(page)
    useEffect(()=>{setHide(false)},[])
  return (
    <div>
    <div className="gridLayout">
    {!fashion?.isLoading ? (
      fashion?.data?.results?.map((data, id) => (
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

export default Fashion