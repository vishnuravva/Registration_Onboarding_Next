"use client";
import Image from "next/image";
import arrowBack from "../public/assets/arrow_back_ios_24px.svg";
import "../app/globals.css";
import Input from "./Input";
import { useReducer, useState } from "react";
import Button from "./Button";
import google from "../public/assets/google.svg";
import Link from "next/link";
import toast from "react-hot-toast";
import Header from "./Header";
import { useRouter } from "next/navigation";

const Register = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [passWordFocus, setPasswordFocus] = useState(false);

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const [formData, setFormdata] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  //   const

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setIsChecked(checked);
    }

    setFormdata((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.fullname || !formData.email || !formData.password) {
      toast.error("Please fill in all required fields");
      return;
    } else if (!isChecked) {
      toast.error("Please agree to terms & conditions");
      return;
    }

    // toast.success("Form submitted successfully!");

    // setFormdata({
    //   fullname: "",
    //   email: "",
    //   password: "",
    // });

    // router.push("/residency_info");

    const loadingToastId = toast.loading(
      "Saving your registration details...",
      {
        duration: 1000,
      }
    );

    // Simulate loading for 1 second
    setTimeout(() => {
      // Remove loading toast
      toast.dismiss(loadingToastId);

      // Show success toast
      toast.success("Registration successful!");

      // Reset form data
      setFormdata({
        fullname: "",
        email: "",
        password: "",
      });

      router.push("/residency_info");
    }, 1000);


    // Loading componet static

    // setIsLoading(true);

    // try {
    //   // Simulate an asynchronous form submission (replace with your actual submission logic)
    //   await new Promise((resolve) => setTimeout(resolve, 1000));

    //   // Reset form data and update UI as needed
    //   toast.success("Form submitted successfully!");
    //   setFormdata({
    //     fullname: "",
    //     email: "",
    //     password: "",
    //   });

    //   router.push("/residency_info");
    // } catch (error) {
    //   console.error("Form submission error:", error);
    //   toast.error("An error occurred during form submission");
    // } finally {
    //   setIsLoading(false);
    // }

  };
  return (
    <div className="d-flex flex-column register_comp">
      {/* <div className="m-5 d-flex justify-content-between">
        <div className="d-flex">
          <div>
            <Image src={arrowBack} width={20} height={20} alt="arrow-back" />
          </div>
          <div className="mx-2">
            <p>Back</p>
          </div>
        </div>
        <div>
          <p className="color_home my-0">Step 01/03</p>
          <p className="color_home fw-bold my-0">Personal Info</p>
        </div>
      </div> */}
      <Header navigateTo={"/"} steps={"Step 01/03"} title={"Personal Info."} />
      <div className="max-w-600 register_box_resp h-50 m-auto d-flex flex-column justify-content-center">
        <h1 className="fs-3 fw-bold">Register Individual Account!</h1>
        <p className="color_home">
          For the purpose of industry regulation, your details are required.
        </p>
        <form onSubmit={handleSubmit}>
          <div>
            <Input
              onChange={handleChange}
              name="fullname"
              value={formData.fullname}
              title={"Enter fullname"}
              type="text"
              placeholder="Enter fullname"
            />
            <Input
              onChange={handleChange}
              name="email"
              value={formData.email}
              title={"Enter email address"}
              type="email"
              placeholder="Enter email address"
            />
            {/* Password Field*/}
            <div className="d-flex flex-column">
              <p className="color_signin_input my-2">
                Create Password<sup>*</sup>
              </p>
              <div
                onFocus={() => setPasswordFocus(true)}
                onBlur={() => setPasswordFocus(false)}
                className={`${
                  passWordFocus ? "clicked_password_div" : ""
                } password_signin d-flex justify-content-between align-items-center`}
              >
                <input
                  name="password"
                  className=" my-0"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  value={formData.password}
                  onChange={handleChange}
                />
                {/* <div onClick={togglePasswordVisibility}>Show</div> */}
                <div
                  className="passBtn mx-4"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? "Hide" : "Show"}
                </div>
              </div>
            </div>

            {/* Checkbox input */}
            <div className="d-flex my-4 align-items-center">
              <input
                checked={isChecked}
                name="terms"
                onChange={handleChange}
                className="checkbox_input"
                type="checkbox"
              />
              <div
                href={"/"}
                className="cursor text-decoration-none mx-2 color_signin_input"
              >
                I agree to terms & conditions
              </div>
            </div>
            <div className="w-100 d-flex flex-column justify-content-center align-items-center">
              <div className="w-100">
                <button type="submit" className="register_btn w-100">
                  Register Account
                </button>
              </div>
              <div className="color_signin_input my-4">Or</div>
              <div className="w-100">
                <button className="google_btn w-100 d-flex justify-content-center  align-items-center mb-5">
                  <Image
                    src={google}
                    width={24}
                    height={24}
                    alt="google_logo"
                  />
                  <div className="mx-5">Register with Google</div>
                </button>
                {/* {isLoading ? (
                  <div>
                    <div className="spinner-grow text-primary" role="status">
                      <span className="sr-only"></span>
                    </div>
                    <div className="spinner-grow text-primary" role="status">
                      <span className="sr-only"></span>
                    </div>
                    <div className="spinner-grow text-primary" role="status">
                      <span className="sr-only"></span>
                    </div>
                    <div className="spinner-grow text-primary" role="status">
                      <span className="sr-only"></span>
                    </div>
                    <div className="spinner-grow text-primary" role="status">
                      <span className="sr-only"></span>
                    </div>
                    <div className="spinner-grow text-primary" role="status">
                      <span className="sr-only"></span>
                    </div>
                    <div className="spinner-grow text-primary" role="status">
                      <span className="sr-only"></span>
                    </div>
                  </div>
                ) : (
                  <div></div>
                )} */}
              </div>
            </div>
          </div>
        </form>
      </div>

      {/* <Input title={"Enter fullname"} /> */}
    </div>
  );
};

export default Register;
