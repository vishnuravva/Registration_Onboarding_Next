"use client";
import Header from "@/components/Header";
import LandingMain from "@/components/LandingMain";
import Input from "./Input";
import Button from "./Button";
import Image from "next/image";
import lock from "../public/assets/lock_24px.svg";
import tick from "../public/assets/Group.svg";
import "../app/globals.css";
import { useState } from "react";
import toast from "react-hot-toast";

const BankVerify = () => {
  const [bvnFocus, setBvnFocus] = useState(false);
  const [bvnNo, setBvnNo] = useState("");
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e) => {
    const { value } = e.target;

    // Check if the value consists of only numeric characters
    if (!/^\d*$/.test(value)) {
      // If not, do not update the state
      return;
    }

    setBvnNo(value);

    if (value.length === 11) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!bvnNo || !isValid) {
      return toast.error("Invalid Bank verification number");
    }

    toast.success("Verification successful");

    setBvnNo("");
    setIsValid(false);
  };

  return (
    <div  className="d-flex flex-column bank_verify_resp">
      <Header
        navigateTo={"residency_info"}
        steps={"Step 03/03"}
        title={"Bank Verification"}
      />

      <div className="max-w-600 bank_profile h-50 m-auto d-flex flex-column justify-content-center">
        <h1 className="fs-3 fw-bold">Complete Your Profile!</h1>
        <p claphone_no_divssName="color_home">
          For the purpose of industry regulation, your details are required.
        </p>
        <form onSubmit={handleSubmit}>
          <div>
            <div className="d-flex flex-column">
              <p className="color_signin_input my-2">
                Bank verification Number (BVN)
              </p>
              <div
                onFocus={() => setBvnFocus(true)}
                onBlur={() => setBvnFocus(false)}
                className={`${
                  bvnFocus ? "clicked_password_div" : ""
                } password_signin d-flex justify-content-between align-items-center`}
              >
                <input
                  name="bank"
                  className=" my-0"
                  type={"text"}
                  value={bvnNo}
                  placeholder="Enter bank verification number"
                  onChange={handleChange}
                />
                {isValid && (
                  <div className="mx-4">
                    <Image src={tick} width={20} height={20} alt="tick-input" />
                  </div>
                )}
              </div>
            </div>
            <Button
              styles={"save_btn border w-100 mt-5rem"}
              title={"Save & Continue"}
            />

            <div className="d-flex justify-content-center align-items-center my-4">
              <Image width={14} height={14} src={lock} alt="lock" />
              <div className="color_home mx-4">Your Info is safely secured</div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BankVerify;
