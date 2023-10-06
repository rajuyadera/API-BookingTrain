import HomeRoute from "./pages/home/HomeRoute";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchRoute from "./pages/searchJadwal/SearchRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeRoute />} />
        <Route path="/search" element={<SearchRoute/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
