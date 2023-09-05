import React from "react";

function SectionHeader({ title }: { title: string }) {
  return (
    <div className="bg-fontYellow">
    <h1 className='text-lg tracking-widest  sm:text-4xl sm:tracking-[2rem] font-Montserrat font-black text-center p-2 text-[#fff3c1] drop-shadow-[3px_3px_var(--tw-shadow-color)] shadow-black'>{title}</h1>
    </div>
  );
}

export default SectionHeader;
