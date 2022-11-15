import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import {store}from '../app/store'
import StateContext from '../context/StateContext'
import Layout from '../components/Layout'
import { useEffect, useState } from 'react'
import { FaUnsplash } from 'react-icons/fa'
function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return <Provider store={store}>
   <StateContext>
   {loading ? (
          <div className="bg-slate-100 flex items-center justify-center w-[100vw] h-[100vh]">
            <FaUnsplash className=" h-[8em] w-[8em]" />
          </div>
        ) : (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        )}
</StateContext>
</Provider>
}

export default MyApp
