import React from "react";
type NavbarProps = {
  navStates: string;
  setNavStates: React.Dispatch<React.SetStateAction<string>>;
};

export default function Navbar({ navStates, setNavStates }: NavbarProps) {
  const navbarRoute = [
    { name: "All" as const },
    { name: "About" as const },
    { name: "Work" as const },
  ];

  const handleClick = (name: string) => {
    setNavStates(name);
  };

  return (
    <div className="container flex text-sm gap-4 hover:bg-opacity-75 bg-white py-2 bg-opacity-50 mx-auto rounded-full w-full max-w-xs justify-around font-vietnam font-light">
      {navbarRoute.map((nav) => (
        <ul key={nav.name}>
          <li className="">
            <button
              onClick={() => handleClick(nav.name)}
              className={`${
                nav.name === "All" ? "active" : ""
              } active:bg-black rounded-full active:text-white focus:bg-black focus:text-white text-black px-4 py-2 hover:text-muted-foreground`}
            >
              {nav.name}
            </button>
          </li>
        </ul>
      ))}
    </div>
  );
}
