import React from "react";

export default function GoLive() {
  return (
    <div className=" flex justify-between m-4   pt-10 ">
      <form className="w-3/4">
        <label
          for="default-search"
          class="mb-2 text-sm font-medium text-gray-900 sr-only w-full dark:text-gray-300"
        >
          Searchgdg
        </label>
        <div class=" relative  ">
          <input
            type="search"
            id="default-search"
            class="block p-4  w-full text-xl font bold "
            placeholder="League of Legends Mid Season Invitational 2023"
            required
          />
          <button
            type="submit"
            class="text-white right-2.5 bottom-2.5  absolute bg-gray-700  px-4 py-3"
          >
            Edit
          </button>
        </div>
      </form>

      <button className="bg-[#d10a0a] px-6 py-2 rounded-md text-white ">
        GO LIVE
      </button>
    </div>
  );
} /*
      <div class="mt-4 w-3/4 flex">
        <input
          id="email"
          type="email"
          required
          autofocus
          autocomplete="username"
          placeholder="email@email.com"
          className="border-2 border-gray-300 rounded-md w-full p-2 "
        />{" "}
        <button className="bg-[#d10a0a] px-6 py-2 rounded-md text-white ">
          Edit
        </button>
      </div>*/
