import create from "zustand";
import { persist } from "zustand/middleware";

let store2 = (set) => ({
  fullname: "",
  address: "",
  city: "",
  postcode: "",
  country: "",
  paymentmethod: "",

  updfullname: (name) => {
    set((state) => ({
      fullname: name
    }));
  },

  updaddress: (address) => {
    set((state) => ({
      address: address,
    }));
  },

  updcity: (city) => {
    set((state) => ({
      city: city,
    }));
  },

  updpostcode: (postcode) => {
    set((state) => ({
      postcode: postcode,
    }));
  },

  updcountry: (country) => {
    set((state) => ({
      country: country,
    }));
  },
  updpaymentmethod: (payment) => {
    set((state) => ({
      paymentmethod: payment,
    }));
  },
});

store2 = persist(store2, { name: "shipping address" });

const useStore2 = create(store2);

export default useStore2;
