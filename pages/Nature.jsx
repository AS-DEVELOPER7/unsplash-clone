import React, { useEffect } from 'react'
import { useNatureImagesQuery } from '../app/services'
import Loading from '../components/Loading'
import Pagination from '../components/Pagination'
import Results from '../components/Results'
import { useStateContext } from '../context/StateContext'

const Nature = () => {
  const{page,setHide}=useStateContext()
    const nature=useNatureImagesQuery(page)
    useEffect(()=>{setHide(false)},[])
  return (
    <div>
    <div className="gridLayout">
    {!nature?.isLoading ? (
      nature?.data?.results?.map((data, id) => (
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

export default Nature