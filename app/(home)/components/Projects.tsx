import React from "react";
import Title from "./Title";
import {
  SiVuedotjs,
  SiReact,
  SiTailwindcss,
  SiNextdotjs,
  SiSupabase,
  SiNodedotjs,
  SiMongodb,
  SiPostman,
} from "react-icons/si";
import { IoShare } from "react-icons/io5";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import Link from "next/link";

function Projects() {
  const projects = [
    {
      title: "Student Management System 🧑‍🎓",
      tech: [SiVuedotjs, SiReact, SiTailwindcss],
      link: "#",
      cover: "/project-1.png",
      content:
        "An online platform designed to simplify tasks for the entire college. It focuses on gate pass management, attendance tracking, assignment submissions, chat, and video conferencing. By integrating these features, the platform enhances efficiency and communication for students, faculty, and administration, streamlining daily activities and making college life more organized and less stressful.",
      background: "bg-indigo-500",
      position: "left",
    },
    {
      title: "Tiara (e-commerce) 💸",
      tech: [SiNextdotjs, SiReact, SiSupabase, SiTailwindcss],
      link: "#",
      cover: "/project-2.png",
      content:
        "Tiara is an e-commerce clothing brand offering apparel for kids, men, and women. We provide a variety of styles, focusing on quality and comfort. Whether you're shopping for everyday wear or special occasions, Tiara has something for everyone.",
      background: "bg-green-500",
      position: "right",
    },
    {
      title: "Foodies 🍔",
      tech: [SiNextdotjs, SiReact],
      link: "#",
      cover: "/project-3.png",
      content:
        "Foodies is a website showcasing recipes from various users. You can browse diverse food recipes and add your own creations. It's a community for food enthusiasts to share and discover new dishes.",
      background: "bg-indigo-500",
      position: "left",
    },
    {
      title: "E-Bank 🏦",
      tech: [SiNextdotjs, SiReact, SiSupabase, SiTailwindcss],
      link: "#",
      cover: "/project-5.png",
      content:
        "E-Bank is a minimalistic banking platform offering smooth money transfers, simple loan requests, and easy account management. Transfer funds, request loans, and close accounts effortlessly, all within an intuitive and user-friendly interface designed to make banking stress-free and efficient.",
      background: "bg-green-500",
      position: "right",
    },
    {
      title: "EStateApp 🏠",
      tech: [SiReact, SiNodedotjs, SiMongodb, SiPostman],
      link: "#",
      cover: "/project-6.png",
      content:
        "user-friendly platform for listing and browsing plots and apartments for sale or rent. It features location and price details, with integrated chat for negotiation between sellers and clients, ensuring a seamless real estate transaction experience.",
      background: "bg-indigo-500",
      position: "left",
    },

    // {
    //   title: "Image Uploader 📷",
    //   tech: [SiNextdotjs, SiReact, SiSupabase, SiTailwindcss],
    //   link: "#",
    //   cover: "/project-1.png",
    //   background: "bg-green-500",
    //   position: "right",
    // },
  ];
  return (
    <section className="px-10 p-5 sm:p-0">
      <Title
        text="Projects 🎨"
        className="flex flex-col items-center justify-center"
      />
      {/* <div>
        <h2 className="text-xl text-center font-bold group-hover:text-green-400 transition-all mt-3">
          Each project is a unique piece of development 🧩
        </h2>
        <div className="flex flex-col items-center">
          <div className="w-40 h-2 bg-green-500 rounded-full"></div>
          <div className="w-28 h-2 bg-indigo-500 rounded-full translate-x-2"></div>
        </div>
      </div> */}
      <div className="grid grid-cols-1 pt-20 gap-5">
        {projects.map((project, index) => {
          return (
            <div
              key={index}
              className={`lg:flex ${
                project.position === "right" ? "flex-row-reverse" : ""
              } gap-10`}
            >
              <div
                className={cn("p-5 rounded-md lg:w-[50%]", project.background)}
              >
                <DirectionAwareHover
                  imageUrl={project.cover}
                  className="w-full"
                >
                  <div className="space-y-5 mb-3 mb-5">
                    <div className="flex items-center gap-5">
                      {project.tech.map((Icon, index) => {
                        return <Icon className="w-8 h-8" key={index} />;
                      })}
                    </div>
                  </div>
                </DirectionAwareHover>
              </div>

              <div className="space-y-3  flex flex-col items-center justify-center p-5 lg:w-[50%]">
                <h1 className="text-xl font-bold">{project.title}</h1>
                <p className="text-md text-center">{project.content}</p>
                {/* <Link href={project.link}>
                  <div className="flex text-xl mt-10 items-center gap-2">
                    Live demo <IoShare className="rotate-6" />
                  </div>
                  <div className="w-24 h-2 bg-green-500 rounded-full"></div>
                  <div className="w-24 h-2 bg-indigo-500 rounded-full translate-x-7"></div>
                </Link> */}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
