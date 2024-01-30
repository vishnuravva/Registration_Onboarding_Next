import BankVerify from "@/components/BankVerify";
import Header from "@/components/Header";
import LandingMain from "@/components/LandingMain";

const Bank = () => {
  return (
    <div className="d-flex bank_page">
      <LandingMain />
      <BankVerify />
    </div>
  );
};

export default Bank;
