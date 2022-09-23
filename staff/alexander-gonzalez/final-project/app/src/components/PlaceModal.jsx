import "./PlaceModal.css";
import { Link } from 'react-router-dom'
import {addFavorites} from "../logic";

function PlaceModal({ place }) {

  const handleAddFavorites = () => {
    
addFavorites(sessionStorage.token, place._id, (error) => {
  if (error) throw new Error("could not update favorites")
  if (!error) alert("favorites updates successfully")
  console.log("favorites updates successfully")
})
  }
  

  return (
    <>
      <div className="PlaceModal PlaceModal__boxing">
        {" "}
        <div className="placeModal_button"><button> <Link to="/">x</Link> </button></div>
    
        {/* {place._id} */}
        <div className="PlaceModal_container">
          <p className="description description">{place.description}</p>{" "}
          <div className="placeModal_img">
          <img className="img img" src={place.photo} />
          </div>
          <a className="anchorUrl" href={place.url} target="_blank">More Info</a>
          <p className="likes likes">{place.likes}</p>
        </div>
        <button type="button" className="material-symbols-outlined" onClick={handleAddFavorites}>favorite</button>
      </div>
    </>
  );
}

export default PlaceModal;
