import HomeRoute from "./pages/home/HomeRoute";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchRoute from "./pages/searchJadwal/SearchRoute";
import PasenggerRoute from "./pages/pasenggerdata/PasenggerRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeRoute />} />
        <Route path="/search" element={<SearchRoute/>} />
        <Route path="/pasenggerdata" element={<PasenggerRoute/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
