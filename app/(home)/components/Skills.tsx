"use client";

import React from "react";
import Title from "./Title";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiSupabase,
  SiGit,
} from "react-icons/si";

function Skills() {
  const skills = [
    { text: "React", Icon: SiReact },
    { text: "Next.js", Icon: SiNextdotjs },
    { text: "tailwind", Icon: SiTailwindcss },
    { text: "Typescript", Icon: SiTypescript },
    { text: "Supabase", Icon: SiSupabase },
    { text: "Git", Icon: SiGit },
  ];
  return (
    <section className="max-w-5xl mx-auto px-8">
      <Title
        text="Skills 🔪"
        className="flex flex-col items-center justify-center"
      />
      <HoverEffect items={skills} />
    </section>
  );
}

export default Skills;
