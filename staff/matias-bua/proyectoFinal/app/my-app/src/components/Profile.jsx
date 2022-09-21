import Loggito from '../utils/Loggito'
import withContext from '../utils/withContext'
import './Profile.css'
import updateUserProfile from '../logics/updateUserProfile'
// import { useReducer } from 'react'


function Profile({ onLinkClick, context: { handleFeedback }}) {

    const logger = new Loggito('Profile')

    const handleFormSubmit = event => {
        event.preventDefault()

        const { target: form } = event
        const {changeGender: {value: changeGender}, city:{value: city}, aboutYou:{value:aboutYou} } = form

    try {
        updateUserProfile(
          sessionStorage.token,
          changeGender,
          city,
          aboutYou,
          error => {
            if (error) {
              handleFeedback({ message: error.message, level: 'warning'})

              logger.warn(error.message)
    
              return;
            }
            // alert("Password updated");
            
            handleFeedback({ message: '¡Profile Updated!', level: 'success'})
            // onCloseClick ()
            // form.reset() //para limpiar el formulario luego del cambio de contraseña.//
          });
      } catch(error) {
        handleFeedback({message: error.message, level:'warning'})

        logger.warn(error.message)
      }
    }
    
    
    return <div className="updateProfileCcontainer">
      
    <form className="update-password-form form" onSubmit={handleFormSubmit}>
        <div className="form__field">
        <h3 className="tittleProfile"> Your profile </h3>
        </div>

        <div className="form__field">
            <label htmlFor="changeGender">Male / Female</label>
            <input className="input" type="text" name="changeGender" placeholder="" id="changeGender" />

            
        </div>

        <div className="form__field">
            <label htmlFor="city">City</label>
            <input className="input" type="text" name="city" placeholder="city" id="city" />
        </div>

        <div className="form__field">
            <label htmlFor="aboutYou">About you</label>
            <input className="input" type="text" name="aboutYou" placeholder="About you..." id="aboutYou" />
        </div>

        <button className="button" type="submit">Change Profile</button>
    </form>
</div>

}

export default withContext(Profile)