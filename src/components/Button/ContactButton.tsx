import React from "react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
});

type Props = {};

function ContactButton({}: Props) {
  return (
    <a href="#contact">
      <div
        className={`${montserrat.className} cursor-pointer hover:bg-white hover:text-[#040320] hover:transition-all hover:duration-300 duration-300 hover:shadow-xl hover:shadow-[#040320] flex flex-row justify-center items-center p-2 sm:p-4 gap-2 w-36 sm:w-48 h-10 sm:h-12 left-24  bg-[#040320]  rounded-full text-white font-bold text-[8px] sm:text-xs  tracking-widest`}
      >
        DEVIS GRATUIT
      </div>
    </a>
  );
}

export default ContactButton;
