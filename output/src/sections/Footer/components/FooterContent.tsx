import { FooterBrand } from "@/sections/Footer/components/FooterBrand";
import { FooterCopyright } from "@/sections/Footer/components/FooterCopyright";

export const FooterContent = () => {
  return (
    <div className="box-border caret-transparent grow max-w-full w-full mx-auto px-[15px] md:grow-0 md:max-w-[1140px]">
      <div className="box-border caret-transparent flex flex-wrap ml-[-15px] mr-[-15px]">
        <FooterBrand />
        <div className="relative box-border caret-transparent basis-auto grow shrink max-w-full min-h-px w-full px-[15px] md:basis-6/12 md:grow-0 md:shrink-0 md:max-w-[50%]"></div>
        <FooterCopyright />
      </div>
    </div>
  );
};
