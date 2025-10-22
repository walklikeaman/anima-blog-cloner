import { FeaturedImage } from "@/sections/MainContent/components/FeaturedImage";

export const ArticleContainer = () => {
  return (
    <div className="relative items-center box-border caret-transparent basis-auto shrink max-w-none min-h-px w-full mb-[35px] mx-auto md:basis-full md:shrink-0 md:max-w-full">
      <article className="box-border caret-transparent mb-6">
        <FeaturedImage />
      </article>
    </div>
  );
};
