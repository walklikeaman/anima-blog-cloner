import { BlogHeaderContent } from "@/sections/BlogHeader/components/BlogHeaderContent";

export const BlogHeader = () => {
  return (
    <div className="relative bg-zinc-800 box-border caret-transparent z-[99999] p-[15px] md:static md:z-auto md:pl-10 md:pr-[22px] md:py-[22px]">
      <BlogHeaderContent />
    </div>
  );
};
