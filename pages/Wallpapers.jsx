import React, { useEffect } from 'react'
import { useWallpaperImagesQuery } from '../app/services'
import Loading from '../components/Loading'
import Pagination from '../components/Pagination'
import Results from '../components/Results'
import { useStateContext } from '../context/StateContext'

const Wallpapers = () => {
  const{page,setHide}=useStateContext()
    const wallpapers=useWallpaperImagesQuery(page)
    useEffect(()=>{setHide(false)},[])
  return (
    <div>
    <div className="gridLayout">
    {!wallpapers?.isLoading ? (
      wallpapers?.data?.results?.map((data, id) => (
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

export default Wallpapers