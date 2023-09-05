import { V2_MetaFunction } from "@remix-run/react";
import React from "react";
import NoisyGridWrapper from "~/components/NoisyGridWrapper";
export const meta: V2_MetaFunction = () => {
  return [
    { title: "Humberto Gonzalez" },
    { name: "description", content: "Welcome to my portfolio" },
  ];
};
function route() {
  return (
    <NoisyGridWrapper>
      <h1 className="font-Montserrat text-4xl font-black tracking-widest sm:tracking-[2rem] text-center text-paleYellow">
        HOLA, I'M HUMBERTO!
      </h1>
      <div className="flex flex-col sm:flex-row sm:h-screen relative">
        <img src="/images/about.jpg" className="h-[90vh] self-end mx-4" />
        <p className="font-Barlow p-4 text-paleYellow text-justify">
          Humberto is an award-winning Venezuelan author of fictional
          narratives, as well as a director and producer of nonfiction films.
          His works have been showcased at international film festivals in Asia,
          Europe and America, with his first film "Aphorisms of the Lake" (2021)
          being showcased at the Sheffield Doc/Fest in the UK. This led him to
          be awarded the Best Documentary Short and Best Editing awards at the
          Venezuelan Film Festival, as well as the prestigious Best Short Film
          award at the Diego Risquez Prize in Venezuela. <br />
          <br />
          His second short film, "Memory Eve," was commissioned by the Buenos
          Aires Museum of Cinema. Tasked with reimagining "El Último Malón," a
          legendary documentary by Argentinian director Alcides Greca, Humberto
          crafted a new cinematic essay. This piece was featured at the Mar Del
          Plata International Film Festival in 2022.
          <br />
          <br /> "Fatherspy," Humberto's most recent short film, emerges as a
          poignant nonfiction tribute. Conceived during the Covid-19 pandemic,
          it revolves around the director's personal journey of loss and
          separation when his father passed away while residing in distant
          Venezuela, while he lived in Argentina. In a blend of reality and
          imagination, Humberto speculates on his father's enigmatic departure,
          weaving an intricate tapestry of fictional narrative with documentary
          materials. The film made its debut at the Syncro Film Festival in
          Argentina in 2023.
          <br />
          <br /> Beyond his directorial ventures, Humberto has also contributed
          as a co-producer for Diego Murillo's films "Perhaps Hell is White" and
          "Transatlantic Malaise." These works premiered at distinguished film
          festivals like the Locarno Film Festival.
          <br />
          <br /> Before his immersion in directing and producing, Humberto
          embarked on his artistic journey as a scriptwriter, writing narratives
          for a global a variety of clients around the world. His storytelling
          ranges from drama and comedy to horror and sff. This trajectory led
          him to a fruitful collaboration with Venezuelan director Hector Silva
          Núñez, serving as an Assistant Director and Script Supervisor for the
          film "The Foreign Body." The film had its world premiere at
          prestigious Toronto International Film Festival in 2018.
          <br />
          <br /> Humberto is deeply intrigued by the profound interplay between
          real-life experiences and the realm of fiction. He recognizes the
          potency of speculative tales as a means to confront and transcend
          generational traumas. His affinity for genre cinema, an inheritance
          from his father, remains a prevailing influence in all his creative
          endeavors. His experiences have afforded him the opportunity not only
          to create but also to immerse himself in the role of assisting and
          producing and of both small and large projects. <br />
          <br /> He currently lives in Buenos Aires, along with his younger
          brother Juan, and his chunky cat Manolo, working as a freelance video
          editor and content creation as a freelancer while he works on his
          personal passion projects.
        </p>
      </div>
    </NoisyGridWrapper>
  );
}

export default route;
