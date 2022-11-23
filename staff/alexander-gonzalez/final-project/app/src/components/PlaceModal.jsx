import "./PlaceModal.css";
import { Link } from 'react-router-dom'
import {toggleFavoritePlace} from "../logic";
import Loggito from "../utils/Loggito";
import withContext from "../utils/withContext";
import FavList from "./FavList";
import IconButton from './IconButton'
import { useLocation, useNavigate } from 'react-router-dom'
import {useState, useEffect} from "react"
import redHeart from "../img/redHeart.png"
import corazonBlanco from "../img/corazonBlanco.png"

function PlaceModal({ place, setPlace, favorites, context: {handleFeedback} }) {

  const logger = new Loggito('PlaceModal');
  const navigate= useNavigate()
  const [favorite, setFavorite] = useState(()=>{
    for(const fav of favorites){
      if(fav._id===place._id)
      return true
    }
    return null
  });


  const handleAddFavorites = () => {

    try{
    toggleFavoritePlace(sessionStorage.token, place._id, (error, place) => {
       if (error) {
             handleFeedback({message: error.message, level: 'error'})
    
               logger.warn(error.message)

         return
    }
      

    setFavorite(place)
    setPlace(place)

      logger.debug('addFavorites')

    

})
 } catch
        (error) {
           handleFeedback({message: error.message, level: 'error'})

          logger.warn(error.message)
   }
  }

  const handleQuitFavorites = () => {
  
    // setFavorite()

    //   logger.debug('addFavorites reset')
    try{
      toggleFavoritePlace(sessionStorage.token, place._id, (error, place) => {
         if (error) {
               handleFeedback({message: error.message, level: 'error'})
      
                 logger.warn(error.message)
  
           return
      }
        
  
      setFavorite(null)
      setPlace(place)
  
        logger.debug('addFavorites reset')
  
      
  
  })
   } catch
          (error) {
             handleFeedback({message: error.message, level: 'error'})
  
            logger.warn(error.message)
     }
    }
    


  

  




  return (
    <>
      <div className="PlaceModal PlaceModal__boxing">
        {" "}
        {/* <div className="placeModal_button"><button> <Link to="/">x</Link> </button></div> */}
    <div> 
    <IconButton text="arrow_back" onClick={() => navigate(-1)} />
    </div>
        {/* {place._id} */}
        <div className="PlaceModal_container">
          <p className="description description">{place.description}</p>{" "}
          <div className="placeModal_img">
          <img className="img img" src={place.photo} />
          </div>
          <a className="anchorUrl" href={place.url} target="_blank">More Info</a>
          <p className="likes likes">{place.likes}</p>
        </div>
        {favorite === null?
         <img src={corazonBlanco} className="favoriteIcon" onClick={handleAddFavorites}/>: <img src={redHeart}
        className="favoriteIcon"  onClick={handleQuitFavorites}/> }
       
      </div>
    </>
  );
}

export default withContext (PlaceModal);
