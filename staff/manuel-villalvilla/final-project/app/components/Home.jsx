import { animateScroll as scroll } from 'react-scroll'
import { useRouter } from 'next/router'
import PaginatedResults from './PaginatedResults'
import React, { useState, useEffect, useRef } from 'react'

function Home({ data, page, province, search, categories }) {  
  const [stateData, setStateData] = useState(data)
  const router = useRouter()
  let storageRef = useRef(true) // esto es para evitar q el useEffect se ejecute en el primer renderizado

  /* Component top scrolling when page changes */
  useEffect(() => scroll.scrollToTop(), [page])

  /* Re-render component with fresh data. This useEffect is prevented from running on first render */
  useEffect(() => {
    if (!storageRef.current) {
      setStateData(data)
    }
    return () => { storageRef.current = false }
  }, [data])

  const handlePageClick = (event) => {
    const query = new function () {
      this.page = event.selected + 1
      if (province) this.province = province
      if (categories) this.categories = categories
      if (search) this.search = search
    }
    router.push({
      pathname: './home',
      query
    }, undefined, { scroll: false }) // no funciona bien su scroll incorporado, default = true
  }

  return <PaginatedResults search={search} page={page - 1} data={stateData} onPageClick={handlePageClick} />
}

export default Home