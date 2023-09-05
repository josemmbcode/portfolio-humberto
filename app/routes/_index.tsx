import type { V2_MetaFunction } from "@remix-run/node";
import Presentation from "~/components/Presentation";
import Projects from "~/components/Projects";
export const meta: V2_MetaFunction = () => {
  return [
    { title: "Humberto G. Bustillo" },
    { name: "description", content: "Welcome to my portfolio" },
  ];
};

export default function Index() {
  return (
    <div>
      <Presentation />
      <Projects />
    </div>
  );
}
