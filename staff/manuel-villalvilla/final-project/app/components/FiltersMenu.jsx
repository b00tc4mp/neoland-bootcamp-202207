import { useRouter } from "next/router"
import React, { useRef, useState, useEffect } from "react"
import { areas } from "data"
import AdvancedFiltersMenu from './AdvancedFiltersMenu'
import AnimateHeight from 'react-animate-height'
const { ES, AR, MX } = areas

export default function FiltersMenu({ country, province, search, categories }) {
  const [advancedFiltersHeight, setAdvancedFiltersHeight] = useState(0)
  const [stateProps, setStateProps] = useState({ country, province, search, categories })
  const filtersForm = useRef(null)
  const router = useRouter()

  useEffect(() => {
    setStateProps({ country, province, search, categories })
  }, [country, province, search, categories])

  const handleFiltersChange = event => {
    event.preventDefault()
    let {
      province: { value: province },
      search: { value: search },
      categories: { value: categories }
    } = filtersForm.current

    if (categories === 'all') categories = null

    if (province === 'Todas') province = null

    if (search === '') search = null

    setStateProps({ country, province, search, categories })

    const query = new function () {
      if (province) this.province = province
      if (categories) this.categories = categories
      if (search) this.search = search
    }

    router.push({
      pathname: `/${country}/home`,
      query
    }, undefined, { scroll: false })
  }

  const handleAdvancedFiltersMenuClick = () => {
    advancedFiltersHeight === 0 ? setAdvancedFiltersHeight('auto') : setAdvancedFiltersHeight(0)
  }

  return (
    <div className="filters-panel">
      <form ref={filtersForm} className="filters-form" onSubmit={handleFiltersChange} onChange={handleFiltersChange}>

        <div className="filters-province-container">
          <label htmlFor="provinceFilter" className="form-label">{country === 'MX' ? 'Estado' : 'Provincia'}</label>
          <select className="filters-province-select" name="province" id="provinceFilter"
            defaultValue={stateProps.province ? stateProps.province : 'Todas'}
          >
            {country === 'AR' && <>
              {AR.map(place => <option key={place} value={place}>{place}</option>)}
            </>
            }
            {country === 'ES' && <>
              {ES.map(place => <option key={place} value={place}>{place}</option>)}
            </>
            }
            {country === 'MX' && <>
              {MX.map(place => <option key={place} value={place}>{place}</option>)}
            </>
            }
          </select>
        </div>

        <div className="filters-categories-container">
          <label htmlFor="categoriesFilter" className="form-label">Categorías</label>
          <select className="filters-categories-select" name='categories' id="categoriesFilter"
            defaultValue={stateProps.categories ? stateProps.categories : 'all'}
          >
            <option value='all'>Todas</option>
            <option value='modelos'>Modelos</option>
            <option value='complementos'>Complementos</option>
          </select>
        </div>

        <div className="filters-search-container">
          <label htmlFor="searchFilter" className="form-label">Búsqueda por palabras</label>
          <input placeholder="buscar anuncios por palabras" size={30} className="search-text-input" type='text' maxLength={30} name='search' id="searchFilter"
            defaultValue={stateProps.search ? stateProps.search : ''}
          // if (window.timeoutID) // con el objeto window puedo añadir variables globales
          //     clearTimeout(window.timeoutID)

          // window.timeoutID = setTimeout(() => handleFiltersChange, 500)

          />
        </div>
        <button className='advanced-filters-button'
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