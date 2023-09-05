import { Link } from "@remix-run/react";
import React from "react";

function OtherStuffDetails() {
  return (
    <div className="flex flex-col text-fontYellow  p-4 space-y-8 items-center z-40">
      <div className="flex flex-col sm:flex-row justify-center space-x-14 items-center z-50">
        <p className="font-Montserrat sm:text-2xl underline w-80">
          Video editing & content creation
        </p>
        <p className="font-Barlow w-72 text-lg text-justify">
          I’ve edited videos for different content creators and platforms. You
          can look at{" "}
          <Link
            className="underline z-50"
            to={"https://www.youtube.com/watch?v=CgPCOJLNePc&t=2s"}
          >
            this
          </Link>
          ,{" "}
          <Link
            className="underline z-50"
            to={"https://www.youtube.com/watch?v=FyDxalf49xM&t=3s"}
          >
            this
          </Link>
          , or even{" "}
          <Link
            className="underline z-50"
            to={"https://www.youtube.com/watch?v=O9akFNpXKhQ"}
          >
            this
          </Link>{" "}
          example that showcases a bit of the work I’ve done.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row justify-center space-x-14 items-center z-40">
        <p className="font-Montserrat sm:text-2xl underline w-80">
          Host & producer of film and TV podcast
        </p>
        <p className="font-Barlow w-72 text-lg text-justify">
          I produced and hosted the film and tv podcast{" "}
          <Link
            className="font-semibold z-50"
            to={"https://open.spotify.com/show/0tvXLRTiW4jvbnajRVOoba"}
          >
            Vicio Propio
          </Link>
          , alongside co-host and producer Oriana Mata.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row justify-center space-x-14 items-center z-30">
        <p className="font-Montserrat sm:text-2xl underline w-80">
          Director, producer & co-owner of a small film company based in New
          York & Buenos Aires
        </p>
        <p className="font-Barlow w-72 text-lg text-justify z-40">
          Diego Murillo, a dear filmmaker friend and I created the film company{" "}
          <span className="font-semibold">DAMN PHANTOM</span>, which has
          produced a variety of films that range from horror and drama, to
          nonfiction speculation.{" "}
          <Link className="z-50 underline" to={"www.damnphantom.com"}>
            Check it out!
          </Link>
        </p>
      </div>
      <div className="flex flex-col sm:flex-row justify-center space-x-14 items-center z-20">
        <p className="font-Montserrat sm:text-2xl underline w-80">
          Film critic & essayist
        </p>
        <p className="font-Barlow w-72 text-lg text-justify">
          In the beginning of my career, when I graduated from journalism, I
          worked as a film critic for different media outlets around the world.
          <Link
            className="underline z-50"
            to={
              "https://guidedoc.tv/blog/The-final-film-from-Jean-Luc-Godard-Le-Livre-DImage/"
            }
          >
            This
          </Link>{" "}
          and{" "}
          <Link
            className="underline z-50"
            to={"https://desistfilm.com/joachim-trier-la-forma-como-juego/"}
          >
            this
          </Link>{" "}
          are some of the articles I wrote. I also edited video essays like{" "}
          <Link
            className="underline z-50"
            to={"https://www.youtube.com/watch?v=ofcypJuLdSI"}
          >
            this
          </Link>
          .
        </p>
      </div>
    </div>
  );
}

export default OtherStuffDetails;
