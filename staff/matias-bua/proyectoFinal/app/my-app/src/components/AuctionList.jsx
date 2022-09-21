import Loggito from "../utils/Loggito";
import "./AuctionList.css";
import AuctionImage from "../img/Neoland.jfif";
// import { useState } from "react";
import createBid from "../logics/createBid";
import withContext from "../utils/withContext";

function AuctionList({ auctions /*context:{ handleFeedBack }*/ }) {
  const logger = new Loggito("List Auctions");

  // const [ activeButton, setactiveButton ] = useState(false)

  // if(auctions.currentValue < price){
  //   setactiveButton(true)
  // }else{
  //   setactiveButton(false)
  // }

  const handleBidSubmit = (event) => {
    event.preventDefault();

    const form = event.target;

    const {
      newBid: { value: newBid },
      dataset: { auctionId },
    } = form;
    
    try {
      createBid(sessionStorage.token, auctionId, newBid ,/*date,*/ (error) => {
        if (error) {
          // handleFeedBack({ message: error.message, level: 'warning'})

          logger.warn(error.message);

          return;
        }

        // handleFeedBack({ message: '!New bid Created¡', level:'success'})

        form.reset();
      });
    } catch (error) {
      // handleFeedBack({ message: error.message, level: 'warning' })

      logger.warn(error.message);
    }
  };

  return (
    <ul className="AuctionList">
      {auctions.map((auction) => (
        <li className="RenderAuctionsContainer" key={auction.id}>
          <div className="homePost">
            <h3 className="titleAuction">{auction.title}</h3>
            <img src={AuctionImage} alt="50X50 PIXELES" />
            <p>{auction.description}</p>

            <form
              className="priceAndButton"
              onSubmit={handleBidSubmit}
              data-auction-id={auction.id}
            >
              <label htmlFor=""></label>
              <input
                type="number"
                name="newbid"
                id="newBid"
                defaultValue={
                  auction.currentValue + 1
                } /*onChange={handleChangeInput}*/
              />
              <button id="bidButton" type="submit" /*disabled={!buttonActive}*/>
                Bid
              </button>
            <p>€ {auction.currentValue}</p>
            </form>

            <div className="endDate">
              <p className="DateP">{auction.finalDate}</p>
                End date
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default withContext(AuctionList);
