"use client";

import React from "react";
import Title from "./Title";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import {
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiSupabase,
  SiDocker,
  SiNodedotjs,
  SiMongodb,
  SiJest,
  SiPostgresql,
} from "react-icons/si";

function Skills() {
  const skills = [
    { text: "React", Icon: SiReact },
    { text: "Jest", Icon: SiJest },
    { text: "tailwind", Icon: SiTailwindcss },
    { text: "Typescript", Icon: SiTypescript },
    { text: "Supabase", Icon: SiSupabase },
    { text: "Docker", Icon: SiDocker },
    { text: "Node.js", Icon: SiNodedotjs },
    { text: "MongoDB", Icon: SiMongodb },
    { text: "Postgres", Icon: SiPostgresql },
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
