import Link from "next/link";
import React from "react";
import Title from "./Title";
import { BackgroundBeams } from "@/components/ui/background-beams";

function HeroSection() {
  return (
    <section className="relative min-h-[60vh] flex flex-col-reverse gap-14 lg:gap-0 lg:flex-row items-center justify-around">
      <div className="space-y-10 text-center lg:text-left">
        <h1 className="text-4xl lg:text-7xl font-bold">
          Nice to meet you! 👋 <br />
          <span className="underline underline-offset-8 decoration-green-500">
            {"I'm Shahad."}
          </span>
        </h1>
        <p className="md:w-96 text-lg text-gray-300">
          {
            "Based in India 🇮🇳, I'm a Front-end React developer passionate about buliding modern web application that users love."
          }
        </p>
        <Link
          href={"mailto:pichenshahad@gmail.com"}
          className="inline-block group"
        >
          <Title text="Contact Me 📬" className={""} />
        </Link>
      </div>

      <div>
        <div className="home_img border-[10px] border-indigo-500"></div>
      </div>
      <BackgroundBeams />
    </section>
  );
}

export default HeroSection;
