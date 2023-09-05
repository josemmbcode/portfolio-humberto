import React from "react";
import { useRouteLoaderData, useParams } from "@remix-run/react";
import { loader } from "~/root";


function ProjectDetails() {
  const { projects } = useRouteLoaderData<typeof loader>("root")!;
  const params = useParams();
  const projectDetails = projects.find(
    (project) => project.id === +params.projectId!
  );
  return (
    <>
      <h1 className="text-4xl tracking-[2rem] font-Montserrat font-black text-center p-2 text-paleYellow drop-shadow-[3px_3px_var(--tw-shadow-color)] shadow-black uppercase mb-4">
        {projectDetails?.category}
      </h1>
      <div className="flex flex-col sm:flex-row text-fontYellow z-30">
        <div className="flex-1 flex justify-start flex-col items-end space-y-8 2xl:ml-8">
          <p className=" text-right font-Barlow px-8">
            {projectDetails?.subcategory} / {projectDetails?.duration} /
            {projectDetails?.languages}
          </p>
          <h1 className="font-black font-Montserrat underline text-4xl text-right pr-8 w-80 tracking-widest ">
            {projectDetails?.title}
          </h1>
          <p className="text-right font-Barlow px-8 [word-spacing:10px] tracking-wider">
            <span className="font-bold">Credits:</span>{" "}
            {projectDetails?.credits}
          </p>
          <p className="text-justify font-Barlow pl-32 pr-8 py-2 font-semibold text-last-right">
            {projectDetails?.quote}
          </p>
          {projectDetails?.category === "films" && projectDetails.title != 'Santo Fantasma' && (
            <div className="text-right px-8 font-Barlow tracking-wider">
              <span className="underline line-clamp-1 font-Montserrat font-semibold">
                Awards & Festivals
              </span>
              {Object.entries(projectDetails?.awards!).map(([k, v]) => (
                <p key={k}>
                  {k}. {v}
                </p>
              ))}
            </div>
          )}
        </div>
        <div className="flex-1 sm:ml-2 z-50 flex flex-col items-center">
          <img
            className="h-80 lg:h-96 w-full object-center px-6 2xl:pr-40"
            src={
              projectDetails?.secondImage
                ? projectDetails?.secondImage
                : projectDetails?.image
            }
          />
          <p className="underline font-semibold font-Barlow self-start px-6 2xl:pr-40">
            SYNOPSIS
          </p>
          <p className="font-Barlow px-6 py-2 2xl:pr-40">{projectDetails?.synopsis}</p>
          <a
            href={projectDetails?.attachment}
            className="font-Barlow mx-6 2xl:mr-40 p-1 bg-purple-800 tracking-wider hover:underline font-semibold self-start"
          >
            {projectDetails?.category === "films"
              ? "Watch the trailer"
              : "Read it here"}
          </a>
        </div>
      </div>
    </>
  );
}

export default ProjectDetails;
