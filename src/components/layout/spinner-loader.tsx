"use client";

const SpinnerLoader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-[100000000] bg-white bg-opacity-50">
      <div className="w-8 h-8 border-4 border-t-transparent border-lharmonie-hover rounded-full animate-spin opacity-80"></div>
    </div>
  );
};

export default SpinnerLoader;
