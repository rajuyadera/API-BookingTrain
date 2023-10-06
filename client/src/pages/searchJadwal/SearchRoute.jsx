import CarouselItem from "../../components/carousel/CarouselItem";
import Navigation from "../../components/navbar/NavigationBar";
import TrainForm from "../../components/trainForm/TrainForm";
import Search from "./Search";

const SearchRoute = () => {
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
      <div className="translate-x-[0px]" id="content">
        <Search />
      </div>
    </>
  );
};

export default SearchRoute;
