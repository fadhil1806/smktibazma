"use client";

import React, { useState } from "react";
import {
  Button,
  card,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Image,
  Link,
  Skeleton,
} from "@nextui-org/react";
import BlurFade from "./magicui/blur-fade";
import { IconBrandInstagram, IconBrandWhatsapp, IconBrandYoutube, IconMail } from "@tabler/icons-react";

const truncateText = (text: string, maxLength: number): string => {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + "...";
  }
  return text;
};

export default function CardProject() {
  const list = [
    {
      img: "/img/proyek.png",
      title: "Big Data Sismako - Database",
      desc:
        "is a web platform designed to manage, analyze, and visualize large-scale data for school applications.",
      view: "https://sismako.smktibazma.sch.id/",
    },
    {
      img: "https://nextui.org/images/hero-card-complete.jpeg",
      title: "Big Data Sismako - Keasramaan",
      desc:
        "A platform designed for school teams to collaborate on various academic and administrative tasks.",
      view: "https://sismako.team.sch.id/",
    },
    {
      img:
        "https://firebasestorage.googleapis.com/v0/b/portofolio-database-fadhil.appspot.com/o/BLOG.png?alt=media&token=d8b1cf90-c9e3-4659-aead-10d2c358c676",
      title: "Blog Website",
      desc:
        "A blog platform designed to provide engaging and informative content. It features a user-friendly interface for readers to explore various posts and articles, with the ability to manage content efficiently.",
      view: "https://techby-fadhilio.vercel.app/",
    },
    {
      img:
        "https://firebasestorage.googleapis.com/v0/b/portofolio-database-fadhil.appspot.com/o/SISMAKO-KEASRAMAAN.png?alt=media&token=edd77a91-5f6d-4bb8-a906-41a42166b2ed",
      title: "Big Data Sismako - Keasramaan",
      desc:
        "A platform designed for school teams to collaborate on various academic and administrative tasks.",
      view: "https://sismako.team.sch.id/",
    },
  ];

  return (
    <div className="mx-auto grid max-w-2xl grid-rows-1 gap-x-4 gap-y-8 pt-10 sm:mt-1 sm:pt-8 lg:mx-0 lg:max-w-none sm:grid-rows-2 lg:grid-rows-3 xl:grid-rows-4">
      {list.map((item, index) => (
        <BlurFade delay={0.25 * 4} inView key={index}>
          <Card
            isFooterBlurred
            className="w-full h-[300px] col-span-12 sm:col-span-7"
          >
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">
                by Ordinary People
              </p>
              <h4 className="text-white/90 font-medium text-xl">SISMAKO</h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Relaxing app background"
              className="z-0 w-full h-full object-cover"
              src="/img/proyek1.png"
            />
            <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
              <div className="flex flex-grow gap-2 items-center">
                <div className="flex flex-col">
                  <p className="text-tiny text-white/60">Breathing App</p>
                  <p className="text-tiny text-white/60">
                    Get a good night's sleep.
                  </p>
                </div>
              </div>
              <Button radius="full" size="sm">
                Get App
              </Button>
            </CardFooter>
          </Card>
        </BlurFade>
      ))}
    </div>
  );
}

const CardContact = ({ icons, title, description, link }) => {
  return (
    <Card className="p-4 border shadow-sm">
      <CardHeader className="flex items-start gap-3">
        <div className="text-blue-600">{icons}</div>
        <div className="flex flex-col">
          <h3 className="font-bold text-lg text-blue-800">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody className="flex flex-col py-4">
        <p className="text-sm text-gray-500">
          <Link href={`mailto:${link}`} className="text-blue-600">
            {link}
          </Link>
        </p>
      </CardBody>
    </Card>
  );
};

export function Contact() {
  const contact = [
    {
      icons: <IconBrandYoutube />,
      title: "Youtube",
      description: "Telusuri Media Sosial SMK TI BAZMA",
      link: "@smktibazma",
    },
    {
      icons: <IconBrandInstagram />,
      title: "Instagram",
      description: "Telusuri Media Sosial SMK TI BAZMA",
      link: "@smktibazma",
    },
  ];
  return (
    <div className="container mx-auto">
      <div className="grid gap-6 sm:grid-rows-2 lg:grid-rows-2">
        {contact.map((contact, index) => (
          <CardContact
            key={index}
            icons={contact.icons}
            title={contact.title}
            description={contact.description}
            link={contact.link}
          />
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
        alt={alt}
        className={`object-cover rounded-xl ${isLoading ? "hidden" : "block"}`}
        width={270}
        height={160}
        onLoad={() => setIsLoading(false)}
      />
    </>
  );
}
