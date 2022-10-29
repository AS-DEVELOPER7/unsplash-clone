import Router, { useRouter } from 'next/router'
import React from 'react'
import { useSearchPhotosQuery, useSearchUsersQuery } from "../../../app/services";

import Loading from "../../../components/Loading";
import Pagination from "../../../components/Pagination";
import { useEffect } from 'react';
import { useState } from 'react';
import { useStateContext } from '../../../context/StateContext';
import UserResults from '../../../components/UserResults';
const Search = () => {
  const {searched,page,setHide} =useStateContext()
  const searchUser=useSearchUsersQuery({searched,page})
  // console.log(searchUser)
  useEffect(()=>{setHide(false)},[])
  return (
  <div>  
    <div className="gridLayout">
      {!searchUser?.isLoading ? (
        searchUser?.data?.results?.map((data, id) => (
          <div className="mb-10 shadow-xl border-2 p-4 rounded-lg w-full overflow-hidden" key={id}>
            <UserResults data={data} id={id} />
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