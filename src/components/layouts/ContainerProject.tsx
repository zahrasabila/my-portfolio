import { BentoCard, BentoGrid } from "../ui/bento-grid";
import Image from "next/image";

const features = [
  {
    name: "Onesport Website",
    description: [
      { desc: "NextJS" },
      { desc: "TailwindCSS" },
      { desc: "React Query" },
      { desc: "ShadcnUI" },
    ],
    sub_desc: "Group Project At Connextion",
    href: "https://onesport-web.vercel.app/",
    cta: "Go to the site",
    background: (
      <Image
        src="https://res.cloudinary.com/dbvyywl6v/image/upload/v1728986959/Screenshot_2024-10-15_170557_of77xe.png"
        className="relative rounded-xl shadow-lg h-40 lg:h-full transition-all duration-300 ease-out group-hover/card:scale-105"
        alt="Background"
        width={1078}
        height={668}
      />
    ),
  },
  {
    name: "Aroma Bumi Website",
    description: [{ desc: "ReactJS" }, { desc: "CSS" }],
    sub_desc: "Self Project At Progate",
    href: "https://zahrasabila.github.io/aroma-bumi/",
    cta: "Go to the site",
    background: (
      <Image
        src="https://res.cloudinary.com/dbvyywl6v/image/upload/v1727668755/project-images/aroma-bumi_ulbbbt.png"
        className="relative rounded-xl shadow-lg h-40 lg:h-full transition-all duration-300 ease-out group-hover/card:scale-105"
        alt="Background"
        width={1078}
        height={668}
      />
    ),
  },
  {
    name: "HIMSI Website",
    description: [{ desc: "ReactJS" }, { desc: "CSS" }, { desc: "Bootstrap" }],
    sub_desc: "Group Project At Mini Club Developer",
    href: "https://web-himsi.netlify.app/",
    cta: "Go to the site",
    background: (
      <Image
        src="https://res.cloudinary.com/dbvyywl6v/image/upload/v1727713476/project-images/web-himsi_pr9zav.png"
        className="relative rounded-xl shadow-lg h-40 lg:h-full transition-all duration-300 ease-out group-hover/card:scale-105"
        alt="Background"
        width={1070}
        height={650}
      />
    ),
  },
  {
    name: "TEDxUINJakarta Website",
    description: [{ desc: "ReactJS" }, { desc: "CSS" }, { desc: "Axios" }],
    sub_desc: "Group Project At TEDxUINJakarta",
    href: "https://tedxuinjakarta.com/",
    cta: "Go to the site",
    background: (
      <Image
        src="https://res.cloudinary.com/dbvyywl6v/image/upload/v1727714195/project-images/web-tedx_tfqao2.png"
        className="relative rounded-xl shadow-lg h-40 lg:h-full transition-all duration-300 ease-out group-hover/card:scale-105"
        alt="Background"
        width={1070}
        height={650}
      />
    ),
  },
];

export function BentoDemo({ navStates }: { navStates: string }) {
  return (
    // <div className="">
    <div>
      <BentoGrid>
        {features.map((feature) => (
          <div key={feature.name}>
            <BentoCard key={feature.name} {...feature} navStates={navStates} />
          </div>
        ))}
      </BentoGrid>
    </div>
    // </div>
  );
}
