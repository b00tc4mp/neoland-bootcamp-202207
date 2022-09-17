import { useRouter } from "next/router"
import React, { useRef, useState, useEffect } from "react"
import { areas } from "data"
import AdvancedFiltersMenu from './AdvancedFiltersMenu'
import AnimateHeight from 'react-animate-height'
const { ES, AR, MX } = areas

export default function FiltersMenu({ country, province, search, categories }) {
  const [timeoutId, setTimeoutId] = useState(null)
  const [advancedFiltersHeight, setAdvancedFiltersHeight] = useState(0)
  const [isSearching, setIsSearching] = useState(false)
  const storageRef = useRef(true)
  const formRef = useRef(null)
  const router = useRouter()

  useEffect(() => {
    if (!storageRef.current) {
      if (formRef.current.search.value !== search)
        formRef.current.search.value = search
    }
    return () => storageRef.current = false
  }, [search])

  const handleFormOnChange = () => {
    const { province: { value: province }, search: { value: search }, categories: { value: categories } } = formRef.current

    if (province === 'all') province = null
    if (search === '') search = null
    if (categories === 'all') categories = null

    const query = new function () {
      if (province) this.province = province
      if (categories) this.categories = categories
      if (search) this.search = search
    }
    router.push({
      pathname: `/${country}`,
      query
    }, undefined, { scroll: false })
  }

const handleAdvancedFiltersMenuClick = () => {
  advancedFiltersHeight === 0 ? setAdvancedFiltersHeight('auto') : setAdvancedFiltersHeight(0)
}

return (
  <div className="filters-panel">
    <form
      className="filters-form"
      ref={formRef}
      onSubmit={event => {
        event.preventDefault()

        handleFormOnChange()
      }} >

      <div className="filters-province-container">
        <label
          htmlFor="provinceFilter"
          className="form-label">
          {country === 'MX' ? 'Estado' : 'Provincia'}
        </label>
        <select
          className="filters-province-select"
          name="province"
          id="provinceFilter"
          value={province ? province : 'all'}
          onChange={() => handleFormOnChange()}
        >
          {country === 'AR' && <>
            {AR.map(place => <option key={place} value={place === 'Todas' ? 'all' : place}>{place}</option>)}
          </>
          }
          {country === 'ES' && <>
            {ES.map(place => <option key={place} value={place === 'Todas' ? 'all' : place}>{place}</option>)}
          </>
          }
          {country === 'MX' && <>
            {MX.map(place => <option key={place} value={place === 'Todas' ? 'all' : place}>{place}</option>)}
          </>
          }
        </select>
      </div>

      <div className="filters-categories-container">
        <label htmlFor="categoriesFilter" className="form-label">Categorías</label>
        <select
          className="filters-categories-select"
          name='categories'
          id="categoriesFilter"
          value={categories ? categories : 'all'}
          onChange={() => handleFormOnChange()}
        >
          <option value='all'>Todas</option>
          <option value='modelos'>Modelos</option>
          <option value='complementos'>Complementos</option>
        </select>
      </div>

      <div className="filters-search-container">
        <label htmlFor="searchFilter" className="form-label">Búsqueda por palabras</label>
        <input
          placeholder={isSearching ? '' : "buscar anuncios por palabras"}
          size={30}
          className="search-text-input"
          type='text'
          maxLength={30}
          name='search'
          id="searchFilter"
          defaultValue={search ? search : ''}
          onBlur={() => setIsSearching(false)}
          onFocus={() => setIsSearching(true)}
          onChange={() => {
            if (timeoutId)
              clearTimeout(timeoutId)

            const id = setTimeout(() => handleFormOnChange(), 500)

            setTimeoutId(id)
          }}
        />
      </div>

      <button
        className='advanced-filters-button'
        onClick={handleAdvancedFiltersMenuClick}
        aria-expanded={advancedFiltersHeight !== 0}
        aria-controls='advanced-filters-panel'
      >
        {advancedFiltersHeight !== 0 ? 'Cerrar filtros avanzados' : 'Abrir filtros avanzados'}
      </button>

      <AnimateHeight id='advanced-filters-panel' duration={500} height={advancedFiltersHeight}>
        <AdvancedFiltersMenu />
      </AnimateHeight>
    </form>
  </div>)
}