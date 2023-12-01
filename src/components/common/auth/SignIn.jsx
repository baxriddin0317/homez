import Link from "next/link";
import React from "react";
import { FaApple, FaArrowRightLong, FaFacebookF, FaGoogle } from "react-icons/fa6";

const SignIn = () => {
  return (
    <form >
      <div className="mb-6">
        <label className="text-brand-black-100 font-semibold mb-2 block">Email</label>
        <input
          type="email"
          className="w-full h-[55px] rounded-lg py-1.5 px-3 pl-4 text-brand-black-100 border border-brand-black-200"
          placeholder="Enter Email"
          required
        />
      </div>
      {/* End email */}

      <div className="mb-4">
        <label className="text-brand-black-100 font-semibold mb-2 block">Password</label>
        <input
          type="text"
          className="w-full h-[55px] rounded-lg py-1.5 px-3 pl-4 text-brand-black-100 border border-brand-black-200"
          placeholder="Enter Password"
          required
        />
      </div>
      {/* End Password */}

      <div className="flex items-center justify-between text-brand-black-100 mb-2.5">
        <label className="flex items-center text-sm gap-1">
          <input type="checkbox" defaultChecked="checked" />
          <span className="checkmark" />
          Remember me
        </label>
        <a className="text-sm" href="#">
          Lost your password?
        </a>
      </div>
      {/* End  Lost your password? */}

      <div className="mb-5">
        <button className="w-full h-[55px] flex items-center btn-search relative overflow-hidden justify-center bg-brand-main rounded-xl hover:z-20 text-white gap-2">
          Sign in 
          <FaArrowRightLong className="-rotate-45" />
        </button>
      </div>
      {/* End submit */}

      <div className="flex items-center gap-1 mb-5">
        <span className="block w-full h-px bg-brand-black-200"></span>
        <span className="text-brand-black-100">OR</span>
        <span className="block w-full h-px bg-brand-black-200"></span>
      </div>

      <div className="mb-2.5">
        <button className="bg-white w-full h-[55px] flex items-center justify-between px-8 border border-brand-black-100 rounded-lg text-brand-black-100 btn-search before:!bg-brand-main relative overflow-hidden hover:z-20 hover:text-white transition-colors duration-500" type="button">
          <FaGoogle className="block" />
          <span className="block">Continue Google</span>
          <div></div>
        </button>
      </div>
      <div className="mb-2.5">
        <button className="bg-[#3a77ea] w-full h-[55px] flex items-center justify-between px-8 border border-brand-black-100 rounded-lg btn-search before:!bg-brand-main relative overflow-hidden hover:z-20 text-white transition-colors duration-500" type="button">
          <FaFacebookF /> 
          <span>Continue Facebook</span>
          <div></div>
        </button>
      </div>
      <div className="mb-5">
        <button className="bg-brand-black-100 w-full h-[55px] flex items-center justify-between px-8 border border-brand-black-100 rounded-lg btn-search before:!bg-brand-main relative overflow-hidden hover:z-20 text-white transition-colors duration-500" type="button">
          <FaApple /> 
          <span>Continue Apple</span>
          <div></div>
        </button>
      </div>
      <p className="text-brand-black-100 text-[15px] leading-6 text-center ">
        Not signed up?{" "}
        <Link className="font-semibold" href="/register">
          Create an account.
        </Link>
      </p>
    </form>
  );
};

export default SignIn;
