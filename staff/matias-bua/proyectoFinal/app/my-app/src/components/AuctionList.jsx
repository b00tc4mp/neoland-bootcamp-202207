import Loggito from "../utils/Loggito";
import "./AuctionList.css";
import AuctionImage from "../img/Neoland.jfif"
// import withContext from "../utils/withContext";

function AuctionList({ auctions }) {
  const logger = new Loggito("List Auctions");

  logger.info("Return");

  return (
    <ul className="AuctionList">
      {auctions.map((auction) => (
        <li className="RenderAuctionsContainer" key={auction.id}>
          <div className="homePost">
            <h3 className="titleAuction">{auction.title}</h3>
            <img
              src={AuctionImage}
              alt="50X50 PIXELES"
            />
            <p>{auction.description}</p>
            <p>€ {auction.value}</p>
            <p>{auction.finalDate}</p>

            
          </div>
        </li>
      ))}
    </ul>
  );
}

export default AuctionList;
