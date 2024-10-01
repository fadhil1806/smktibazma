import React from "react";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import { IconSchool, IconBuilding } from "@tabler/icons-react";
import { CarouselAsrama, CarouselSekolah } from './carousel-asrama';
import Carousel from "./carousel";
import Home from "@/app/page";
import Image from "next/image";
import BlurFade from "./magicui/blur-fade";



export default function App() {
  const [selected, setSelected] = React.useState("sekolah");

  return (
    <BlurFade>

      <div className="w-full flex flex-col mt-[75px]">
        <div className="md:flex items-center justify-between ">
          <BlurFade delay={0.25 * 2} inView>
            <h1 className="text-4xl text-blue-800 mb-8 font-bold">Fasilitas </h1>
            <Tabs
              aria-label="Options"
              selectedKey={selected}
              variant="underlined"
              color="primary"
              onSelectionChange={(key) => {
                if (typeof key === 'string') {
                  setSelected(key);  // Memastikan key adalah string
                }
              }}
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
              </>
            )}
          </div>
        </BlurFade>
      </div>
    </BlurFade>
  );
}
