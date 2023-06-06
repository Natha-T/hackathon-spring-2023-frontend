import React from "react";
import { SignInButton } from "@clerk/nextjs";

export default function SignIn() {
  return (
    <SignInButton mode="modal">
      <button className="btn">Streamer Log In</button>
    </SignInButton>
  );
}
