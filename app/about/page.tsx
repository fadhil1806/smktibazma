"use client";
import Banner from "@/components/banner";
import Description from "@/components/desc";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import { IconBuilding, IconSchool } from "@tabler/icons-react";

import { title } from "@/components/primitives";
import Footer from "@/components/footer";
import CardProject from "@/components/card-project";
import App from "@/components/sa";
import BlurFade from "@/components/magicui/blur-fade";
import FacilityTabs from "@/components/facility";
import Carousel from "@/components/carousel";
import CarouselAsrama from "@/components/carousel-program-asrama";
import Widget2 from "@/components/widget";
import TabsLogo from "@/components/tabs-logo";
import KompotensiKeahlian from "@/components/accordion-kompentensi-keahlian";

export default function DocsPage() {
  const slidesData = [
    {
      imgSrc:
        "https://smktibazma.sch.id/static/media/hero-1.2803f83852406277b6cd.jpg",
      heading: "Energi Masa Depan Indonesia",
    },
    {
      imgSrc: "https://swiperjs.com/demos/images/nature-2.jpg",
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
    <div>
      <section className="flex flex-col items-center justify-center gap-4">
        <Banner
          imgSrc={
            "https://smktibazma.sch.id/static/media/hero-1.2803f83852406277b6cd.jpg"
          }
          heading={<>Profil Sekolah</>}
        />

        <div className="container mx-auto my-auto px-4 max-w-6xl py-10 ">
          <>
            <BlurFade delay={0.25} inView>
              <Description
                description={
                  <div className="text-lg text-gray-500 text-justify mb-8">
                    <p>
                      Sekolah Menengah Kejuruan Teknologi Informasi Bazma (SMK TI
                      BAZMA) merupakan sekolah unggulan berasrama yang diperuntukkan
                      bagi anak-anak tidak mampu. Pembangunan sekolah, baik
                      fasilitas maupun operasional didanai dari hasil pengelolaan
                      wakaf dan sumber dana sosial kemanusiaan lainnya yang
                      diamanahkan oleh masyarakat.
                    </p>
                    <br />
                    <p>
                      SMK TI BAZMA menyelenggarakan program pembelajaran yang
                      ditempuh selama 4 tahun dengan siswa-siswa yang berasal dari
                      berbagai daerah di seluruh Indonesia. SMK TI Bazma
                      menyelenggarakan pendidikan dengan jurusan SIJA (Sistem
                      Informatika, Jaringan & Aplikasi) dengan kombinasi kurikulum
                      berbasis asrama.
                    </p>
                  </div>
                }
              />
            </BlurFade>
          </>

          <div className="flex flex-col p-4 gap-4 rounded-xl w-full">
            <div className="flex flex-col gap-4">
              <BlurFade delay={0.25 * 2} inView>
                <h1 className=" text-4xl font-bold text-blue-800 mb-4">Visi</h1>
                <div className="p-6 bg-blue-800 rounded-xl  shadow-md">
                  <h1 className="text-3xl font-bold text-white">
                    Menjadi sekolah yang melahirkan generasi berkarakter unggul,
                    berkepribadian Islami, mandiri, berprestasi dan menebar
                    manfaat.
                  </h1>
                </div>
              </BlurFade>
            </div>
            <div className="flex flex-col gap-4">
              <BlurFade delay={0.25 * 2} inView>
                <h1 className="text-4xl font-bold text-blue-800 mb-4">Misi</h1>
                <Accordion variant="shadow" className="text-lg">
                  <AccordionItem
                    key="1"
                    aria-label="Accordion 1"
                    title="Misi 1"
                  >
                    Menyelenggarkan Sekolah Menengah Kejuruan (SMK) yang berkualitas
                  </AccordionItem>
                  <AccordionItem
                    key="2"
                    aria-label="Accordion 2"
                    title="Misi 2"
                  >
                    Melahirkan lulusan yang berkarakter unggul siap kerja
                  </AccordionItem>
                  <AccordionItem
                    key="3"
                    aria-label="Accordion 3"
                    title="Misi 3"
                  >
                    Mewujudkan generasi SDM yang berdaya saing global.
                  </AccordionItem>
                </Accordion>
              </BlurFade>
            </div>
          </div>

        

          <App />
          


        </div>
        {/* <CarouselAsrama slides={slidesData} /> */}
        <div className="lg:px-10 max-w-7xl">
          <h1 className="px-10 text-4xl font-bold text-blue-800 mr-5" >Makna logo</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center">
            <img src="https://smktibazma.sch.id/static/media/main-logo-2.7b74690f86ab4e9a4743.png" className=" h-auto" alt="logo" />
            <TabsLogo />
          </div>
        </div>

        <div className="container mx-auto my-auto px-4 max-w-6xl py-10">
          <KompotensiKeahlian />

        </div>
        <Footer />
      </section>
    </div>
  );
}
