"use client";
import CardProject, { CardTest, Contact, Ppdb } from "@/components/card";
import Footer from "@/components/footer";
import { Button } from "@nextui-org/button";
import { Card, CardFooter, Divider, Image } from "@nextui-org/react";
import BlurFade from "@/components/magicui/blur-fade";
import Carousel from "@/components/carousel";
import { NeonGradientCard } from "@/components/ui/neon-gradient-card";
import Timeline from "@/components/stepper";

export default function Home() {
  const slidesData = [
    {
      img: "img/Angkatan.JPG",
      heading: "Energi Masa Depan Indonesia",

      desc: 'Selamat datang di SMK TI BAZMA, pusat pendidikan yang berfokus pada pengembangan keterampilan teknologi informasi yang unggul dan berdaya saing. Kami berkomitmen untuk menciptakan generasi yang siap menghadapi tantangan dunia digital melalui pendidikan berkualitas, fasilitas lengkap, dan kurikulum berbasis teknologi terkini.'

    },
    {
      img: "/img/silat.JPG",
      heading: "Ekstrakurikuler Pencak Silat",
      desc: 'Selamat datang di SMK TI BAZMA, pusat pendidikan yang berfokus pada pengembangan keterampilan teknologi informasi yang unggul dan berdaya saing. Kami berkomitmen untuk menciptakan generasi yang siap menghadapi tantangan dunia digital melalui pendidikan berkualitas, fasilitas lengkap, dan kurikulum berbasis teknologi terkini.'
    },


  ];

  return (
    <section className="flex flex-col items-center justify-center gap-4 ">
      <Carousel slides={slidesData} />
      <BlurFade delay={0.25 * 2} inView>
        <div className="container mx-auto my-[75px] px-4 max-w-6xl ">
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

            <div className="max-w-[600px] text-lg text-gray-500  md:text-justify">
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
        className="w-full text-white py-[75px] bg-blue-800 my-[75px]"
        
      >
        <div className="container mx-auto px-4 max-w-6xl ">
          <BlurFade delay={0.25 * 2} inView>
            <div className="flex flex-col-reverse lg:flex-row items-center  justify-between">
              <div className=" grid mb-4 lg:mb-0 max-w-[625px] gap-5">
                <h1 className="text-4xl font-bold mb-2 mt-2 text-center lg:text-start">
                  Sambutan Kepala Sekolah
                </h1>
                <p className="mt-2 font-regular text-xl text-center md:text-start ">
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
              <NeonGradientCard className="border-none max-w-[275px] object-fit">

                <Card
                  isFooterBlurred
                  radius="lg"
                  className="p-0"
                >
                  <Image
                    isBlurred
                    alt="Woman listing to music"
                    className="object-cover w-full"
                    height={340}
                    src="./pak_dahlan.avif"
                    width={275}
                  />
                </Card>
              </NeonGradientCard>
            </div>
          </BlurFade>
        </div>
        <hr className="border-b-large border-b-white mt-[50px]" />
      </section>

      <section className="container mx-auto px-4 max-w-6xl my-[50px]">
        <h1 className="text-3xl lg:text-6xl font-black text-blue-800 text-center uppercase mb-12">
          "Sistem, Informatika, Jaringan, & Aplikasi" - SIJA -
        </h1>

        <div className="grid md:flex between items-center justify-between ">
          <div className="w-full flex flex-col lg:w-1/2 me-12 mb-12">
            <p className="text-justify text-xl leading-9  text-gray-500 mb-4">
              Merupakan gabungan dari jurusan Teknik Komputer & Jaringan (TKJ) dan
              Rekayasa Perangkat Lunak (RPL) yang dilengkapi dengan teknologi
              terbaru: cloud computing.

            </p>
            <p className="text-justify text-xl leading-9  text-gray-500 ">
              Kompetensi Keahlian:
              <br />
              CLOUD COMPUTING (IaaS, PaaS, SaaS) - SISTEM INTERNET OF THINGS
              SISTEM KEAMANAN JARINGAN PRODUK KREATIF DAN KEWIRAUSAHAAN
            </p>
          </div>
          <div className="flex gap-4">

            <Card
              isFooterBlurred
              radius="lg"
              className="border-none max-w-[275px] object-fit group" // Tambahkan class "group" untuk menangani hover pada anak elemen
            >
              <Image
                alt="Woman listening to music"
                className="object-cover filter transition hover:duration-700 ease-in-out grayscale group-hover:grayscale-0"
                // Tambahkan filter grayscale dan hilangkan saat hover
                height={350}
                src="/img/Mufiz.jpg"
                width={200}
              />
            </Card>
            <Card
              isFooterBlurred
              radius="lg"
              className="border-none max-w-[275px] object-fit group" // Tambahkan class "group" untuk menangani hover pada anak elemen
            >
              <Image
                alt="Woman listening to music"
                className="object-cover filter transition duration-700 ease-in-out grayscale group-hover:grayscale-0"
                // Tambahkan filter grayscale dan hilangkan saat hover
                height={350}
                src="/img/rakit.JPG"
                width={250}
              />
            </Card>
          </div>
        </div>
      </section>

      <div className="container mx-auto max-w-6xl mb-[75px] mt-8">
        <h1 className="text-4xl font-bold text-blue-800 mb-8">Mengapa Sekolah di SMK TI BAZMA?</h1>
        <div className="grid lg:flex items-center">
          <Ppdb />
        </div>
      </div>

      {/* <div className="container mx-auto px-4 max-w-6xl mb-[75px]">
        <h1 className="text-4xl font-bold text-blue-800 mb-8">Proyek Siswa</h1>
        <Timeline/>
      </div> */}
      <Footer />
    </section>
  );
}
