import React from "react";
import Container from "../layouts/Container";
// import { Button } from "../ui/button";
// import { RxLinkedinLogo } from "react-icons/rx";
// import { FaGithub } from "react-icons/fa";
// import { RiInstagramFill } from "react-icons/ri";
// import { BiLogoGmail } from "react-icons/bi";
// import Link from "next/link";

export default function About() {
  return (
    // <div className="flex gap-4 flex-wrap xs:flex-nowrap"></div>
    <Container className="space-y-3">
      <h2 className="uppercase">About me</h2>
      <p className="font-vietnam font-light text-base text-wrap overflow-auto max-h-36">
        A dedicated 5th-semester Information Systems student with a passion for
        technology and Web Development. Currently living in Depok, Indonesia.
      </p>
      {/* <Button type="button" variant="default">
        Download CV
      </Button> */}
    </Container>
    /* <div className="grid grid-cols-2 gap-4 flex-auto min-w-max w-fit">
        <Link href="/">
          <Container className="w-auto hover:bg-white hover:bg-opacity-70">
            <RxLinkedinLogo size={50} className="mx-auto" />
          </Container>
        </Link>
        <Link href="/">
          <Container className="w-auto hover:bg-white hover:bg-opacity-70">
            <FaGithub size={50} className="mx-auto" />
          </Container>
        </Link>
        <Link href="/">
          <Container className="w-auto hover:bg-white  hover:bg-opacity-70">
            <RiInstagramFill size={50} className="mx-auto" />
          </Container>
        </Link>
        <Link href="/">
          <Container className="w-auto hover:bg-white  hover:bg-opacity-70">
            <BiLogoGmail size={50} className="mx-auto" />
          </Container>
        </Link>
      </div> */
  );
}
