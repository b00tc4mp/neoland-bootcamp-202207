import { useState, useEffect } from "react";
import Loggito from "../utils/Loggito";
import withContext from "../utils/withContext";
import Menu from "../components/Menu";
import CreateProduct from "../components/CreateProduct";
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

  const handleNavigateToProduct = () => {
    navigate("/product");
  };

  const handleNavigateMyProducts = () => {
    navigate("/products")
  };

   const handleNavigateInput = () => {
     navigate("/inputs")
   };

   const handleNavigateOutput = () => {
     navigate("/outputs")
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
    navigate("/")
  };


  var title = 'Home'  
  if(location.pathname === '/product') title = 'Create Product'

  if(location.pathname === '/products') title = 'My Products'

  if(location.pathname === '/inputs') title = 'Product Input'

  if(location.pathname === '/outputs') title = 'Product Output'

  if(location.pathname === '/reports') title = ' Reports'

  if(location.pathname === '/settings') title = 'Settings'
  
  logger.info("return");

  return (
    <main className="register-page">
      <div className="header"> 
      <header> 
        <h2 className="title"> {title} </h2> 
      </header>
      <button className="button-back" onClick={handleNavigateToHome}><img src={back} alt="logo de back" className="logo-back"/></button>
      </div>
      <Routes>
        <Route path="/*" element={<Menu onHomeClick={handleNavigateToHome} onArticleClick={handleNavigateToProduct} onProductsClick={handleNavigateMyProducts} onInputsClick={handleNavigateInput} onOutputsClick={handleNavigateOutput} onReportsClick={handleNavigateReport} onSettingsClick={handleNavigateSetting} onLogoutClick={handleNavigateLogout} />} />
        <Route path="/product" element={<CreateProduct/>} />
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
