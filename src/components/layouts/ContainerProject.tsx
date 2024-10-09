import { BentoCard, BentoGrid } from "../ui/bento-grid";
import Image from "next/image";

const features = [
  {
    name: "Aroma Bumi Website",
    description: [{ desc: "ReactJS" }, { desc: "CSS" }],
    sub_desc: "Project At Progate",
    href: "/",
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
    href: "/",
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
    description: [
      { desc: "ReactJS" },
      { desc: "CSS" },
      { desc: "Axios" },
      { desc: "REST API" },
    ],
    sub_desc: "Group Project At TEDxUINJakarta",
    href: "/",
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
  {
    name: "Calendar",
    description: [{ desc: "Use the calendar to filter your files by date." }],
    sub_desc: "Project At Progate",
    href: "/",
    cta: "Learn more",
    background: (
      <img
        src="/path-to-your-image.jpg"
        className="relative -right-20 -top-20 opacity-60"
        alt="Background"
      />
    ),
  },
];

export async function BentoDemo() {
  return (
    <BentoGrid>
      {features.map((feature) => (
        <BentoCard key={feature.name} {...feature} />
      ))}
    </BentoGrid>
  );
}
