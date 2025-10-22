import { TopNavbar } from "./sections/TopNavbar";
import { BlogHeader } from "./sections/BlogHeader";
import { MainContent } from "./sections/MainContent";
import { Footer } from "./sections/Footer";
import { FloatingWidget } from "./components/FloatingWidget";

export const App = () => {
  return (
    <body className="text-neutral-800 text-base not-italic normal-nums font-normal accent-auto bg-white box-border caret-transparent block tracking-[normal] leading-6 list-outside list-disc overflow-x-hidden overflow-y-auto pointer-events-auto text-left indent-[0px] normal-case visible border-separate font-mulish_regular">
      <div className="box-border caret-transparent">
        <TopNavbar />
        <BlogHeader />
        <div className="absolute text-white bg-transparent box-border caret-transparent block h-10 opacity-80 text-center text-nowrap w-10 z-[9999999] overflow-hidden ml-auto mr-[30px] pt-[9px] rounded-[50%] left-[15px] right-auto top-3.5 md:fixed md:text-neutral-800 md:bg-gray-200/70 md:hidden md:z-[98] md:mr-auto md:top-[25px] md:inset-x-0">
          <i className="text-white font-black bg-[url('https://www.animaapp.com/blog/wp-content/uploads/2022/08/menu-icon-mbl-1.png')] bg-no-repeat bg-contain box-border caret-transparent inline-block h-[30px] leading-4 text-nowrap w-6 font-font_awesome_6_free md:text-neutral-800 md:bg-none md:bg-repeat md:bg-auto md:h-auto md:w-auto before:accent-auto before:box-border before:caret-transparent before:text-white before:hidden before:text-base before:not-italic before:normal-nums before:font-black before:tracking-[normal] before:leading-4 before:list-outside before:list-disc before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:text-nowrap before:visible before:border-separate before:font-font_awesome_6_free before:md:text-neutral-800 before:md:inline"></i>
        </div>
        <MainContent />
        <Footer />
        <footer className="box-border caret-transparent hidden max-w-[830px] text-center mb-10 mx-auto">
          <div className="box-border caret-transparent max-w-none w-[90%] mx-auto px-[15px] md:max-w-[1140px] md:w-full">
            <div className="box-border caret-transparent mb-[25px]"></div>
            <p className="text-zinc-400 text-[15px] box-border caret-transparent leading-[27px] mb-[35px] md:text-zinc-500 md:text-base md:leading-6"></p>
            <nav className="relative box-border caret-transparent mb-[35px] md:mb-[30px]"></nav>
            <p className="text-[15px] font-bold box-border caret-transparent leading-[22.5px] mb-[5px] md:text-base md:leading-6">
              Copyright ©2025 Anima Blog
            </p>
            <p className="text-stone-300 text-[15px] box-border caret-transparent leading-[22.5px] mb-4 md:text-base md:leading-6">
              Neori theme, designed by{" "}
              <a
                href="http://litmotion.net/"
                className="text-[15px] font-bold box-border caret-transparent leading-[22.5px] md:text-base md:leading-6 hover:text-neutral-900 hover:border-neutral-900"
              >
                litMotion Templates
              </a>
            </p>
          </div>
        </footer>
      </div>
      <FloatingWidget />
      <span className="box-border caret-transparent hidden">3951</span>
      <img className="aspect-[auto_1_/_1] box-border caret-transparent hidden h-px w-px" />
      <img className="aspect-[auto_1_/_1] box-border caret-transparent hidden h-px w-px" />
      <img className="aspect-[auto_1_/_1] box-border caret-transparent hidden h-px w-px" />
      <img className="aspect-[auto_1_/_1] box-border caret-transparent hidden h-px w-px" />
    </body>
  );
};
