"use client";

import React, { useState } from "react";
import {
  Button,
  Card,
  CardFooter,
  CardHeader,
  Image,
  Skeleton,
} from "@nextui-org/react";
import BlurFade from "./magicui/blur-fade";

const truncateText = (text: string, maxLength: number): string => {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + "...";
  }
  return text;
};

export default function CardProject() {
  const list = [
    {
      img: "./proyek.png",
      title: "Big Data Sismako - Database",
      desc:
        "A web platform designed to manage, analyze, and visualize large-scale data for school applications.",
      view: "https://sismako.smktibazma.sch.id/",
    },
    {
      img: "./proyek.png",
      title: "Big Data Sismako - Keasramaan",
      desc:
        "A platform designed for school teams to collaborate on various academic and administrative tasks.",
      view: "https://sismako.team.sch.id/",
    },
    {
      img: "./proyek.png",
      title: "Blog Website",
      desc:
        "A blog platform designed to provide engaging and informative content.",
      view: "https://techby-fadhilio.vercel.app/",
    },
    {
      img: "./proyek.png",
      title: "Big Data Sismako - Keasramaan",
      desc:
        "A platform designed for school teams to collaborate on various academic and administrative tasks.",
      view: "https://sismako.team.sch.id/",
    },
  ];

  return (
    <div className="text-3xl font-bold">
      <h1>Proyek Siswa</h1>

      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 pt-10 sm:mt-2 sm:pt-8 lg:mx-0 lg:max-w-none sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {list.map((item, index) => (
          <BlurFade delay={0.25 * 4} inView key={index}>
            <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5">
              <CardHeader className="absolute z-10 top-1 flex-col items-start">
                <p className="text-tiny text-white/60 uppercase font-bold">New</p>
                <h4 className="text-black font-medium text-2xl">Acme camera</h4>
              </CardHeader>
              <Image
                removeWrapper
                alt="Card example background"
                className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                src="https://nextui.org/images/card-example-6.jpeg"
              />
              <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                <div>
                  <p className="text-black text-tiny">Available soon.</p>
                  <p className="text-black text-tiny">Get notified.</p>
                </div>
                <Button className="text-tiny" color="primary" radius="full" size="sm">
                  Notify Me
                </Button>
              </CardFooter>
            </Card>
          </BlurFade>
        ))}
      </div>
    </div>
  );
}

function ImageWithSkeleton({ src, alt }: { src: string; alt: string }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <Skeleton className="w-[270px] h-[170px] rounded-lg" />}
      <Image
        src={src}
        alt="{alt}"
        className={`object-cover rounded-xl ${isLoading ? "hidden" : "block"}`}
        width={280}
        height={340}
        onLoad={() => setIsLoading(false)}
      />
    </>
  );
}
