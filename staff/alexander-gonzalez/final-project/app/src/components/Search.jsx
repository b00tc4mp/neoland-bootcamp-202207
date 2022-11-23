import IconButton from "./IconButton";
import Loggito from "../utils/Loggito";
import "./Search.css";

function Search({ onQuery }) {  
  // favoritesPlaces esta declarado aqui en Search
  const logger = new Loggito("Search");

  const handleSubmit = (event) => {
    event.preventDefault();

    const query = event.target.query.value;

    onQuery(query);
  };

  logger.info("return");

  return (
    <div className="searchPage">
      <form className="container container--row" onSubmit={handleSubmit}>
        <input className="input" type="text" name="query" />
        <IconButton text="search" />
      </form>
          </div>
  );
}

export default Search;

      // <ul className="">
      //   {favoritePlaces &&
      //     favoritePlaces.map((place) => {
      //       return <li className="favModal favModal__boxing" key={place.id}>
      //           {" "}
      //           {/* <div className="favModal_button"><button> <Link to="/">x</Link> </button></div> */}
      //           <div className="favModal_container container">
      //             <p className="favDescription">{place.description}</p>{" "}
      //             <div className="placeModal_img">
      //               <img className="img img" src={place.photo} />
      //             </div>
      //             <a className="anchorUrl" href={place.url} target="_blank">
      //               More Info
      //             </a>
      //             <p className="likes likes">{place.likes}</p>
      //           </div>
        
      //       </li>;
      //     })}
      // </ul>




{
  /* <div className="favModal favModal__boxing">
                  {" "}
                  <div className="favModal_button"><button> <Link to="/">x</Link> </button></div>
        
                  <div className="favModal_container">
                    <p className="favdescription">{place.description}</p>{" "}
                    <div className="placeModal_img">
                    <img className="img img" src={place.photo} />
                    </div>
                    <a className="anchorUrl" href={place.url} target="_blank">More Info</a>
                    <p className="likes likes">{place.likes}</p>
                  </div>
                  </div> */
}

{
  /* <div>
              <p>Hi</p>
              <p>{place.description}</p>
          </div> */
}
