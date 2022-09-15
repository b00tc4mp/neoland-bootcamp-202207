import styles from './id.module.css'
import Image from 'next/image'
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { Carousel } from 'react-responsive-carousel'
import retrieveAdWithId from '../../../logic/retrieveAdWithId'
import { useRouter } from 'next/router'
import withContext from '../../../utils/withContext'
import React, { useEffect } from 'react'

const Ad = ({ ad, context: { setSearchHeight } }) => {
  useEffect(() => setSearchHeight(0), [])

  const router = useRouter()

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

  return <> <button className={styles.topBackButton} onClick={() => router.back()}>Volver</button>
    <div className={styles.adContainer}>
      {Object.keys(ad).length === 0 ?
        <p style={{ textAlign: 'center' }}>Lo sentimos, no encontramos el anuncio, o bien no está verificado o publicado</p> : <>
          <div className={styles.header}>
            <Carousel showThumbs={false} statusFormatter={(currentItem, total) => `${currentItem} de ${total}`}>
              {ad.image.map((image) => {
                return <div key={image}>
                  <img src={image} />
                </div>
              })}
            </Carousel>
          </div>
          <div className={styles.title}><h3>{ad.title}</h3></div>
          <div className={styles.body}><article>{ad.body}</article></div>
          <div className={styles.resultsAdFooter}>
            <div className={styles.footerPriceProvince}>
              <p className={styles.footerPrice}>{countryCurrency(ad.location.country, ad.price)}</p>
              <p className={styles.footerProvince}>{ad.location.province}</p>
            </div>
            <p>{elapsedTime(ad.createdAt)}</p>
          </div></>}
    </div>
    <button className={styles.botBackButton} onClick={() => router.back()}>Volver</button></>
}

export async function getStaticPaths(context) {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export async function getStaticProps(context) {
  const { params: { id } } = context
  try {
    const ad = await retrieveAdWithId('MX', id)
    return {
      props: { ad }
    }
  } catch (error) {
    console.log('ERROR: invalid filters for ad request')
    return {
      props: { ad: {} }
    }
  }
}

export default withContext(Ad)
