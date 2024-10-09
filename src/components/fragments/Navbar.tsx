// import Link from "next/link";
import React from "react";

export default function Navbar({
  navStates,
  setNavStates,
}: {
  navStates: { [key: string]: boolean };
  setNavStates: React.Dispatch<
    React.SetStateAction<{ [key: string]: boolean }>
  >
}) {
  const navbarRoute = [{ name: "All" }, { name: "About" }, { name: "Work" }];

  const handleClick = (name: string) => {
    setNavStates((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  return (
    <div className="container flex text-sm gap-4 hover:bg-opacity-75 bg-white py-2 bg-opacity-50 mx-auto rounded-full w-full max-w-xs justify-around font-vietnam font-light">
      {navbarRoute.map((nav) => (
        <ul key={nav.name}>
          <li
            className={`${
              navStates[nav.name] ? "bg-black rounded-full text-white" : ""
            } px-4 py-2 hover:text-muted-foreground`}
          >
            <button onClick={() => handleClick(nav.name)}>{nav.name}</button>
          </li>
        </ul>
      ))}
    </div>
  );
}
