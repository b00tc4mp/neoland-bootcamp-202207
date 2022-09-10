import { useState, useEffect } from "react";
import Loggito from "../utils/Loggito";
import retrieveUser from "../logic/retrieveUser";
import withContext from "../utils/withContext";
import Menu from "../components/Menu";
import CreateArticle from "../components/CreateArticle";
import MyProducts from "../components/MyProducts";
import ProductInput from "../components/ProductInput";
import ProductOutput from "../components/ProductOutput";
import Reports from "../components/Reports"
import Settings from "../components/settings"
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import back from "../assets/back.jpg"


function HomePage({ onLogoutClick, context: { handleFeedback } }) {
  const logger = new Loggito("HomePage");
  const navigate = useNavigate();
  const location = useLocation();

  

  const [ setName ] = useState(null);

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

        setName(user.name)

        logger.debug("setName", user.name);
      })
    } catch (error) {
      handleFeedback({ message: error.message, level: "error" });

      logger.warn(error.message);
    }
  });

  const handleNavigateToArticle = () => {
    navigate("/article");
  };

  const handleNavigateMyProduct = () => {
    navigate("/products")
  };

   const handleNavigateInput = () => {
     navigate("/inputs")
   };

   const handleNavigateOutput = () => {
     navigate("/Output")
   };

   const handleNavigateReport = () => {
     navigate("/reports")
   };

   const handleNavigateSetting = () => {
     navigate("/settings")
   };

  const handleNavigateLogout = () => {
   navigate("/login")
   };
  
  const handleNavigateToHome = () => {
    //TODO
  };


  var title = 'Home'  
  if(location.pathname === '/article') title = 'Create Article'

  if(location.pathname === '/products') title = 'My Products'

  if(location.pathname === '/input') title = 'Product Input'

  if(location.pathname === '/output') title = 'Product Output'

  if(location.pathname === '/reports') title = ' Reports'

  if(location.pathname === '/settings') title = 'Settings'
  
  logger.info("return");

  return (
    <main className="register-page">
      <div className="header"> 
      <header> 
        <h2 className="title"> {title} </h2> 
      </header>
      <button className="button-back"><img src={back} alt="logo de back" className="logo-back"/></button>
      </div>
      <Routes>
        <Route path="/*" element={<Menu onHomeClick={handleNavigateToHome} onArticleClick={handleNavigateToArticle} onProductsClick={handleNavigateMyProduct} onInputsClick={handleNavigateInput} onOutputsClick={handleNavigateOutput} onReportsClick={handleNavigateReport} onSettingsClick={handleNavigateSetting} onLogoutClick={handleNavigateLogout} />} />
        <Route path="/article" element={<CreateArticle/>} />
        <Route path="/products" element={<MyProducts/>} />
        <Route path="/inputs" element={<ProductInput/>} />
        <Route path="/outputs" element={<ProductOutput/>} />
        <Route path="/reports" element={<Reports/>} />
        <Route path="/settings" element={<Settings/>} />
      

      
      </Routes>
    </main>
  );

}

export default withContext(HomePage);
