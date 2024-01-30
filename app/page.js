import Image from "next/image";
// import styles from "./page.module.css";
import "./globals.css"
import LandingMain from "@/components/LandingMain";
import Joinus from "@/components/Joinus";

export default function Home() {
  return (
    <div className="d-flex joinus">
      <LandingMain />
      <Joinus />
    </div>
  );
}