"use client";

import React from "react";
import Image from "next/image";
import { BackgroundGradient } from "./ui/background-gradient";

export function CardProject({
  title,
  description,
  image,
  technologies,
}: {
  title: string;
  description: string;
  image: string;
  technologies: string[];
}) {
  return (
    <div className="w-60 sm:w-80">
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-6 bg-zinc-200 dark:bg-zinc-900">
        <Image
          src={image}
          alt="jordans"
          width="180"
          height="180"
          className="object-contain mx-auto"
        />
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          {title}
        </p>

        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {description}
        </p>
        <div className="rounded-lg p-2 text-white flex items-center justify-between space-x-1 mt-4 text-xs font-bold dark:bg-zinc-800">
          {technologies.map((technology) => (
            <div
              className="px-2 py-1 rounded-lg bg-zinc-500 w-12 h-12"
              key={technology}
            >
              {technology}
            </div>
          ))}
        </div>
      </BackgroundGradient>
    </div>
  );
}
