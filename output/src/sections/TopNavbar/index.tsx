import { NavbarLogo } from "@/sections/TopNavbar/components/NavbarLogo";
import { DesktopNav } from "@/sections/TopNavbar/components/DesktopNav";

export const TopNavbar = () => {
  return (
    <div className="static items-center bg-transparent shadow-none box-border caret-transparent hidden w-auto z-auto py-0 top-auto md:fixed md:bg-white md:shadow-[rgba(0,0,0,0.08)_0px_5px_18px_0px] md:w-full md:z-[99] md:py-[13px] md:top-0">
      <div className="box-border caret-transparent max-w-none w-[90%] mx-auto px-[15px] md:max-w-[1140px] md:w-full">
        <NavbarLogo />
        <DesktopNav />
      </div>
    </div>
  );
};
