import AuthSignIn from "../components/AuthSignIn";
import Quote from "../components/Quote";

function Signin() {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1">
      <AuthSignIn />
      <div className="lg:block hidden">
        <Quote />
      </div>
    </div>
  );
}

export default Signin;
