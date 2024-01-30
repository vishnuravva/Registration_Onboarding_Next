import Image from "next/image";
import arrowBack from "../public/assets/arrow_back_ios_24px.svg";
import Link from "next/link";
import "../app/globals.css"

const Header = (props) => {
  const { steps, title, navigateTo } = props;
  
  return (
    <div className="d-flex justify-content-between header_resp">
      <div className="d-flex">
        <div>
          <Link href={`/${navigateTo}`}>
            <Image src={arrowBack} width={20} height={20} alt="arrow-back" />
          </Link>
        </div>
        <div className="mx-2">
          <p className="color_home">Back</p>
        </div>
      </div>
      <div>
        <p className="color_home my-0">{steps}</p>
        <p className="color_home fw-bold my-0">{title}</p>
      </div>
    </div>
  );
};

export default Header;
