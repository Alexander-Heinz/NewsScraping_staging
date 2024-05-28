//import ReactDOM from "react-dom/client"
import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./home"
import Table from "./table"


const App = () => (
<>
    <Router>
        <Routes>
            <Route path = "/" element = { <Home />} />
            <Route path = "/home" element = { <Home />} />
            <Route path = "/table" element = { <Table />} />
        </Routes>
    </Router>
</>
);
export default App;