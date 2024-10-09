import React from "react";
import Container from "../layouts/Container";
import { LiaGraduationCapSolid } from "react-icons/lia";

export default function Education() {
  return (
    <div className="h-full">
      <Container className="space-y-3 h-full">
        <h2 className="uppercase">Education</h2>
        <div className="space-y-1">
          <div className="flex">
            <div className="flex justify-center">
              <div className="flex flex-col justify-center h-full">
                <LiaGraduationCapSolid size={30} className="text-primary" />
                <div className="border h-full w-0 border-muted-foreground mx-auto"></div>
              </div>
              <div className="p-1 px-2">
                <p className="text-sm font-vietnam font-light text-muted-foreground">
                  2022 - Present
                </p>
                <p className="">Information Systems</p>
                <p className="text-xs font-vietnam text-muted-foreground font-light italic">
                  GPA: 3.68
                </p>
                <p className="font-vietnam pt-1">
                  UIN Syarif Hidayatullah, Jakarta, Indonesia
                </p>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="flex justify-center">
              <div className="flex flex-col justify-center h-full">
                <LiaGraduationCapSolid size={30} className="text-primary" />
                <div className="border h-full w-0 border-muted-foreground mx-auto"></div>
              </div>
              <div className="p-1 px-2">
                <p className="text-sm font-vietnam font-light text-muted-foreground">
                  2019 - 2022
                </p>
                <p className="">Natural Science</p>
                <p className="font-vietnam pt-1">
                  Madrasah Pembangunan, Jakarta, Indonesia
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
