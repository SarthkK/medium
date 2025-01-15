import AuthSignUp from "../components/AuthSignUp";
import Quote from "../components/Quote";

function Signup() {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1">
      <AuthSignUp />
      <div className="lg:block hidden">
        <Quote />
      </div>
    </div>
  );
}

export default Signup;
