"use client";

const SpinnerLoader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-[100000000]">
      <div className="w-8 h-8 border-4 border-t-transparent border-lharmonie-hover rounded-full animate-spin"></div>
    </div>
  );
};

export default SpinnerLoader;
