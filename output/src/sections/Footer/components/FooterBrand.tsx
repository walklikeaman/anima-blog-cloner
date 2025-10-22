import { FooterLogo } from "@/sections/Footer/components/FooterLogo";
import { FooterDescription } from "@/sections/Footer/components/FooterDescription";
import { SocialLinks } from "@/sections/Footer/components/SocialLinks";

export const FooterBrand = () => {
  return (
    <div className="relative box-border caret-transparent basis-auto grow shrink max-w-full min-h-px w-full px-[15px] md:basis-6/12 md:grow-0 md:shrink-0 md:max-w-[50%]">
      <FooterLogo />
      <div className="box-border caret-transparent">
        <FooterDescription />
      </div>
      <SocialLinks />
    </div>
  );
};
