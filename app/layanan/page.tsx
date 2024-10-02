'use client'
import Banner from "@/components/banner";
import Description from "@/components/desc";
import Footer from "@/components/footer";
import Marquee from "@/components/magicui/marquee";
import { SkillsMarquee } from "@/components/demo";

export default function Layanan() {
    return (
        <section className="flex flex-col items-center justify-center gap-4">
            <Banner
                imgSrc={
                    "https://smktibazma.sch.id/static/media/masjid.d157934d98cee11f144c.jpg"
                }
                heading='Kemitraan'
            />
        </section>
    )
}