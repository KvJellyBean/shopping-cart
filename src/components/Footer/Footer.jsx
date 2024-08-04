import React from "react";
import { FooterLogo } from "./FooterLogo";
import { FooterContact } from "./FooterContact";
import { FooterNavLinks } from "./FooterNavLinks";
import { FooterCredits } from "./FooterCredits";

export const Footer = () => {
  return (
    <footer
      className="flex flex-col items-center justify-center gap-6 px-4 py-4 bg-primary text-background"
      data-testid="footer"
    >
      <div className="flex flex-col lg:justify-center gap-8 py-16 md:flex-row xl:gap-[10rem]">
        <FooterLogo />
        <FooterContact />
        <FooterNavLinks />
      </div>

      <div className="w-[90dvw] h-[2px] bg-background"></div>

      <FooterCredits />
    </footer>
  );
};
