import { useState, useRef } from 'react'
import styles from './Modal.module.css'
import ReCAPTCHA from 'react-google-recaptcha'
import axios from 'axios'
const SITE_KEY = process.env.NEXT_PUBLIC_SITE_KEY
const API_URL = process.env.NEXT_PUBLIC_API_URL

function Modal({ onSubmitButtonClick, onCloseButtonClick, error, modalView, setError }) {
    const [isSearching, setIsSearching] = useState(false)
    const [remaining, setRemainig] = useState(300)
    const captchaRef = useRef(null)

    const handleBodyChange = body => {
        const count = body.length

        setRemainig(300 - count)
    }

    const stopEvent = event => event.stopPropagation()

    return <div className={styles.modal} onClick={onCloseButtonClick} onTouchStart={stopEvent} onTouchEnd={stopEvent}>
        <div className={styles.modalContent} onClick={e => e.stopPropagation()}>

            {modalView === 'form' && <><div className={styles.closeButtonContainer}>
                <button className={styles.closeButton} onClick={onCloseButtonClick}>X</button>
            </div>
                <div className={styles.modalBody}>
                    <form id='contactForm' className={styles.form} onSubmit={async event => {
                        event.preventDefault()

                        const token = captchaRef.current.getValue()

                        if (token.length === 0) {
                            setError('Tienes que marcar la casilla de "No soy un robot"')
                            captchaRef.current.reset()
                            return
                        }

                        captchaRef.current.reset()

                        await axios.post(`${API_URL}/utils`, { token })
                            .then(res => {
                                if (res.data !== 'human') throw new Error('not a human')
                                else {
                                    const { name: { value: name }, email: { value: email }, body: { value: body } } = event.target

                                    onSubmitButtonClick(name, email, body)
                                }
                            })
                            .catch(error => {throw new Error(error)})


                    }}>
                        <div className={styles.nameContainer}>
                            <label htmlFor='name' className={styles.nameLabel}>Introduce tu nombre</label>
                            <input
                                type='text'
                                className={styles.nameInput}
                                id='name'
                                name='name'
                            >
                            </input>
                        </div>
                        <div className={styles.emailContainer}>
                            <label htmlFor='email' className={styles.emailLabel}>Introduce tu Email</label>
                            <input
                                type='email'
                                className={styles.emailInput}
                                id='email'
                                name='email'
                                placeholder={isSearching ? '' : 'miemail@ejemplo.com'}
                                onFocus={() => setIsSearching(true)}
                                onBlur={() => setIsSearching(false)}
                            >
                            </input>
                        </div>
                        <div className={styles.bodyContainer}>
                            <label htmlFor='body' className={styles.bodyLabel}>Introduce tu mensaje</label>
                            <textarea
                                id='body'
                                className={styles.bodyInput}
                                name='body'
                                rows={8}
                                maxLength={300}
                                onChange={event => {
                                    const body = event.target.value

                                    handleBodyChange(body)
                                }}
                            >
                            </textarea>
                            <p>{remaining}</p>
                            <ReCAPTCHA sitekey={SITE_KEY} ref={captchaRef} />
                        </div>
                    </form>
                </div>
                {error && <p style={{ textAlign: 'center', color: 'red' }}>{error}</p>}
                <div className={styles.modalFooter}>
                    <button type='submit' form='contactForm' className={styles.modalSendButton}>Enviar</button>
                </div></>}
            {modalView === 'thankyou' && <><h1>¡GRACIAS!</h1><p>El mensaje se envió correctamente</p></>}
        </div>
    </div>
}

export default Modal