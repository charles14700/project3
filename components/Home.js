import Image from "next/image";
import React from "react";
import Shipping from "./Shipping";
const Home = () => {
  return (
    <div className="h-screen w-full bg-blue-500">
      <div className="relative top-[5rem] flex justify-center">
        <Image src="/incog.png" width={100} height={100} alt="image"/>
      </div>
      <div className="relative top-[5rem] flex justify-center text-black font-bold">
        <h3>Lets pay with paypal</h3>
      </div>
      <Shipping />
    </div>
  );
};

export default Home;
