import Router, { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useSearchCollectionsQuery } from "../../../app/services";
import CollectionResults from '../../../components/CollectionResults';
// import Results from "../../components/Results";
import Loading from "../../../components/Loading";
import Pagination from "../../../components/Pagination";
import { useStateContext } from '../../../context/StateContext';
const Search = () => {
  const {searched,page,setHide} =useStateContext()
  const searchcollection=useSearchCollectionsQuery({searched,page})
  // console.log(searchcollection)
  useEffect(()=>{setHide(false)},[])
  return (
  <div>  
    <div className="gridLayout">
      {!searchcollection?.isLoading ? (
        searchcollection?.data?.results?.map((data, id) => (
          <div className=" mb-12 w-[90%] mx-auto" key={id}>
            <CollectionResults data={data} id={id} />
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