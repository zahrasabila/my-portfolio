import React from "react";
import Container from "../layouts/Container";
import Link from "next/link";
import { RxLinkedinLogo } from "react-icons/rx";
import { FaGithub } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { BiLogoGmail } from "react-icons/bi";
import Marquee from "react-fast-marquee";

export default function Social() {
  return (
    <div className="space-y-4 mx-auto">
      <div className="container rounded-2xl p-3 max-w-fit w-fit md:w-full md:max-w-full">
        <Marquee speed={20} className="overflow-hidden">
          <p className="text-muted-foreground font-vietnam font-normal uppercase">
            {`Let's get in `}
            <span className="text-black">touch!</span>
          </p>
        </Marquee>
      </div>
      <div className="lg:grid lg:grid-cols-2 grid grid-cols-2 md:flex md:flex-wrap justify-between gap-4 flex-auto min-w-max lg:w-fit mx-auto h-fit">
        <Link href="/" className="h-fit">
          <Container className="w-auto">
            <RxLinkedinLogo size={70} className="mx-auto" />
          </Container>
        </Link>
        <Link href="/" className="h-fit">
          <Container className="w-auto">
            <FaGithub size={70} className="mx-auto" />
          </Container>
        </Link>
        <Link href="/" className="h-fit">
          <Container className="w-auto ">
            <RiInstagramFill size={70} className="mx-auto" />
          </Container>
        </Link>
        <Link href="/" className="h-fit">
          <Container className="w-auto ">
            <BiLogoGmail size={70} className="mx-auto" />
          </Container>
        </Link>
      </div>
    </div>
  );
}
