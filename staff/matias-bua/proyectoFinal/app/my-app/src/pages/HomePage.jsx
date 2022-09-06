import React from "react";
// import { Routes, Route } from 'react-router-dom'
import withContext from "../utils/withContext";

function HomePage () {

    return  <div className="home-page container container--full container--distributed">
            <main className="main">
                <h1>hola mmundo crueeleezzz</h1>
            </main>

            <footer className="footer">
                {/* <Routes>
                    <Route path="/" element={<Settings/>} />
                    <Route path="settings" element={<Logout />} />
                </Routes> */}
            </footer>
        </div>
           
}

export default withContext(HomePage)