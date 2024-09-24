"use client";
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import CardProject from "@/components/card";
import { SkillsMarquee } from "@/components/demo";
import Footer from "@/components/footer";
import Description from "@/components/desc";
import Banner from "@/components/banner";
import { Button } from "@nextui-org/button";
import { Card, CardFooter, Divider, Image } from "@nextui-org/react";
import BlurFade from "@/components/magicui/blur-fade";
import Carousel from "@/components/carousel";
import { color } from "framer-motion";

export default function Home() {
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

            <div className="max-w-[600px] text-lg">
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
        <div className="container mx-auto px-4 max-w-7xl">
          <BlurFade delay={0.25 * 2} inView>
            <div className="flex flex-col-reverse md:flex-row justify-between">
              <div className=" grid mb-4 md:mb-0 max-w-[625px] gap-5">
                <h1 className="text-4xl font-bold mb-2 mt-2">
                  Sambutan Kepala Sekolah
                </h1>
                <p className="mt-2 font-regular text-lg">
                  Sekolah Menengah Kejuruan Teknologi Informasi Bazma (SMK TI
                  BAZMA) merupakan sekolah unggulan berasrama yang diperuntukkan
                  bagi anak-anak tidak mampu. Pembangunan sekolah, baik
                  fasilitas maupun operasional didanai dari hasil pengelolaan
                  wakaf dan sumber dana sosial kemanusiaan lainnya yang
                  diamanahkan oleh masyarakat.
                </p>
                <h1 className="text-3xl font-semibold mt-3">
                  - Ahmad Dahlan, S.Ag.
                </h1>
              </div>
              <Card
                isFooterBlurred
                radius="lg"
                className="border-none object-fit"
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

        <div className="container mx-auto my-auto px-4 max-w-7xl">
        <h1 className="text-4xl font-bold text-blue-800">Proyek Siswa</h1>
        <CardProject />
      </div>

      <div className="mt-8 mb-8 container mx-auto my-auto px-4 max-w-7xl p-10 rounded-3xl inline-block text-center justify-center sm:ml-2 sm:mr-5" style={{ backgroundColor: "#0057B8" }}>
        <div className="inline-block max-w-3xl text-center justify-center mt-11 mb-11">
          <BlurFade delay={0.25} inView>
            <h1 className={title({ color: "cyan", class: 'font-cold' })}>Ayo Daftar Sekarang Juga!&nbsp;</h1>
          </BlurFade>
          <BlurFade delay={0.25 * 2} inView>
            <h2 className={subtitle({ class: "mt-4 text-white font-semibold" })}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </h2>
          </BlurFade>
          <BlurFade delay={0.25 * 3} inView>
            <div className="">
              <Button color="default" className="h-11 p-5 mt-2">
                Daftar Sekarang!
              </Button>
            </div>
          </BlurFade>
        </div>
      </div>

      <Footer />
    </section>
  );
}
