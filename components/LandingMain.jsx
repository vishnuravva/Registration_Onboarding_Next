import "@/app/globals.css";
import Image from "next/image";
import logo from "../public/assets/Union.svg";
import tick from "../public/assets/Group.svg";
import vector from "../public/assets/vector.svg";
import Link from "next/link";

const LandingMain = () => {
  return (
    <div className="bg_image d-flex flex-column justify-content-between landing_resp">
      {/* Top Section */}
      <div className="d-flex align-items-center m-6">
        <Link href={"/"}>
          <Image src={logo} alt="logo" width={44} height={38} />
        </Link>
        <div className="text-white fs-5 fw-bold custom-font-600 mx-2 mt-2">
          Oasis
        </div>
      </div>

      {/* Center Section */}
      <div className="content m-8">
        <p className="text-white fs-7">
          The passage experienced a surge in popularity during the 1960s when
          Letraset used it on their dry-transfer sheets, and again during the
          90s as desktop publishers bundled the text with their software.
        </p>
        <div className="d-flex align-items-center">
          <div className="text-white">Vincent Obi</div>
          <Image
            className="mx-2"
            src={tick}
            width={16}
            height={16}
            alt="tick"
          />
        </div>
        <div className="w-90 d-flex justify-content-end">
          <Image src={vector} width={33} height={33} alt="vector" />
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default LandingMain;
