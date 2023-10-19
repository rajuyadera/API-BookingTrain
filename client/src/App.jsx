import HomeRoute from "./pages/home/HomeRoute";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchRoute from "./pages/searchJadwal/SearchRoute";
import PasenggerRoute from "./pages/pasenggerdata/PasenggerRoute";
import PaymentRoute from "./pages/payment/PaymentRoute";
import SelectSeatRoute from "./pages/selectSeat/SelectSeatRouter"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeRoute />} />
        <Route path="/search" element={<SearchRoute />} />
        <Route path="/pasenggerdata" element={<PasenggerRoute />} />
        <Route path="/selectseat" element={<SelectSeatRoute />} />
        <Route path="/payment" element={<PaymentRoute />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
