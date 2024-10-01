import clsx from "clsx";
import Marquee from "@/components/magicui/marquee";
import BlurFade from "./magicui/blur-fade";
import { Card } from "@nextui-org/react";
import { text } from "stream/consumers";

// Simpan URL logo yang sama dalam variabel terpisah
const BSI_LOGO_URL =
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgDhebSTuD3XQxAOqX1JqDroemBYQ1sq3wBuPmYLiBYUOdakGiYO01kjswPoYir6DpeVwEtL50fUL51xravpFJRO1FGoXqOD1H004tzAcZdXCd6KkcIczLIO_M1is6ogK7gX9DQghtT2vYAUfxiZcIABJ6cE_8bLUCTjSGWBvb3RRGYSPf4nekNOQ/w640-h182/BSI%20(Bank%20Syariah%20Indonesia)%20Logo.png";

const MANDIRI_LOGO_URL = "https://vectorez.biz.id/wp-content/uploads/2023/10/Logo-Bank-Mandiri.png"

const list = [
  {
    logo: BSI_LOGO_URL,
    title: "711.88.444.61",
    subtitle: "LAZNAS BAITUZZAKAH",
    text: "ex (BSM)",
  },
  {
    logo: BSI_LOGO_URL,
    title: "227.498.3060",
    subtitle: "BAITUZZAKAH PERTAMINA",
    text: "ex (BNIS)",
  },
  {
    logo: BSI_LOGO_URL,
    title: "103.91.732.94",
    subtitle: "BAITUZZAKAH PERTAMINA",
    text: "ex (BRIS)",
  },
  {
    logo: MANDIRI_LOGO_URL,
    title: "119.000.301.1028",
    subtitle: "LAZNAS BAITUZZAKAH",
    text: ''
  },
];

const firstRow = list.slice(0, Math.ceil(list.length));


const ZakatCard = ({ logo, title, subtitle, text }: { logo: string; title: string; subtitle: string; text: string }) => (
  <Card
    className={clsx(
      "relative w-80 cursor-pointer overflow-hidden rounded-xl border ",
      "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
      "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
    )}
  >
    <div className="flex items-center justify-center gap-4 p-4">
      <div className="flex flex-col justify-start w-[100px]">
        <img src={logo} alt="LOGO" className="w-full h-full mb-1" />
        <p className="text-sm text-gray-400">{text}</p>
      </div>
      <div className="flex flex-col">
        <h1 className="text-xl font-bold text-teal-500">{title}</h1>
        <p className="text-xs text-gray-400">{subtitle}</p>
      </div>
    </div>
  </Card>
);

export function ZakatMarquee() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden ">
      <BlurFade delay={0.25} inView>
        <Marquee reverse pauseOnHover className="[--duration:20s] ">
          {firstRow.map(({ logo, title, subtitle, text }, index) => (
            <ZakatCard key={index} logo={logo} title={title} subtitle={subtitle} text={text} />
          ))}
        </Marquee>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white dark:from-background"></div>
      </BlurFade>
    </div>
  );
}
