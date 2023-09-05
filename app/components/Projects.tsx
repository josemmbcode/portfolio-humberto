import React from "react";
import ProjectItem from "./ProjectItem";
import SectionHeader from "./SectionHeader";
import { Link } from "@remix-run/react";
import { useRouteLoaderData } from "@remix-run/react";
import { loader } from "~/root";
import WritingItem from "./WritingItem";
import NoisyGridWrapper from "./NoisyGridWrapper";
import OtherStuffDetails from "./OtherStuffDetails";

export default function Projects() {
  const { projects } = useRouteLoaderData<typeof loader>("root")!;
  const films = projects.filter((projects) => projects.category === "films");
  const writing = projects.filter(
    (projects) => projects.category === "writing"
  );
  return (
    <NoisyGridWrapper>
      <SectionHeader title="FILMS" />
      <div className="flex flex-col items-center justify-center sm:justify-items-center sm:grid sm:grid-cols-3 z-10">
        {films.map((project) => (
          <Link prefetch="intent" to={`/${project.id}`} key={project.id}>
            <ProjectItem
              role={project.role}
              title={project.title}
              image={project.image}
              subcategory={project.subcategory}
            />
          </Link>
        ))}
      </div>
      <SectionHeader title="WRITING" />
      <div className="flex flex-col justify-center items-center sm:grid sm:grid-cols-2 sm:justify-items-center z-10 p-2">
        {writing.map((project) => (
          <Link prefetch="intent" to={`/${project.id}`} key={project.id}>
            <WritingItem
              role={project.role}
              title={project.title}
              image={project.image}
              subcategory={project.subcategory}
            />
          </Link>
        ))}
      </div>
      <SectionHeader title="OTHER STUFF" />
      <OtherStuffDetails />
      <p className="text-sm font-Montserrat text-center mt-8 text-fontYellow">
        Developed by: Jose Moreno
      </p>
    </NoisyGridWrapper>
  );
}
