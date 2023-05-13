import Head from 'next/head'
import React from 'react'
import { useStateContext } from '../context/StateContext'
import Nav from './Nav'
import QuickSearch from './QuickSearch'
import SearchFilters from './SearchFilters'
const Layout = ({children}) => {
  const {change,hide}=useStateContext()
  return (
    <div className='bg-slate-100 '>
      <Head>
        <title>
          Snapshot
        </title>
      </Head>
<main className='min-h-screen'>
  <div className="fixed top-0 w-full h-max bg-slate-100 z-20 shadow-md">
  <Nav/>
  {
    hide?
    <></>
    :  change?
      <QuickSearch/>
      :
      <SearchFilters/>
    
  }

  </div>
  <div className={`${hide?'mt-16 ':'mt-24'} py-10 min-h-screen`}>
    {children}
  </div>
</main>
     
    </div>
  )
}

export default Layout
