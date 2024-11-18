import Image from "next/image";

import { CardProject } from "@/components/card-projects";
import Link from "next/link";
import { FlipWords } from "@/components/ui/flip-words";
import { playfairDisplay } from "./fonts/fonts";

const projects = [
  {
    id: "1",
    title: "Placa&Fipe",
    description:
      "Mobile app developed with React Native for vehicle price search.",
    image: "/icon-placa-e-fipe.png",
    technologies: ["React Native", "Expo", "TypeScript", "Tailwind"],
    url: "/placa-fipe",
  },
];

export default function Home() {
  const words = ["better", "cute", "beautiful", "modern"];

  return (
    <div className="w-full min-h-screen bg-gray-950">
      <div className="mt-14 w-full flex flex-col gap-2 items-center justify-center px-8 py-4">
        <div className="text-4xl mx-auto font-normal text-neutral-300 dark:text-neutral-400">
          Build
          <FlipWords className="text-blue-300" words={words} /> <br />
          mobile apps!
        </div>

        <div className="p-4 w-full max-w-7xl flex flex-col sm:flex-row sm:flex-wrap gap-2 items-center justify-around">
          {projects.map((project) => (
            <Link key={project.id} href={project.url}>
              <CardProject
                title={project.title}
                description={project.description}
                image={project.image}
                technologies={project.technologies}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
