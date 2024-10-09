// import Link from "next/link";
import React from "react";
type NavStates = {
  All: boolean;
  About: boolean;
  Work: boolean;
};

type NavbarProps = {
  navStates: NavStates;
  setNavStates: React.Dispatch<React.SetStateAction<NavStates>>;
};

export default function Navbar({ navStates, setNavStates }: NavbarProps) {
  const navbarRoute = [
    { name: "All" as const },
    { name: "About" as const },
    { name: "Work" as const },
  ];

  const handleClick = (name: keyof NavStates) => {
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
