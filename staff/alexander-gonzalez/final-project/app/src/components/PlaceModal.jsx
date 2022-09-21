import './PlaceModal.css'
import IconButton from './IconButton'

function PlaceModal({ place }) {
  
  return <>
    <div className='PlaceModal PlaceModal__boxing'> <button>x</button>
    {/* {place._id} */}
    <p className='description description'>{place.description}</p> <img className="img img"src={place.photo} />
    
    <p className='url url'>{place.url}</p>
    <p className='likes likes'>{place.likes}</p>
    
    </div>
   
  </> 
}

export default PlaceModal