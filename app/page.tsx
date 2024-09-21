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

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 ">
      <Banner
        imgSrc={
          "https://smktibazma.sch.id/static/media/hero-1.2803f83852406277b6cd.jpg"
        }
        heading={
          <>
            ENERGI MASA <br /> DEPAN INDONESIA.
          </>
        }
      />
      <div className="container mx-auto my-[75px] px-4 max-w-7xl ">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8"> 
          <div className="flex flex-col justify-between h-full"> 
            <h1 className="text-4xl font-bold text-blue-800">Profile Sekolah</h1>
            <Button color="primary" className="max-w-40 hover:bg-white hover:text-primary-400 hover:border hover:border-primary-400 ">Selengkapnya</Button>
            {/* className="max-w-40 hover:bg-white hover:text-primary-400 hover:border hover:border-primary-400 " */}
          </div>

          <div className="max-w-[600px]">
            <p>
              Sekolah Menengah Kejuruan Teknologi Informasi Bazma (SMK TI BAZMA) merupakan sekolah unggulan berasrama yang diperuntukkan bagi anak-anak tidak mampu. Pembangunan sekolah, baik fasilitas maupun operasional didanai dari hasil pengelolaan wakaf dan sumber dana sosial kemanusiaan lainnya yang diamanahkan oleh masyarakat.
            </p>
            <br />
            <p>
              SMK TI BAZMA menyelenggarakan program pembelajaran yang ditempuh selama 4 tahun dengan siswa-siswa yang berasal dari berbagai daerah di seluruh Indonesia. SMK TI Bazma menyelenggarakan pendidikan dengan jurusan SIJA (Sistem Informatika, Jaringan & Aplikasi) dengan kombinasi kurikulum berbasis asrama.
            </p>
          </div>
        </div>
      </div>


      <div className="container mx-auto my-auto px-4 max-w-7xl">
        <h1 className="text-4xl font-bold text-blue-800">Proyek Siswa</h1>
        <CardProject />
      </div>
      <div className="container mx-auto my-auto px-4 max-w-7xl">
        <SkillsMarquee />
      </div>
      <Footer />
      {/* <div className="inline-block max-w-xl text-center justify-center">
        <BlurFade delay={0.25} inView>
          <h1 className={title()}>Hi, I&apos;m&nbsp;</h1>
          <h1 className={title({ color: "green" })}>Fadhil&nbsp;</h1>
        </BlurFade>
        <BlurFade delay={0.25 * 2} inView>
          <h2 className={subtitle({ class: "mt-4" })}>
            As an enthusiastic web developer, I always like to explore new knowledge. Don&apos;t be shy - lets talk.
          </h2>
        </BlurFade>
      </div>
      <BlurFade delay={0.25 * 3} inView>
        <div className="flex gap-3">
          <Link
            isExternal
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })}
            href={siteConfig.links.docs}
          >
            Linkedin
          </Link>
          <Link
            isExternal
            className={buttonStyles({ variant: "bordered", radius: "full" })}
            href={siteConfig.links.github}
          >
            <GithubIcon size={20} />
            GitHub
          </Link>
        </div>
      </BlurFade> */}
    </section>
  );
}
