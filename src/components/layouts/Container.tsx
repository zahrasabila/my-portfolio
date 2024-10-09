import React from "react";

type containerProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({ children, className }: containerProps) {
  return (
    <div
      // className={`${className} rounded-3xl bg-white bg-opacity-50  p-8 [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] hover:bg-opacity-70`}
      className={`container ${className} rounded-3xl p-6 md:p-8`}
    >
      {children}
    </div>
  );
}
