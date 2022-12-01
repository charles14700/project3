import { useRouter } from "next/router";
import React, {  useEffect, useState } from "react";
import useStore2 from "../store2";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { PayPalButtons, PayPalScriptProvider} from "@paypal/react-paypal-js";
import toast, { Toaster } from "react-hot-toast";


export default function PaymentScreen() {
  const Amount = useStore2(state=> state.address)
  const initialOptions = {
    "client-id": "test",
    currency: "USD",
    intent: "capture",
    "data-client-token": "abc123xyz==",
};


  const router = useRouter();
  const paymentMethod = useStore2(state=> state.paymentmethod)
  const updpaymentmethod =useStore2(state=> state.updpaymentmethod)


  const submitHandler = (e) => {
    e.preventDefault();
    if (!paymentMethod) {
      return toast.error('Payment method is required');
    }
    

  };
  useEffect(() => {
 
  }, []);


  const [show, setShow] = useState(false);
  const [success, setSuccess] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState("");
  const [orderID, setOrderID] = useState(false);

  

  return (
    <>
    <Header/>
    <Footer/>
   
    <div className="mt-[5rem] bg-blue-400 h-[90rem] px-10 z-30 flex justify-center">
      <div className="flex flex-col">
  
      <form className="mx-auto max-w-screen-md" onSubmit={submitHandler}>
        <h1 className="mb-4 text-xl text-center">Payment Method</h1>
        {["PayPal", "Stripe", "CashOnDelivery", "Mpesa"].map((payment) => (
          <div key={payment} className="mb-4">
            <input
              name="paymentMethod"
              className="p-2 outline-none focus:ring-0"
              id={payment}
              type="radio"
              checked={paymentMethod === payment}
              onChange={() => updpaymentmethod(payment)}
            />

            <label className="p-2" htmlFor={payment}>
              {payment}
            </label>
          </div>
        ))}
        <div className="mb-4 flex justify-between">
          <button
            onClick={() => router.push("/")}
            type="button"
            className="default-button"
          >
            Back
          </button>
          
        </div>
      </form>
      
      <div className=" relative top-[5rem] w-[40%] z-20">
        <div className="w-full">
{/*       
        <PayPalButtons  style={{ layout: "vertical" }}
           createOrder={createOrder}
           onApprove={onApprove}/>
               */}
             <PayPalScriptProvider options={{ "client-id": "AVEbJol5gNajdPTpCbdv165Jb14mdQS_YaE_6Edv825mLAUgTbhhevTxp1WN6gNvAhCndEwaCxAN5mVF" }}>
            <PayPalButtons createOrder={(data, actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                                amount: {
                                    value: Amount,
                                },
                            },
                        ],
                    });
                }}
                onApprove={(data, actions) => {
                    return actions.order.capture().then((details) => {
                        const name = details.payer.name.given_name;
                        toast.success(`Transaction completed by ${name}`);
                    });
                }}/>
        </PayPalScriptProvider>
        </div>
     
      </div>
      </div>
      <Toaster
  position="top-center"
  reverseOrder={false}
/>
            
      </div>
      </>
  );
}

