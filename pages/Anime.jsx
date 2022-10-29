import React, { useEffect } from 'react'
import { useAnimeImagesQuery } from '../app/services'
import Loading from '../components/Loading'
import Pagination from '../components/Pagination'
import Results from '../components/Results'
import { useStateContext } from '../context/StateContext'

const Anime = () => {
  const{page,setHide}=useStateContext()
    const anime =useAnimeImagesQuery(page)
    // console.log(anime)
    useEffect(()=>{setHide(false)},[])
  return (
  <div>
    <div className="gridLayout">
    {!anime?.isLoading ? (
      anime?.data?.results?.map((data, id) => (
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

export default Anime