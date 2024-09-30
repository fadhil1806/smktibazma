import React from "react";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import { IconSchool, IconBuilding } from "@tabler/icons-react";
import { CarouselAsrama, CarouselSekolah } from './carousel-asrama';
import Carousel from "./carousel";
import Home from "@/app/page";
import Image from "next/image";
import BlurFade from "./magicui/blur-fade";





export default function App() {
  const [selected, setSelected] = React.useState("photos");

  const slidesData = [
    {
      imgSrc: "/carousel/asrama/program-asrama.avif",
      heading: "Program Asrama",
      desc: "Sekolah Menengah Kejuruan Teknologi Informasi Bazma (SMK TI BAZMA) merupakan sekolah unggulan berasrama yang diperuntukkan bagi anak-anak tidak mampu. Pembangunan sekolah, baik fasilitas maupun operasional didanai dari hasil pengelolaan wakaf dan sumber dana sosial kemanusiaan lainnya yang diamanahkan oleh masyarakat."
    },
    {
      imgSrc: "/img/silat.JPG",
      heading: "Keindahan Alam",
    },
    {
      imgSrc: "https://swiperjs.com/demos/images/nature-3.jpg",
      heading: "Petualangan",
    },
    {
      imgSrc: "https://swiperjs.com/demos/images/nature-4.jpg",
      heading: "Keajaiban Dunia",
    },
  ];

  return (
    <BlurFade>

      <div className="w-full flex flex-col  mt-[75px]">
        <div className="md:flex items-center justify-between ">
          <BlurFade delay={0.25 * 2} inView>
            <h1 className="text-4xl text-blue-800 mb-8 font-bold">Fasilitas </h1>
            <Tabs
              aria-label="Options"
              selectedKey={selected}
              onSelectionChange={setSelected}
              variant="underlined"
              color="primary"
            >
              <Tab key="sekolah" title={
                <div className="flex gap-8 w-full justify-between ">
                  <IconSchool />
                  <p className="font-bold text-regular">Sekolah</p>
                </div>
              } />
              <Tab key="asrama" title={
                <div className="flex gap-8 w-full justify-between ">
                  <IconBuilding />
                  <p className="font-bold text-regular">Asrama</p>
                </div>
              } />
            </Tabs>
          </BlurFade>
        </div>

        <BlurFade delay={0.25 * 3} inView>
          <div className="mt-4">
            {selected === "sekolah" && (
              <div className="flex flex-col justify-center items-center gap-4">

                <CarouselSekolah />
                <img src="https://smktibazma.sch.id/static/media/fasilitas.dfa5a4a4e6c65236542d.png" alt="img" />
              </div>
            )}
            {selected === "asrama" && (
              <>
                <CarouselAsrama />
                {/* <Carousel slides={slidesData}/> */}
              </>
            )}
          </div>
        </BlurFade>
      </div>
    </BlurFade>
  );
}