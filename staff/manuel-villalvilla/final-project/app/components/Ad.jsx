import styles from './Ad.module.css'
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { Carousel } from 'react-responsive-carousel'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Modal from '../components/Modal'
import contactUser from '../logic/contactUser'
import withContext from '../utils/withContext'
import { CSSTransition } from 'react-transition-group'

export default withContext(function Ad({ ad, context: { setSearchHeight } }) {
  const [showModal, setShowModal] = useState(false)
  const [error, setError] = useState(null)
  const [modalView, setModalView] = useState('form')

  useEffect(() => setSearchHeight(0), [])

  const router = useRouter()

  const handleContactButtonClick = () => {
    showModal ? setShowModal(false) : setShowModal(true)
  }

  const handleFormSubmit = (name, email, body) => {
    try {
      contactUser(name, email, body, ad.user.toString())
        .then(res => {
          if (res.status === 200) setModalView('thankyou')
        })
    } catch (error) {
      if (error.message === 'name is empty or blank') setError('Introduce un nombre')
      else if (error.message === 'email is empty or blank') setError('Introduce tu email')
      else if (error.message === 'email is not valid') setError('Introduce un email válido')
      else if (error.message === 'body is empty or blank') setError('Escribe un mensaje')
      else console.log(error.message)
    }
  }

  const elapsedTime = (creationDate) => {
    const createdParsed = Date.parse(creationDate)
    const nowParsed = Date.parse(new Date)
    const elapsedMili = nowParsed - createdParsed
    const elapsedSecs = Math.round(elapsedMili / 1000)
    const elapsedMins = Math.round(elapsedSecs / 60)
    const elapsedHours = Math.round(elapsedMins / 60)
    const elapsedDays = Math.round(elapsedHours / 24)

    if (elapsedDays < 1 && elapsedHours < 1 && elapsedMins < 1) return `Publicado hace ${elapsedSecs} segundos`
    else if (elapsedDays < 1 && elapsedHours < 1) return `Publicado hace ${elapsedMins === 1 ? '1 minuto' : `${elapsedMins} minutos`}`
    else if (elapsedDays < 1) return `Publicado hace ${elapsedHours === 1 ? '1 hora' : `${elapsedHours} horas`}`
    else return `Publicado hace ${elapsedDays === 1 ? '1 día' : `${elapsedDays} días`}`
  }

  const countryCurrency = (country, price) => {
    if (country === 'MX' || country === 'AR') return `${price}$`
    if (country === 'ES') return `${price}€`
  }

  return <>
    <button className={styles.topBackButton} onClick={() => router.back()}>Volver</button>
    <div className={styles.adContainer}>
      {Object.keys(ad).length === 0 ?
        <p style={{ textAlign: 'center' }}>Lo sentimos, no encontramos el anuncio, o bien no está verificado o publicado</p>
        : <>
          <div className={styles.header}>
            {ad.image.length > 0 &&
              <Carousel
                renderArrowPrev={(clickHandler, hasPrev, label) => {
                  if (hasPrev)
                    return <button title={label} className={styles.arrowLeft} onClick={clickHandler}>🠔</button>
                }}
                renderArrowNext={(clickHandler, hasNext, label) => {
                  if (hasNext)
                    return <button title={label} className={styles.arrowRight} onClick={clickHandler}>🠖</button>
                }}
                renderIndicator={(onClickHandler, isSelected, index, label) => {
                  if (isSelected) {
                    return (
                      <li
                        className={styles.indicatorStylesSelected}
                        aria-label={`Selected: ${label} ${index + 1}`}
                        title={`Selected: ${label} ${index + 1}`}
                      />
                    )
                  }
                  return (
                    <li
                      className={styles.indicatorStyles}
                      onClick={onClickHandler}
                      onKeyDown={onClickHandler}
                      value={index}
                      key={index}
                      role="button"
                      tabIndex={0}
                      title={`${label} ${index + 1}`}
                      aria-label={`${label} ${index + 1}`}
                    />
                  )
                }}
                dynamicHeight={true}
                showThumbs={false}
                statusFormatter={(currentItem, total) => <div className={styles.statusIndicator}>{currentItem} de {total}</div>}>
                {ad.image.map((image) => {
                  return <div key={image}>
                    <img src={image} />
                  </div>
                })}
              </Carousel>}
            {ad.image.length === 0 && <p>Sin imágenes</p>}
          </div>
          <div className={styles.title}><h3>{ad.title}</h3></div>
          <div className={styles.body}><article>{ad.body}</article></div>
          <div className={styles.resultsAdFooter}>
            <div className={styles.footerPriceProvince}>
              <p className={styles.footerPrice}>{countryCurrency(ad.location.country, ad.price)}</p>
              <p className={styles.footerProvince}>{ad.location.province}</p>
            </div>
            <p>{elapsedTime(ad.createdAt)}</p>
          </div>
          <button className={styles.contactButton} onClick={() => handleContactButtonClick()}>Contactar</button>
        </>}
    </div>
    <button className={styles.botBackButton} onClick={() => router.back()}>Volver</button>
    <CSSTransition
      in={showModal}
      unmountOnExit
      timeout={500}
      classNames='my-node'
    >
      <Modal modalView={modalView} error={error} setError={setError} onCloseButtonClick={handleContactButtonClick} onSubmitButtonClick={handleFormSubmit}></Modal>
    </CSSTransition>
  </>
})