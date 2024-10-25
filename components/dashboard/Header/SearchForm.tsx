import React, { useState } from "react";

const SearchForm = () => {
  return (
    <>
      <li className="hidden lg:block">
        <form action="https://formbold.com/s/unique_form_id" method="POST">
            <div className="relative w-full max-w-[300px]">
              <input
                type="text"
                placeholder="Search"
                className="w-full rounded-full border border-stroke bg-gray-2 py-3 pl-5 pr-5 text-dark focus:border-primary focus:outline-none dark:border-dark-4 dark:bg-dark-3 dark:text-white dark:focus:border-primary xl:w-[300px]"
              />
            </div>
        </form>
      </li>
    </>
  );
};

export default SearchForm;
