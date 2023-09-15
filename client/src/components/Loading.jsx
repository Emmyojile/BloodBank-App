import React from "react";

const Loading = () => {
  return (
    <div className="fixed inset-0 bg-black opacity-70 z-50 flex justify-center items-center">
      <div className="border-4 border-solid h-8 w-8 border-white border-t-transparent animate-spin rounded-full"></div>
    </div>
  );
};

export default Loading;
