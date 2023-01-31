import React from "react";
import "./App.css";
import HouseCard from "./components/HouseCard";
import Steps from "./components/Steps";
import AdminPage from "./AdminPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
      <Route exact path="/" element={<Home/>} />
        { <Route path="/" exact component={Home} /> }
        { <Route exact path="/admin" element={<AdminPage/>} /> }
      </Routes>
    </Router>
  );
}

const Home = () => (
  <div className="App">
    <div className="landing">
      <div className="landing-text">
        <p className="welcome mont-bold shadow">Welcome Home Properties</p>
        <p className="welcome2 mont-bold shadow">of North Carolina</p>

        <p className="intro-para mont-reg shadow">
          Owner financed homes for as little as 10% down. Check out our
          inventory below,
        </p>
      </div>
    </div>

    <div className="second-base">
      <p className="current-home-text mont-bold shadow">
        Current Homes Available
      </p>
      <HouseCard />
      <div className="second-base-bottom"></div>
    </div>
    <Steps />
  </div>
);

export default App;


