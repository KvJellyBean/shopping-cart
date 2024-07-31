import React from "react";

export const ErrorPage = () => {
  return (
    <div className="px-2 text-center bg-gray-100">
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="font-extrabold text-8xl text-primary">404</h1>
        <p className="text-4xl font-medium text-[gray]">
          Oops! Something went wrong.
        </p>
        <p className="text-xl text-[gray] mt-4">
          We apologize for the inconvenience. Please try again later.
        </p>
      </div>
    </div>
  );
};
