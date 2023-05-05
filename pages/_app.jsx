import '../styles/index.scss'
import React, {useState, useEffect} from 'react'
import PacmanLoader from "react-spinners/PacmanLoader"



export default function App({ Component, pageProps }) {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }, [])

  return (
    <>
      {
        loading ?

        <div className="loader">
          <PacmanLoader
            color="#f2cc00"
          />
        </div>

        :

        <Component {...pageProps} />

      }
    </>
  )
}
