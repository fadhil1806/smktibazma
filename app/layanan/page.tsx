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
                    "https://smktibazma.sch.id/static/media/hero-1.2803f83852406277b6cd.jpg"
                }
                heading='Kemitraan'
            />
        </section>
    )
}