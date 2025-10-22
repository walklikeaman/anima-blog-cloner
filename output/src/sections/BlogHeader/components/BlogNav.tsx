import { DesktopBlogMenu } from "@/sections/BlogHeader/components/DesktopBlogMenu";

export const BlogNav = () => {
  return (
    <nav className="relative box-border caret-transparent hidden pt-[3px] md:block">
      <DesktopBlogMenu />
    </nav>
  );
};
