"use client";
import React from "react";
import logo from "../../../public/logo1.svg";
import SignIn from "../auth/signin";
import SignUp from "../auth/signup";
import { SignOutButton } from "@clerk/nextjs";

export default function Navbar() {
  return (
    <div className="flex justify-between w-full items-center bg-[#93ADAE] p-2">
      <div className="flex gap-3 items-center">
        <div>
          <svg
            width="66"
            height="63"
            viewBox="0 0 66 63"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M64.9213 26.594L58.7025 2.81272C58.5046 2.04035 58.0645 1.35169 57.4467 0.84767C56.8289 0.34365 56.0659 0.0507822 55.2696 0.0119945C54.4732 -0.0267932 53.6853 0.190539 53.0215 0.632134C52.3576 1.07373 51.8527 1.71636 51.5807 2.46584L46.0557 17.5002H19.9432L14.4182 2.45959C14.1456 1.71023 13.6401 1.06791 12.9758 0.626801C12.3115 0.185691 11.5234 -0.0310031 10.7269 0.00848619C9.93051 0.0479755 9.16769 0.341571 8.55029 0.846231C7.9329 1.35089 7.49342 2.04007 7.29629 2.81272L1.07754 26.594C0.159071 30.0938 0.324572 33.79 1.55216 37.1938C2.77975 40.5976 5.01159 43.5485 7.95254 45.6565L30.8494 61.8315C31.4775 62.275 32.2274 62.5131 32.9963 62.5131C33.7651 62.5131 34.5151 62.275 35.1432 61.8315L58.04 45.6565C60.9821 43.5493 63.2152 40.5987 64.4439 37.1949C65.6726 33.7911 65.8391 30.0944 64.9213 26.594ZM55.1588 41.5627L32.9994 57.2158L10.84 41.5627C8.72978 40.0453 7.12953 37.9234 6.25075 35.4774C5.37196 33.0313 5.256 30.3761 5.91817 27.8627L11.1244 7.96897L15.8525 20.8627C16.0291 21.3431 16.3488 21.7576 16.7685 22.0505C17.1882 22.3433 17.6877 22.5003 18.1994 22.5002H47.7994C48.3112 22.5003 48.8106 22.3433 49.2303 22.0505C49.65 21.7576 49.9697 21.3431 50.1463 20.8627L54.8744 7.96897L60.0713 27.8596C60.7351 30.3725 60.6209 33.0277 59.7438 35.4743C58.8667 37.921 57.268 40.0439 55.1588 41.5627Z"
              fill="black"
            />
          </svg>
        </div>
        <a className="text-2xl">Home</a>
        <a className="text-2xl">Browse</a>
        <a className="text-2xl">About</a>
      </div>

      <div>
        <input
          className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
          placeholder="Search"
        />
      </div>

      <div className="space-x-8 text-2xl">
        <a>Current Bets</a>

        <SignIn />
        <SignOutButton>
          <button>Sign in with Clerk</button>
        </SignOutButton>
      </div>
    </div>
  );
}
