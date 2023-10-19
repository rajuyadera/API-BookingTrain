import Navigation from "../../components/navbar/NavigationBar";
import Payment from "./Payment";

const PaymentRoute = () => {
  return (
    <>
      <div>
        <div className="">
          <Navigation />
        </div>
      </div>
      <div className="translate-x-[0px]" id="content">
        <Payment />
      </div>
    </>
  );
};

export default PaymentRoute;
