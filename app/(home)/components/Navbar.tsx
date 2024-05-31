import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { SiGithub } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";

function Navbar({ className }: { className?: string }) {
  const socials = [
    {
      Link: "https://www.linkedin.com/in/shahad-pichen-a42bb828b/",
      label: "Github",
      Icon: SiLinkedin,
    },
    {
      Link: "https://www.linkedin.com/in/shahad-pichen-a42bb828b/",
      label: "Linkedin",
      Icon: SiGithub,
    },
  ];
  return (
    <nav className={cn("py-10 flex justify-between items-center", className)}>
      <h1 className="text-sxl font-bold underline underline-offset-8 decoration-green-500 -rotate-2">
        Shahad Abdul Salam Pichen 👨‍💻
      </h1>
      <div className="flex items-center gap-5">
        {socials.map((social, index) => {
          const Icon = social.Icon;
          return (
            <Link href={social.Link} key={index} aria-label={social.label}>
              <Icon className="h-5 w-5 hover:scale-125 transition-all" />
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export default Navbar;
