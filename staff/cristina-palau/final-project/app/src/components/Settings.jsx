import Loggito from '../utils/loggito'
import { updateEmail, updatePassword } from '../logic'
import withContext from '../utils/withContext'
import './Settings.sass'
import { toast } from 'react-toastify'


function Settings({ context: { handleFeedback } }) {
    const logger = new Loggito('Settings')

    logger.info('render')

    const onUpdatePassword = event => {

        event.preventDefault()

        const { target: form } = event

        const {
            oldPassword: { value: oldPassword },
            newPassword: { value: newPassword },
            newPasswordRepeat: { value: newPasswordRepeat }
        } = form
        try {
            updatePassword(sessionStorage.token, oldPassword, newPassword, newPasswordRepeat, function (error) {
                if (error) {

                    toast.warning(error.message, { position: toast.POSITION.TOP_CENTER, theme: "colored" })

                    logger.warn(error.message)

                    return
                }

                toast.success('your password has been updated', { position: toast.POSITION.TOP_CENTER, theme: "colored" })

                form.reset()

            })
        } catch (error) {

            toast.warning(error.message, { position: toast.POSITION.TOP_CENTER, theme: "colored" })

            logger.warn(error.message)
        }
    }

    const onUpdateEmail = event => {

        event.preventDefault()

        const { target: form } = event

        const {
            newEmail: { value: newEmail },
        } = form

        try {
            updateEmail(sessionStorage.token, newEmail, function (error) {
                if (error) {

                    toast.error(error.message, { position: toast.POSITION.TOP_CENTER, theme: "colored" })

                    logger.warn(error.message)
                    return
                }

                toast.success('your email has been updated', { position: toast.POSITION.TOP_CENTER, theme: "colored" })

                form.reset()
            })
        } catch (error) {

            toast.warning(error.message, { position: toast.POSITION.TOP_CENTER, theme: "colored" })

            logger.warn(error.message)
        }
    }

    return <>
        <form className="form settingsForm updatePasswordForm" onSubmit={onUpdatePassword}>
            <h3 className="updateTitle">Actualiza tu contraseña</h3>
            <label htmlFor="password">Contraseña actual</label>
            <input className="input" type="password" name="oldPassword" placeholder="contraseña actual" id="oldpassword" />

            <label htmlFor="password">Nueva Contraseña</label>
            <input className="input" type="password" name="newPassword" placeholder="nueva contraseña" id="new password" />

            <label htmlFor="password">Repite la nueva contraseña</label>
            <input className="input" type="password" name="newPasswordRepeat" placeholder="nueva contraseña"
                id="newpassword2" />

            <button className="button" type="submit">Guardar</button>

        </form>

        <form className="form settingsForm updateEmailForm" onSubmit={onUpdateEmail}>

            <h3 className="updateTitle">Actualiza tu correo</h3>
            <label htmlFor="email">Nuevo email</label>
            <input className="input" type="email" name="newEmail" placeholder="nuevo email" id="newemail" />
            <button className="button" type="submit">Guardar</button>
        </form>
    </>

}
export default withContext(Settings)