import { ArticleContainer } from "@/sections/MainContent/components/ArticleContainer";

export const MainContent = () => {
  return (
    <div className="box-border caret-transparent max-w-none w-[90%] mx-auto px-[15px] md:max-w-[1140px] md:w-full">
      <div className="box-border caret-transparent flex flex-wrap ml-[-15px] mr-[-15px]">
        <ArticleContainer />
      </div>
    </div>
  );
};
