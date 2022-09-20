import { useEffect } from "react"; 
import { useParams } from "react-router-dom";


function PlaceModal({context: { handleFeedback}}) {
  const logger = new Loggito("PlaceView");
  const params = useParams();
  const [place, setPlace] = useState();
  const placeId = params.placeId

  useEffect(() => {
    try {
      return retrieveCity(sessionStorage.token, placeId, (error, placeId) => {
        if (error) {
          handleFeedback({ message: error.message, level: "error" });

          logger.warn(error.message);
        }

        setPlace(placeId);

        logger.debug("setPlace", placeId);
      });
    } catch (error) {
      handleFeedback({ message: error.message, level: "error" });

      logger.warn(error.message);
    }
  }, []);
  }


export default PlaceModal