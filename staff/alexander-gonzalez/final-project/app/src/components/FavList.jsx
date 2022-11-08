import IconButton from './IconButton'
import Loggito from '../utils/Loggito'
import withContext from '../utils/withContext'
import {retrieveFavoritePlaces} from "../logic"
import {useState, useEffect} from "react"
import { useLocation, useNavigate } from 'react-router-dom'
import "./FavList.css" 
import PlaceModal from "./PlaceModal"
import deletePlace from '../logic/deletePlace'




function FavList({context: {handleFeedback }, favoritePlaces, onFavoritesClick}) {
    const logger = new Loggito('FavList')
    // const [favoritePlaces, setFavoritePlaces] = useState(favoritePlaces);
    const navigate= useNavigate()
    const [place, setPlace] = useState();
    

    logger.info('render')
    

  // useEffect(() => {
  //   logger.info('"componentDidMount"');


  //   try {
  //     retrievePlaces(sessionStorage.token, favoritePlaces,(error, places) => {
  //       if (error) {
  //         handleFeedback({ message: error.message, level: "error" });

  //         logger.warn(error.message);

  //         return;
  //       }

  //       setFavoritePlaces(places);

  //       logger.debug("setFavoritePlaces", places);
  //     });
  //   } catch (error) {
  //     handleFeedback({ message: error.message, level: "error" });

  //     logger.warn(error.message);
  //   }
  // }, []); 


debugger
const handlePlaceClick = (place) => setPlace(place);
// const handleDeletePlace = (place) => {
//   // const index = favoritePlaces.indexOf(place.id)
//   // logger.debug(index)
//   // logger.debug(favoritePlaces)
//   // favoritePlaces.splice(index)
//   // logger.debug(favoritePlaces)

//   // logger.info('message')
//   deletePlace(sessionStorage.token, place, error => {
//     if(error){logger.error(error.message)}
    
//   })

// }
    
return <ul className="favList">
 <li className="Menu__item">
             <IconButton text="arrow_back" onClick={() => navigate(-1)} />
        </li>
{favoritePlaces &&
  favoritePlaces.map((place) => {
    return <li className="favModal favModal__boxing" key={place.id}>
      {/* <button className="placeFav__item-delete-button" onClick={() => handleDeletePlace(place.id)}>x</button> */}
        {" "}
        {/* <div className="favModal_button"><button> <Link to="/">x</Link> </button></div> */}
        <div className="favModal_container container">
          <div className="placeModal_img">
            <img className="favImg favImg"  onClick={()=>{handlePlaceClick(place);}}src={place.photo}/>
            
          </div>
          <a className="anchorUrl" href={place.url} target="_blank">
            More Info
          </a>
        </div>
    </li>;
  })}
  {place && <PlaceModal place={place} />}
</ul>

}

   
export default withContext (FavList)





