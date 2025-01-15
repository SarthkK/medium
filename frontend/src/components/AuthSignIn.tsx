import { SigninInput } from "@sarthkkharwal/medium-common";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LabelledInput } from "./LabelledInput";
import axios from "axios";
import { BACKEND_URL } from "../config";

function AuthSignIn() {
  const navigate = useNavigate();
  const [error, setError] = useState<boolean>(false);
  const [postInputs, setPostInputs] = useState<SigninInput>({
    email: "",
    password: "",
  });
  async function sendRequest() {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/signin`,
        postInputs
      );
      console.log(response);
      const token = response.data;
      if (!token.jwt) throw error;
      localStorage.setItem("Authorization", token.jwt);
      navigate("/blogs");
    } catch (error) {
      setError(true);
      console.error(error);
      setTimeout(() => {
        setError(false);
      }, 4000);
    }
  }
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col gap-2">
        <p className="text-3xl font-extrabold px-10">Log into an Account</p>
        <p className="text-slate-400 text-center">
          Don't have an account?{" "}
          <Link to={"/signup"} className="underline">
            Sign up
          </Link>
        </p>
        <LabelledInput
          label={"Email"}
          placeholder={"example@abc.com"}
          onChange={(e) => {
            setPostInputs((c) => {
              return {
                ...c,
                email: e.target.value,
              };
            });
          }}
        />
        <LabelledInput
          label={"password"}
          type="password"
          placeholder={""}
          onChange={(e) => {
            setPostInputs((c) => {
              return {
                ...c,
                password: e.target.value,
              };
            });
          }}
        />
        {error ? (
          <p className="text-red-500 text-sm text-center">
            Error signing up, try a different email
          </p>
        ) : (
          <p className="text-sm text-transparent">E</p>
        )}
        <button
          type="button"
          onClick={sendRequest}
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 mt-4"
        >
          "Sign Up"
        </button>
      </div>
    </div>
  );
}

export default AuthSignIn;
