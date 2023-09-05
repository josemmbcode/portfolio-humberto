import React from "react";

function NoisyGridWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className='sm:min-h-screen bg-grid bg-center bg-cover'>
      <div className="bg-[url('/images/noise.png')] bg-transparent bg-repeat visible fixed -top-1/2 -left-1/2 -right-1/2 -bottom-1/2 h-[200vh] width-full  animate-noisy opacity-30" />
      {children}
    </div>
  );
}

export default NoisyGridWrapper;
