import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import useStore2 from "../store2";

const Shipping = () => {
  const FullName = useStore2((state) => state.fullname);
  const Address = useStore2((state) => state.address);
  const City = useStore2((state) => state.city);
  const PostalCode = useStore2((state) => state.postcode);
  const Country = useStore2((state) => state.country);
  const updfullname = useStore2((state) => state.updfullname);
  const updaddress = useStore2((state) => state.updaddress);
  const updcity = useStore2((state) => state.updcity);
  const updpostcode = useStore2((state) => state.updpostcode);
  const updcountry = useStore2((state) => state.updcountry);

  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm();

  const router = useRouter();

  useEffect(() => {
    setValue("fullName", FullName);
    setValue("address", Address);
    setValue("city", City);
    setValue("postalcode", PostalCode);
    setValue("country", Country);
  }, [FullName, Address, City, PostalCode, Country, setValue]);

  function submitHandler({ fullName, address, city, postalcode, country }) {
    updfullname(fullName);
    updaddress(address);
    updcity(city);
    updpostcode(postalcode);
    updcountry(country);
    router.push("/payment");
  }

  console.log();
  return (
    <div className="mt-20 p-4 text-black">
      <form
        className="mx-auto max-w-screen-md"
        onSubmit={handleSubmit(submitHandler)}
      >
        <div className="mb-4">
          <label className=" text-black">Cashout platform</label>
          <input
            className="w-full"
            autoFocus
            {...register("fullName", {
              required: "Please enter full name",
            })}
          />
          {errors.fullName && (
            <div className="text-red-500">{errors.fullName.message}</div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="address">Amount</label>
          <input
            className="w-full"
            id="address"
            {...register("address", {
              required: "Please enter Amount",
              minLength: { value: 1, message: "Amount is more than 1 chars" },
            })}
          />
          {errors.address && (
            <div className="text-red-500">{errors.address.message}</div>
          )}
        </div>

        <div className="mb-4 flex justify-between">
          <button className="primary-button">Next</button>
        </div>
      </form>
    </div>
  );
};
export default Shipping;
