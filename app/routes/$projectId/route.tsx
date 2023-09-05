import { V2_MetaFunction } from "@remix-run/react";
import React from "react";
import NoisyGridWrapper from "~/components/NoisyGridWrapper";
import ProjectDetails from "~/components/ProjectDetails";
export const meta: V2_MetaFunction = () => {
  return [
    { title: "Humberto Gonzalez" },
    { name: "description", content: "Welcome to my portfolio" },
  ];
};
function Route() {
  return (
    <NoisyGridWrapper>
      <ProjectDetails />
    </NoisyGridWrapper>
  );
}

export default Route;
