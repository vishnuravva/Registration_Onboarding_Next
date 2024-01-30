"use client";
import Image from "next/image";
import Link from "next/link";
import polygon from "../public/assets/polygon.svg";
import arrowRight from "../public/assets/arrow-right.svg";
import polygon_unfill from "../public/assets/polygon_unfill.svg";
import { useCallback, useState } from "react";
import user from "../public/assets/user.svg";
import briefcase from "../public/assets/briefcase.svg";
import "../app/globals.css";

const Joinus = () => {
  const [activeBox, setActiveBox] = useState(1);

  const handleBoxClick = (boxIndex) => {
    setActiveBox(activeBox === boxIndex ? null : boxIndex);
  };
  return (
    <div className="d-flex flex-column w-60 join_resp mb-5">
      <div className="d-flex justify-content-end account">
        <p className="mb-0 join_header_resp">
          Already have an account?{" "}
          <Link className="text-decoration-none" href={"/signin"}>
            Sign in
          </Link>
        </p>
      </div>
      <div className="max-w-500 join_max_w_resp mx-auto h-50 d-flex flex-column justify-content-center">
        <div className="d-flex flex-column">
          <h1 className="mb-2 fw-bold joinus_title_resp">Join Us!</h1>
          <p className="color_home joinus_subtitle_resp">
            To begin this journey, tell us what type of account you’d be
            opening.
          </p>
        </div>
        <div className="">
          <div
            onClick={() => handleBoxClick(1)}
            className={`${
              activeBox === 1 ? "active_br_bg" : ""
            } bg_join p-4 d-flex justify-content-between align-items-center`}
          >
            <div className="bg_polygon position-relative">
              <Image
                className="poly_fill"
                src={polygon}
                width={52}
                height={52}
                alt="polygon_logo"
              />
              <div className="icons_absolute">
                <Image
                  className="poly_icon"
                  src={user}
                  width={20}
                  height={20}
                  alt="user"
                />
              </div>
            </div>
            <div className="mx-4">
              <p className="fw-bold individual my-0 mb-1">Individual</p>
              <p className="color_home my-0  personal">
                Personal account to manage all you activities.
              </p>
            </div>
            {activeBox === 1 ? (
              <div>
                <Link href={"/signin"}>
                  <Image
                    src={arrowRight}
                    width={20}
                    height={20}
                    alt="arrow-right"
                  />
                </Link>
              </div>
            ) : (
              <div></div>
            )}
          </div>
          <div
            onClick={() => handleBoxClick(2)}
            className={`${
              activeBox === 2 ? "active_br_bg" : ""
            } bg_join p-4 mt-4 d-flex justify-content-between align-items-center`}
          >
            <div className="bg_polygon_unfill position-relative">
              <Image
                className="poly_fill"
                src={polygon_unfill}
                width={52}
                height={52}
                alt="polygon_logo"
              />
              <div className="icons_absolute">
                <Image
                  className="poly_icon"
                  src={briefcase}
                  width={20}
                  height={20}
                  alt="user"
                />
              </div>
            </div>
            {/* <div className=""></div> */}
            <div className="mx-4">
              <p className="fw-bold business my-0 mb-1">Business</p>
              <p className="color_home my-0 own">
                Own or belong to a company, this is for you.
              </p>
            </div>
            {activeBox === 2 ? (
              <div className="arrow">
                <Image
                  src={arrowRight}
                  width={20}
                  height={20}
                  alt="arrow-right"
                />
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Joinus;
