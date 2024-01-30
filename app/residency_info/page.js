"use client";
import Header from "@/components/Header";
import LandingMain from "@/components/LandingMain";
import Residency from "@/components/Residency";
import { useState, useEffect } from "react";

const ResidencyInfo = () => {
  
  return (
    <div className="d-flex residency_page">
      <LandingMain />
      <Residency />
    </div>
  );
};

export default ResidencyInfo;
