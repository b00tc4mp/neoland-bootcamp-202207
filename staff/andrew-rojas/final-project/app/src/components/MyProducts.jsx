// import { useLocation } from "react-router-dom";
import Search from "./Search"


function MyProducts({ onSearch }) {

  // const location = useLocation()
  
  return (
     <>  
      <div className="search">
        <Search  />
      </div>

        <div className="grid-products">
          <div className="my-products">   
          </div>
        </div>
      </>  
  )
}

export default MyProducts

