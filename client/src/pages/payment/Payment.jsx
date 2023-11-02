import { useRuteStore } from "../../features/rute/ruteSlice";


const Payment = () => {
  const {userData} = useRuteStore() 
  console.log(userData.from)


  return (
    <>
    <h1>title customer : {userData.from}</h1>
    </>
  )
};

export default Payment;
