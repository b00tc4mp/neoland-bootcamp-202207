import { useState, useEffect } from "react";
import Loggito from "../utils/Loggito";
import retrieveUser from "../logic/retrieveUser";
import { searchCities } from "../logic";
import Settings from "../components/Settings";
import Header from "../components/Header";
import withContext from "../utils/withContext";
import { Routes, Route, useNavigate } from "react-router-dom";
import Search from "../components/Search";
import CityView from "../components/CityView";
import { retrieveFavoritePlaces } from "../logic";
// import { Link } from "react-router-dom";
// import { addFavorites } from "../logic";
import FavList from "../components/FavList"
import{deletePlace} from"../logic"

function HomePage({
  onLogoutClick,
  onSearchClick,
  context: { handleFeedback },
}) {
  const logger = new Loggito("HomePage");

  const [name, setName] = useState(null);
  const [cities, setCities] = useState(null);
  const navigate = useNavigate();
  const [query, setQuery] = useState(null);
  const [favoritePlaces, setFavoritePlaces] = useState([]);
 

  useEffect(() => {
    logger.info('"componentDidMount"');

    try {
      retrieveUser(sessionStorage.token, (error, user) => {
        if (error) {
          handleFeedback({ message: error.message, level: "error" });

          logger.warn(error.message);

          onLogoutClick();

          return;
        }
       
        setName(user.name);
       

        logger.debug("setName", user.name);

        retrieveFavoritePlaces(sessionStorage.token, (error, places) => {
          if (error) {
            handleFeedback({ message: error.message, level: "error" });

            logger.warn(error.message);

            return;
          }

          setFavoritePlaces(places);

          logger.debug("setFavoritePlaces", places);
        });
      });
    } catch (error) {
      handleFeedback({ message: error.message, level: "error" });

      logger.warn(error.message);
    }
  }, []);

  //  useEffect(() => {
  //   logger.info('"componentDidMount"');


  //   try {
  //     retrieveFavoritePlaces(sessionStorage.token, (error, places) => {
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

  useEffect(() => {
    logger.info("on query changed");

    try {
      if (query !== null) {
        searchCities(sessionStorage.token, query, (error, cities) => {
          if (error) {
            handleFeedback({ message: error.message, level: "error" });

            logger.warn(error.message);

            return cities;
          }

          setCities(cities);

          logger.debug("setCities", cities);
        });
      }
    } catch (error) {
      handleFeedback({ message: error.message, level: "error" });

      logger.warn(error.message);
    }
  }, [query]);


//   const handleDeletePlace = placeId => {
//     try {
//         deletePlace(sessionStorage.token, placeId, error => {
//             if (error) {
//                handleFeedback({message: error.message, level: 'error'})

//                 logger.warn(error.message)

//                 return
//             }

              
//         })
//     } catch (error) {
//      handleFeedback({message: error.message, level: 'error'})

//        logger.warn(error.message)
//     }
// }

  


  const handleSettingsClick = () => {
    navigate("settings");

    logger.debug("navigate to settings");

    // loadNotes()
  };

  const handleSettingsCloseClick = () => {
    navigate("/");

    logger.debug("navigate to search");
  };

  const handleFavoritesClick = () => {
    navigate("FavList");

    logger.debug("navigate to FavList");
  };


  logger.info("return");

  const handleSearch = (query) => setQuery(query);

  const handleCityClick = (cityId) => navigate(`cities/${cityId}`);

  logger.info("return");

  /*   const handleAddFavorites = () => {
    
    addFavorites(sessionStorage.token, place._id, (error) => {
      if (error) throw new Error("could not update favorites")
      if (!error) alert("favorites updates successfully")
      console.log("favorites updates successfully")
    })
      } */

  return name ? (
    <div className="home-page container container--full container--distributed">
      <Header
        name={name}
        onLogoutClick={onLogoutClick}
        onSettingsClick={handleSettingsClick}
        onFavoritesClick={handleFavoritesClick}
        // onSearchClick = {onSearchClick}
      />
        {cities &&
          cities.map((city) => {
            return (
              <li
              
                key={city.id}
                onClick={() => {handleCityClick(city.id);}} >
                 <p className="CityName">{city.name}</p>
              </li>
            );
          })}

      <main className="main">
        <Routes>
          <Route
            path="/"
            element={<Search cities={cities} onQuery={handleSearch} />}
            // favoritePlaces={favoritePlaces}
          />

           <Route
            path="FavList"
            element={<FavList onFavoritesClick={handleFavoritesClick} 
            favoritePlaces={favoritePlaces} 
            // onDeletePlace={handleDeletePlace} 
            />}
          />
          <Route
            path="settings"
            element={<Settings onCloseClick={handleSettingsCloseClick} />}
          />

          <Route
            path="cities/:cityId"
            element={<CityView />}
            onSearchClick={onSearchClick}
          />
        </Routes>

        {/* {cities &&
          cities.map((city) => {
            return (
              <li
              
                key={city.id}
                onClick={() => {handleCityClick(city.id);}} >
                 <p>{city.name}</p>
                <p>{city.description}</p>
              </li>
            );
          })} */}
      </main>

      <footer className="footer"></footer>
    </div>
  ) : null;
}

export default withContext(HomePage);
