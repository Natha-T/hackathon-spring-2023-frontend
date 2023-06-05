import React from "react";

export default function page() {
  return (
    <div className="flex justify-between">
      <div className="flex">
        <img src="" alt="" className="" />
        <a>Home</a>
        <a>Browse</a>
        <a>About</a>
      </div>

      <div>
        <input
          class="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
          type="search"
          name="search"
          placeholder="Search"
        />
      </div>

      <div>
        <a>Current Bets</a>
        <a>Streamer Login</a>
      </div>
    </div>
  );
}
