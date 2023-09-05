import React from "react";

function ProjectItem({
  title,
  image,
  role,
  subcategory,
}: {
  title: string;
  image: string;
  role: string;
  subcategory: string;
}) {
  return (
    <div className="relative sm:m-8 h-auto sm:w-[45vw] z-50 cursor-pointer group overflow-hidden">
      <img
        className="object-cover object-center h-full w-full sm:transition-opacity sm:duration-300 sm:ease-in-out sm:group-hover:opacity-0"
        src={image}
      />
      <div className="absolute top-0 opacity-0 flex justify-center items-center bg-bgYellow text-fontYellow font-Montserrat h-full w-full sm:transition-opacity sm:duration-300 sm:ease-in-out sm:group-hover:opacity-100">
        <div className="p-8 space-y-2">
          <p className="text-center">{subcategory}</p>
          <h1 className="font-black text-center text-3xl">{title}</h1>
          <p className="text-right">{role}</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
