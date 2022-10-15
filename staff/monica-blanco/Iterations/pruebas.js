<Route path="search" element={<Search onLinkClick={handleNavigationToHome}/>} />

       
        <div>
        <Routes>
        <Route path="login" element={sessionStorage.token ? <Navigate to="/" /> : <Login onLogin={handleNavigationToHome} />} />
       <Route path='*/' element={sessionStorage.token ? <Home onLogoutClick={handleLogoutClick} /> : <Navigate to="login" />} />
         </Routes>
        </div> 

        <Header/>
        
        <div>
        <Routes>
       <Route path="login" element={sessionStorage.token ? <Navigate to="/" /> : <Login onLinkClick={handleNavigationToRegister} onLogIn={handleNavigationToHome} />} />
    <Route path="register" element={ <Register onLinkClick={handleNavigationToLogin} />} />
         <Route path="/*" element={sessionStorage.token ? <Home onLogoutClick={handleLogoutClick} /> : <Navigate to="login" />} />
        </Routes>      
         </div>
    

        
    // npm start
{/* <PhotoGaleria/> */}
                    //     <div className="flex w-full h-screen">
                    //   <div className="w-full items-center justify-center lg:w-1/2">
                    
 
                    // <Register/>
                    //   </div>
                    //   <div className="hidden relative lg:flex h-full w-1/2 items-center justify-center h-full bg-gray-200">
                    //     <div className="w-60 h-60 bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-bounce" />
                    //         <div className="w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg" />
                    //       </div>
                    //     </div>


                    <div class="transform scale-110 -rotate-6">
                    <img
                                  className="object-cover w-full border md:container md:mx-auto"
                                  src="https://i.pinimg.com/736x/e8/cc/9f/e8cc9f1cfd4528f96951586bb8bb6fa5--the-office-jam.jpg"
                              />
                    </div>
                    <div class="col-start-3 transform scale-75 rotate-6 translate-x-2 translate-y-15">
                    <img
                                  className="object-cover w-full border"
                                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFZE2kdgDdtM5UMzw1DC9Ri0E-P4_FgbAw3w&usqp=CAU"
                              />
                    </div>
                    <div class="col-start-3 transform scale-75 rotate-6 translate-x-2 translate-y-15">
                    <img
                                  className="object-cover w-full border"
                                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFZE2kdgDdtM5UMzw1DC9Ri0E-P4_FgbAw3w&usqp=CAU"
                              />
                    </div>
                    <div class="col-start-3 transform scale-75 rotate-6 translate-x-2 translate-y-15">
                    <img
                                  className="object-cover w-full border"
                                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFZE2kdgDdtM5UMzw1DC9Ri0E-P4_FgbAw3w&usqp=CAU"
                              />
                    </div>
                    <div class="col-start-3 transform scale-75 rotate-6 translate-x-2 translate-y-15">
                    <img
                                  className="object-cover w-full border"
                                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFZE2kdgDdtM5UMzw1DC9Ri0E-P4_FgbAw3w&usqp=CAU"
                              />
                    </div>
                    <div class="col-start-3 transform scale-75 rotate-6 translate-x-2 translate-y-15">
                    <img
                                  className="object-cover w-full border"
                                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFZE2kdgDdtM5UMzw1DC9Ri0E-P4_FgbAw3w&usqp=CAU"
                              />
                    </div>
                    
                    
                    <div class="transform scale-150 translate-y-11">
                    <img
                                  className="object-cover w-full border"
                                  src="https://ovacen.com/wp-content/uploads/2014/11/oficinas-con-arte.jpg"
                              />
                    </div>
                    
                    
                    <div class="transform translate-y-24">
                    <img
                                  className="object-cover w-full border md:container md:mx-auto"
                                  src="https://i.pinimg.com/736x/e8/cc/9f/e8cc9f1cfd4528f96951586bb8bb6fa5--the-office-jam.jpg"
                              />
                    </div>
                    
                    
                    
                    <div class="row-start-1 col-start-2 col-span-2 transform translate-x-20 translate-y-4">
                    <img
                                  className="object-cover w-full border md:container md:mx-auto"
                                  src="https://s3-eu-west-1.amazonaws.com/pa-digital-blog-pro/~paginaad/wp-content/uploads/2017/11/07174846/oficinas-mejores-mundo.jpg"
                              />
                    </div>
                  </div>




++++++++++++++
    {/* <div>
    
  </div> */}
  // <div class="grid grid-flow-col grid-rows-2 grid-cols-3 gap-8">
  //   <div class="transform scale-110 -rotate-6">
  //   <img
  //                 className="object-cover w-full border md:container md:mx-auto"
  //                 src="https://i.pinimg.com/736x/e8/cc/9f/e8cc9f1cfd4528f96951586bb8bb6fa5--the-office-jam.jpg"
  //             />
  //   </div>
  
  //   <div class="col-start-3 transform scale-75 rotate-6 translate-x-2 translate-y-15">
  //   <img
  //                 className="object-cover w-full border"
  //                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFZE2kdgDdtM5UMzw1DC9Ri0E-P4_FgbAw3w&usqp=CAU"
  //             />
  //   </div>
  
  //   <div class="col-start-3 transform scale-75 rotate-6 translate-x-2 translate-y-15">
  //   <img
  //                 className="object-cover w-full border"
  //                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFZE2kdgDdtM5UMzw1DC9Ri0E-P4_FgbAw3w&usqp=CAU"
  //             />
  //   </div>
    
    
  //   <div class="transform scale-150 translate-y-11">
  //   <img
  //                 className="object-cover w-full border"
  //                 src="https://ovacen.com/wp-content/uploads/2014/11/oficinas-con-arte.jpg"
  //             />
  //   </div>
    
    
  //   <div class="transform translate-y-24">
  //   <img
  //                 className="object-cover w-full border md:container md:mx-auto"
  //                 src="https://i.pinimg.com/736x/e8/cc/9f/e8cc9f1cfd4528f96951586bb8bb6fa5--the-office-jam.jpg"
  //             />
  //   </div>
    
    
    
  //   <div class="row-start-1 col-start-2 col-span-2 transform translate-x-20 translate-y-4">
  //   <img
  //                 className="object-cover w-full border md:container md:mx-auto"
  //                 src="https://s3-eu-west-1.amazonaws.com/pa-digital-blog-pro/~paginaad/wp-content/uploads/2017/11/07174846/oficinas-mejores-mundo.jpg"
  //             />
  //   </div>
  // </div>