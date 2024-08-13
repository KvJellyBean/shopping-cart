import React from "react";

export const Loading = () => {
  return (
    <div className="relative flex items-center justify-center h-screen">
      <div className="absolute w-32 h-32 border-t-4 border-b-4 rounded-full border-primary animate-spin"></div>
      <img
        src="/gamelly.png"
        className="rounded-full h-28 w-28"
        alt="Gamelly Logo"
      />
    </div>
  );
};
