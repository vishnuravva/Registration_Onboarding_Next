"use client";
import Image from "next/image";
import arrowBack from "../public/assets/arrow_back_ios_24px.svg";
import "../app/residency.css";
import Input from "./Input";
import { useEffect, useReducer, useState } from "react";
import Button from "./Button";
import google from "../public/assets/google.svg";
import Link from "next/link";
import toast from "react-hot-toast";
import Header from "./Header";
import { useRouter } from "next/navigation";
import lock from "../public/assets/lock_24px.svg";

const Residency = () => {
  const router = useRouter();
  const [countries, setCountries] = useState([]);
  const [phoneNoFocus, setPhoneNoFocus] = useState(false);
  const [countryFocus, setCountryFocus] = useState(false);

  const [phone, setPhone] = useState("");
  const [residencyData, setResidencyData] = useState({
    address: "",
    country: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { value, name } = e.target;

    setResidencyData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handlePhone = (e) => {
    const { name, value } = e.target;

    if (!/^\d*$/.test(value)) {
      // If not, do not update the state
      return;
    }
    // Validate the input value
    setPhone(value);
    setResidencyData((prev) => ({
      ...prev,
      phone: phone,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!phone) {
      return toast.error("Phone number is required.");
    }

    // Validate address
    if (!residencyData.address.trim()) {
      return toast.error("Address is required.");
    }

    // Validate country
    if (!residencyData.country.trim()) {
      return toast.error("Country is required.");
    }

    // If all validations pass, proceed with the form submission
    // console.log(residencyData);
    toast.success("Profile updated successfully.");
    setResidencyData({
      address: "",
      country: "",
    });
    setPhone("");
    router.push("/bank_verification");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cachedData = localStorage.getItem("countriesData");
        if (cachedData) {
          // If data is found in the local storage, use it
          setCountries(JSON.parse(cachedData));
        } else {
          // Otherwise, fetch data from the API
          const response = await fetch("https://restcountries.com/v3.1/all");
          const data = await response.json();
          setCountries(data);

          // Cache the fetched data in local storage
          localStorage.setItem("countriesData", JSON.stringify(data));
        }
      } catch (error) {
        console.error("Error fetching country data:", error);
      }
    };

    fetchData();
  }, []);
  // console.log(countries);

  return (
    <div className="d-flex flex-column residency_comp">
      <Header
        navigateTo={"signin"}
        steps={"Step 02/03"}
        title={"Residency Info."}
      />

      <div className="max-w-600 h-75 m-auto d-flex flex-column residency_comp">
        <h1 className="fs-3 fw-bold">Complete Your Profile!</h1>
        <p className="color_home">
          For the purpose of industry regulation, your details are required.
        </p>
        <form onSubmit={handleSubmit}>
          <div>
            {/* Phone number */}
            <p className="color_signin_input my-0 mb-2">Phone Number</p>
            <div
              onFocus={() => setPhoneNoFocus(true)}
              onBlur={() => setPhoneNoFocus(false)}
              className={` ${
                phoneNoFocus ? "clicked_password_div" : ""
              } d-flex phone_no_div`}
            >
              <select className="country_select">
                {/* <option className="color_input_signin" defaultChecked>
                  
                </option> */}
                {countries?.map((country, i) => (
                  <option key={i}>
                    {country.flag} {country?.idd?.root}
                    {country?.idd?.suffixes?.length > 0
                      ? country?.idd?.suffixes[0]?.slice(0, 2)
                      : ""}
                  </option>
                ))}
              </select>
              <input
                type="text"
                onChange={handlePhone}
                value={phone}
                className="phone_no"
              />
            </div>

            <Input
              name="address"
              value={residencyData.address}
              title={"Your Address"}
              type="text"
              onChange={handleChange}
              placeholder="Enter Address"
            />
            {/* Country Input*/}
            <p className="color_signin_input my-0 mb-2">Country of residence</p>
            <div
              className={`${
                countryFocus ? "clicked_password_div" : ""
              } country_div`}
              onFocus={() => setCountryFocus(true)}
              onBlur={() => setCountryFocus(false)}
            >
              <select
                onChange={handleChange}
                value={residencyData.country}
                name="country"
                className="country_input"
              >
                <option className="color_input_signin" defaultChecked>
                  Please Select
                </option>
                {countries
                  ?.sort((a, b) =>
                    a.name?.common.localeCompare(b.name?.common, undefined, {
                      sensitivity: "base",
                    })
                  )
                  .map((country, i) => (
                    <option key={i}>
                      {country.flag} {country?.name?.common}
                    </option>
                  ))}
              </select>
            </div>

            <Button
              styles={"save_btn border w-100 mt-5"}
              title={"Save & Continue"}
            />

            <div className="d-flex justify-content-center align-items-center mb-5 mt-4">
              <Image width={14} height={14} src={lock} alt="lock" />
              <div className="color_home mx-4">Your Info is safely secured</div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Residency;
