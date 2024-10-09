import React from "react";
import Container from "../layouts/Container";
import Image from "next/image";
import { Button } from "../ui/button";
import { TextEffect } from "../TextEffect";

export default function Hero() {
  return (
    <div>
      <Container className="w-full">
        <div className="flex flex-wrap md:min-w-max justify-center gap-5">
          <Image
            src="/images/woman.png"
            width={200}
            height={150}
            alt="woman with laptop"
          />
          <div className="flex flex-col my-auto gap-3">
            <div>
              <h1>
                <TextEffect per="char" preset="fade" delay={0.5}>
                  Hello,
                </TextEffect>
              </h1>
              <div className="flex gap-2">
                <h1>
                  <TextEffect per="char" preset="fade" delay={1.5}>
                    I am
                  </TextEffect>
                </h1>
                <h1 className="text-primary">
                  <TextEffect per="char" preset="fade" delay={2.0}>
                    Zahra,
                  </TextEffect>
                </h1>
              </div>
              <h1>
                <TextEffect
                  per="char"
                  preset="fade"
                  delay={2.5}
                  className="text-pretty"
                >
                  Junior Frontend Developer
                </TextEffect>
              </h1>
            </div>
            <div className="flex gap-4 flex-wrap">
              <Button
                variant="outline"
                type="button"
                className="relative border-muted"
              >
                {" "}
                <div className="blur">
                  <span className="glow"></span>
                </div>
                <span className="glow rounded-full"></span>
                Download CV
              </Button>
              <div className="flex items-center gap-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400"></span>
                </span>
                <p className="text-muted-foreground max-w-fit text-sm">
                  Available for internship
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
