import React from "react";
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "./Home/home";


function App() {
  return (

<Router>
  <Routes>
    <Route exact path="/" element={<Home/>} />
  </Routes>
</Router>

  );
}

export default App;
