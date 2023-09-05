import React from "react";

function Marquee() {
  return (
    <div className="relative flex overflow-x-hidden text-rojo bg-beige font-Montserrat">
      <div className="pb-4 pt-2 animate-marquee whitespace-nowrap">
        <span className="mx-4 text-2xl">
          STUFF I'VE DONE: Film Director, Video Editor, Producer, Assistant
          Director, Script Supervisor, Screenwriter, Interactive Fiction Writer,
          RPG Gamer, Love of Critical Role, House of Leaves enjoyer, Cat
          defender
        </span>
        <span className="mx-4 text-2xl">
          STUFF I USE: Premiere Pro, After Effects, Photoshop, Scrivener,
          Notion, Excel Spreadsheets, Twine (learning), UE5(learning)
        </span>
      </div>

      <div className="absolute top-0 pb-4 pt-2 animate-marquee2 whitespace-nowrap">
      <span className="mx-4 text-2xl">
          STUFF I'VE DONE: Film Director, Video Editor, Producer, Assistant
          Director, Script Supervisor, Screenwriter, Interactive Fiction Writer,
          RPG Gamer, Love of Critical Role, House of Leaves enjoyer, Cat
          defender
        </span>
        <span className="mx-4 text-2xl">
          STUFF I USE: Premiere Pro, After Effects, Photoshop, Scrivener,
          Notion, Excel Spreadsheets, Twine (learning), UE5(learning)
        </span>
      </div>
    </div>
  );
}

export default Marquee;
