import React from "react";
import { SignUpButton } from "@clerk/nextjs";

export default function SignUp() {
  return (
    <SignUpButton mode="modal">
      <button className="btn">Streamer Sign up</button>
    </SignUpButton>
  );
}
