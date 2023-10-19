import { useSelector } from "react-redux";

const Payment = () => {
  const { customerTitle, customerName, customerIdentityType, customerNoIdentity, noTelp, address } = useSelector(state => state.customer);
  const {pasenggerTitle, pasenggerName, pasenggerIdentityType, pasenggerNoIdentity} = useSelector(state => state.pasengger)


  return (
    <>
    <h1>title customer : {customerTitle}</h1>
    <h1>name customer : {customerName}</h1>
    <h1>title pasengger : {pasenggerTitle}</h1>
    <h1>name pasengger : {pasenggerName}</h1>
    </>
  )
};

export default Payment;
