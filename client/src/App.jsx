import { useState } from "react";
import "./App.css";
import Navigation from "./components/Header";
import CarouselItem from "./components/CarouselItem";
import TrainForm from "./components/TrainForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <div className="">
          <Navigation />
        </div>
        <div className="inline-block h-[360px] bg-blue-800 pb-[55px] z-50 ">
          <CarouselItem />
        </div>
      </div>
      <div className="px-[100px] -translate-y-[60px] ">
        <TrainForm />
      </div>
    </>
  );
}

export default App;
