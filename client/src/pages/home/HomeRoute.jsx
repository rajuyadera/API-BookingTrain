import Navigation from "../../components/navbar/NavigationBar";
import CarouselItem from "../../components/carousel/CarouselItem";
import TrainForm from "../../components/trainForm/TrainForm";


const HomeRoute = () => {
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
};

export default HomeRoute;
