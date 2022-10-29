import Router, { useRouter } from 'next/router'
import React from 'react'
import { useSearchPhotosQuery } from "../../../app/services";
import Results from "../../../components/Results";
import Loading from "../../../components/Loading";
import Pagination from "../../../components/Pagination";
import { useEffect } from 'react';
import { useState } from 'react';
import { useStateContext } from '../../../context/StateContext';
const Search = () => {
  const {searched,page,setHide} =useStateContext()
  const searchPhotos=useSearchPhotosQuery({searched,page})
  useEffect(()=>{setHide(false)},[])
  return (
  <div>  
    <div className="gridLayout">
      {!searchPhotos?.isLoading ? (
        searchPhotos?.data?.results?.map((data, id) => (
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

export default Search