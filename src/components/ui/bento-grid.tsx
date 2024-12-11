import { ReactNode } from "react";
import { ArrowRightIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid w-full sm:grid-cols-2 grid-cols-1 gap-4 auto-rows-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  description,
  sub_desc,
  href,
  cta,
  navStates,
  setNavStates,
}: {
  name: string;
  className?: string;
  background: ReactNode;
  description: { desc: string }[];
  sub_desc: string;
  href: string;
  cta: string;
  navStates: string;
  setNavStates: React.Dispatch<React.SetStateAction<string>>;
}) =>
  console.log(setNavStates)(
    <div
      key={name}
      className={cn(
        "group/card relative p-6 sm:p-8 flex flex-col justify-between container rounded-3xl overflow-hidden",
        navStates === "About" ? "h-0 hidden" : "relative",
        // light styles
        // "bg-white hover:bg-opacity-70 [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] bg-opacity-50",
        "bg-white",
        // dark styles
        "transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
        className
      )}
    >
      <div className="">{background}</div>
      <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 md:pt-3 pt-6 transition-all duration-300 group-hover/card:-translate-y-10">
        <h3 className="font-alata text-base text-muted-foreground uppercase">
          {sub_desc}
        </h3>
        <h2 className=" font-alata uppercase text-neutral-700">{name}</h2>
        <div className="flex gap-2 flex-wrap">
          {description.map((desc, index) => (
            <p
              key={index}
              className="max-w-lg w-fit min-w-10 text-sm text-center font-alata bg-neutral-200 py-1 px-2 rounded-full text-blue-950"
            >
              {desc.desc}
            </p>
          ))}
        </div>
      </div>

      <div
        className={cn(
          "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center py-4 opacity-0 transition-all duration-300 group-hover/card:translate-y-0 group-hover/card:opacity-100"
        )}
      >
        <Button
          variant="outline"
          asChild
          size="sm"
          className="pointer-events-auto rounded-full"
        >
          <a href={href} target="_blank">
            {cta}
            <ArrowRightIcon className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </div>
      <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover/card:bg-white group-hover/card:bg-opacity-30 group-hover/card:dark:bg-neutral-800/10" />
    </div>
  );

export { BentoCard, BentoGrid };
