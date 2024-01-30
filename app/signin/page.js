import Header from "@/components/Header";
import LandingMain from "@/components/LandingMain";
import Register from "@/components/Register";
import "../globals.css"


const SignIn = () => {
  return (
    <div className="d-flex signin_page">
      <LandingMain />
      <Register />
    </div>
  );
};

export default SignIn;
