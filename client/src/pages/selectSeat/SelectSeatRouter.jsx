import Navigation from "../../components/navbar/NavigationBar";
import SelectSeat from "./SelectSeat";

const SearchRoute = () => {
  return (
    <>
      <div>
        <div className="">
          <Navigation />
        </div>
      </div>

      <div className="translate-x-[0px]" id="content">
        <SelectSeat />
      </div>
    </>
  );
};

export default SearchRoute;
