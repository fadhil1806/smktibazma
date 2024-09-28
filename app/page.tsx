"use client";
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import CardProject, { CardTest } from "@/components/card";
import { SkillsMarquee } from "@/components/demo";
import Footer from "@/components/footer";
import Description from "@/components/desc";
import Banner from "@/components/banner";
import { Button } from "@nextui-org/button";
import { Card, CardFooter, Divider, Image } from "@nextui-org/react";
import BlurFade from "@/components/magicui/blur-fade";
import Carousel from "@/components/carousel";
import { color } from "framer-motion";
import PPDB from "@/components/ppdb";

export default function Home() {
  const slidesData = [
    {
      imgSrc:
        "https://smktibazma.sch.id/static/media/hero-1.2803f83852406277b6cd.jpg",
      heading: "Energi Masa Depan Indonesia",
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
    <section className="flex flex-col items-center justify-center gap-4 ">
      <Carousel slides={slidesData} />
      {/* <Banner
        imgSrc={
          "https://smktibazma.sch.id/static/media/hero-1.2803f83852406277b6cd.jpg"
        }
        heading={
          <>
            ENERGI MASA <br /> DEPAN INDONESIA.
          </>
        }
      /> */}
      <BlurFade delay={0.25} inView>
        <div className="container mx-auto my-[75px] px-4 max-w-7xl ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col justify-between h-full">
              <h1 className="text-4xl font-bold text-blue-800">
                Profile Sekolah
              </h1>
              <Button
                color="primary"
                className="max-w-40 hover:bg-white hover:text-primary-400 hover:border hover:border-primary-400 hidden md:block"
              >
                Selengkapnya
              </Button>
            </div>

            <div className="max-w-[600px] text-lg text-justify">
              <p>
                Sekolah Menengah Kejuruan Teknologi Informasi Bazma (SMK TI
                BAZMA) merupakan sekolah unggulan berasrama yang diperuntukkan
                bagi anak-anak tidak mampu. Pembangunan sekolah, baik fasilitas
                maupun operasional didanai dari hasil pengelolaan wakaf dan
                sumber dana sosial kemanusiaan lainnya yang diamanahkan oleh
                masyarakat.
              </p>
              <br />
              <p>
                SMK TI BAZMA menyelenggarakan program pembelajaran yang ditempuh
                selama 4 tahun dengan siswa-siswa yang berasal dari berbagai
                daerah di seluruh Indonesia. SMK TI Bazma menyelenggarakan
                pendidikan dengan jurusan SIJA (Sistem Informatika, Jaringan &
                Aplikasi) dengan kombinasi kurikulum berbasis asrama.
              </p>
            </div>
          </div>
        </div>
      </BlurFade>

      <section
        className="w-full text-white py-[75px] my-[75px]"
        style={{ backgroundColor: "#0057B8" }}
      >
        <div className="container mx-auto px-4 max-w-7xl ">
          <BlurFade delay={0.25 * 2} inView>
            <div className="flex flex-col-reverse lg:flex-row items-center  justify-between">
              <div className=" grid mb-4 lg:mb-0 max-w-[625px] gap-5">
                <h1 className="text-4xl font-bold mb-2 mt-2 text-center lg:text-start">
                  Sambutan Kepala Sekolah
                </h1>
                <p className="mt-2 font-regular text-lg text-justify">
                  Sekolah Menengah Kejuruan Teknologi Informasi Bazma (SMK TI
                  BAZMA) merupakan sekolah unggulan berasrama yang diperuntukkan
                  bagi anak-anak tidak mampu. Pembangunan sekolah, baik
                  fasilitas maupun operasional didanai dari hasil pengelolaan
                  wakaf dan sumber dana sosial kemanusiaan lainnya yang
                  diamanahkan oleh masyarakat.
                </p>
                <h1 className="text-3xl font-semibold mt-3 text-center lg:text-start">
                  - Ahmad Dahlan, S.Ag.
                </h1>
              </div>
              <Card
                isFooterBlurred
                radius="lg"
                className="border-none max-w-[275px] object-fit"
              >
                <Image
                  isBlurred
                  alt="Woman listing to music"
                  className="object-cover "
                  height={340}
                  src="./pak_dahlan.avif"
                  width={275}
                />
              </Card>
            </div>
          </BlurFade>
        </div>
        <hr className="border-b-large border-b-white mt-[50px]" />
      </section>

      <section className="container mx-auto px-4 max-w-7xl">
        <h1 className="text-4xl font-bold text-blue-800">Jurusan</h1>
        <div>
          <h1>Sistem, Informatika, Jaringan, & Aplikasi</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita temporibus, ipsa hic quaerat assumenda dolores consequuntur laudantium fugit ab consequatur!</p>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-7xl mb-[75px]">
        <h1 className="text-4xl font-bold text-blue-800">Proyek Siswa</h1>
        <CardProject /> 
      </div>




      <Footer />
    </section>
  );
}
