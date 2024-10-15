import React from "react";
import Container from "../layouts/Container";
import Link from "next/link";
import { RxLinkedinLogo } from "react-icons/rx";
import { FaGithub } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { BiLogoGmail } from "react-icons/bi";
import { IoIosFlower } from "react-icons/io";
import Marquee from "react-fast-marquee";

export default function Social() {
  return (
    <div className="space-y-4 mx-auto">
      <div className="container rounded-2xl p-3 overflow-hidden w-fit md:w-full lg:max-w-72 max-w-full">
        <Marquee speed={25} className="overflow-hidden">
          <p className="text-muted-foreground font-vietnam font-normal uppercase mx-1">
            {`Let's get in `}
            <span className="text-black">touch!</span>
          </p>
          <IoIosFlower className="" />
          <p className="text-muted-foreground font-vietnam font-normal uppercase mx-1">
            {`Let's get in `}
            <span className="text-black">touch!</span>
          </p>
          <IoIosFlower className="" />
        </Marquee>
      </div>
      <div className="lg:grid lg:grid-cols-2 grid grid-cols-2 md:flex md:flex-wrap justify-between gap-4 flex-auto min-w-max lg:w-fit mx-auto h-fit">
        <Link
          href="https://www.linkedin.com/in/zahra-sabila-nugraha-211610239/"
          className="h-fit"
        >
          <Container className="w-auto">
            <RxLinkedinLogo size={70} className="mx-auto" />
          </Container>
        </Link>
        <Link href="https://github.com/zahrasabila" className="h-fit">
          <Container className="w-auto">
            <FaGithub size={70} className="mx-auto" />
          </Container>
        </Link>
        <Link href="https://www.instagram.com/myhiddencam" className="h-fit">
          <Container className="w-auto ">
            <RiInstagramFill size={70} className="mx-auto" />
          </Container>
        </Link>
        <Link href="mailto:zahrsbln@gmail.com" className="h-fit">
          <Container className="w-auto ">
            <BiLogoGmail size={70} className="mx-auto" />
          </Container>
        </Link>
      </div>
    </div>
  );
}
