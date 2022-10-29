import React, { useEffect } from 'react'
import { useMarineImagesQuery } from '../app/services'
import Loading from '../components/Loading'
import Pagination from '../components/Pagination'
import Results from '../components/Results'
import { useStateContext } from '../context/StateContext'

const Marine = () => {
  const{page,setHide}=useStateContext()
    const marine=useMarineImagesQuery(page)
    useEffect(()=>{setHide(false)},[])
  return (
    <div>
    <div className="gridLayout">
    {!marine?.isLoading ? (
      marine?.data?.results?.map((data, id) => (
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

export default Marine