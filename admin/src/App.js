import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard/Dashboard";
import Rute from "./pages/rute/Rute";
import Stations from "./pages/stations/Station";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/login" element={[ ]} />
          <Route path="/dashboard" element={[ <Header/> , <Dashboard/>]} />
          <Route path="/stations" element={[ <Header/> , <Stations/>]} />
          <Route path="/rute" element={[ <Header/> , <Rute/>]} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
