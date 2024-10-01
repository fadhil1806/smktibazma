"use client";
import Banner from "@/components/banner";
import Description from "@/components/desc";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { Tabs, Tab } from "@nextui-org/react";
import { IconBuilding, IconSchool } from "@tabler/icons-react";

import { title } from "@/components/primitives";
import Footer from "@/components/footer";
import CardProject from "@/components/card-project";
import App from "@/components/sa";

export default function DocsPage() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  return (
    <div>
      <section className="flex flex-col items-center justify-center gap-4">
        <Banner
          imgSrc={
            "https://smktibazma.sch.id/static/media/hero-1.2803f83852406277b6cd.jpg"
          }
          heading='Profil Sekolah'
        />

        <div className="container mx-auto my-auto px-4 max-w-6xl py-10 ">
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


          <div className="flex flex-col bg-blue-800 p-6 gap-4 rounded-xl w-full">
            <div className="flex flex-col gap-2">
              <h1 className="text-4xl font-bold text-white">Visi</h1>
              <div className="p-4 bg-white rounded-xl">
                <h1 className="text-2xl font-bold text-blue-800">
                  Menjadi sekolah yang melahirkan generasi berkarakter unggul,
                  berkepribadian Islami, mandiri, beprestasi dan menebar
                  manfaat.
                </h1>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-4xl font-bold text-white">Misi</h1>
              <Accordion variant="shadow">
                <AccordionItem
                  key="1"
                  aria-label="Accordion 1"
                  title="Accordion 1"
                >
                  {defaultContent}
                </AccordionItem>
                <AccordionItem
                  key="2"
                  aria-label="Accordion 2"
                  title="Accordion 2"
                >
                  {defaultContent}
                </AccordionItem>
                <AccordionItem
                  key="3"
                  aria-label="Accordion 3"
                  title="Accordion 3"
                >
                  {defaultContent}
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          <div className="flex justify-between align-bottom py-8">
            <div className=" ">
              <Tabs
                key="mainTabs"
                variant="underlined"
                color="primary"
                aria-label="Tabs with group"
              >
                {/* Tab Profil Sekolah terpisah */}
                <Tab key="title" title={<h1>Profil Sekolah</h1>}>
                  {/* Konten untuk Profil Sekolah */}
                </Tab>

                {/* Mulai pengelompokan Tab Sekolah dan Asrama */}
                {/* <div className="grouped-tabs">
                  <Tab
                    key="sekolah"
                    title={
                      <div className="flex items-center space-x-2">
                        <IconBuilding />
                        <span className="text-sm font-medium">Asrama</span>
                      </div>
                    }
                  >
                    <CardProject />
                  </Tab>
                  TabPanel
                  <Tab
                    key="asrama"
                    title={
                      <div className="flex items-center space-x-2">
                        <IconSchool />
                        <span className="text-sm font-medium">Sekolah</span>
                      </div>
                    }
                  >
                  </Tab>
                </div> */}
              </Tabs>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </div>
  );
}