export type BlogCardProps = {
  articleUrl: string;
  imageUrl: string;
  imageAlt: string;
  imageSizeVariant: string;
  categories: Array<{
    url: string;
    title: string;
    label: string;
  }>;
  title: string;
  titleUrl: string;
  description: string;
  readingTime: string;
  authorImageUrl: string;
  authorImageAlt: string;
  authorName: string;
  authorUrl: string;
  publishDate: string;
};

export const BlogCard = (props: BlogCardProps) => {
  return (
    <article className="relative items-center box-border caret-transparent flex basis-auto flex-col shrink justify-start max-w-none min-h-px w-full mb-[90px] px-[15px] md:basis-[33.3333%] md:shrink-0 md:max-w-[33.3333%]">
      <div className="box-border caret-transparent h-auto w-full overflow-hidden rounded-md md:h-[235px] md:w-auto">
        <a
          href={props.articleUrl}
          className="text-blue-700 font-medium box-border caret-transparent hover:text-indigo-800 hover:border-indigo-800"
        >
          <img
            src={props.imageUrl}
            alt={props.imageAlt}
            sizes={props.imageSizeVariant}
            className={`box-border caret-transparent h-auto max-w-full object-cover w-full rounded-[7px] md:h-[235px] ${props.imageSizeVariant}`}
          />
        </a>
      </div>
      <div className="box-border caret-transparent flex flex-col grow justify-start mt-[25px] px-5 md:mt-0">
        <div className="box-border caret-transparent mt-5 mb-2.5">
          <span className="box-border caret-transparent">
            {props.categories.map((category, index) => (
              <a
                key={index}
                href={category.url}
                title={category.title}
                className="text-red-500 font-medium box-border caret-transparent lowercase"
              >
                {category.label}
              </a>
            ))}
          </span>
        </div>
        <h2 className="text-zinc-800 text-2xl font-bold box-border caret-transparent leading-[35px] max-w-[730px] min-h-20 mb-5 font-roslindale_decknarrowbold">
          <a
            href={props.titleUrl}
            className="text-neutral-900 box-border caret-transparent hover:text-black hover:border-black"
          >
            {props.title}
          </a>
        </h2>
        <p className="text-zinc-500 text-[15px] box-border caret-transparent basis-[100px] grow leading-[26px] mb-3.5 md:text-base md:leading-[25px]">
          <span className="text-[15px] box-border caret-transparent hidden leading-[26px] md:text-base md:leading-[25px]">
            <span className="text-[15px] box-border caret-transparent leading-[26px] md:text-base md:leading-[25px]">
              Reading Time:{" "}
            </span>
            <span className="text-[15px] box-border caret-transparent leading-[26px] md:text-base md:leading-[25px]">
              {" "}
              {props.readingTime}
            </span>
            <span className="text-[15px] box-border caret-transparent leading-[26px] md:text-base md:leading-[25px]">
              minutes
            </span>
          </span>
          {props.description}
        </p>
        <div className="items-center box-border caret-transparent flex">
          <div className="items-center box-border caret-transparent flex min-h-[30px] w-6/12 mb-4">
            <img
              alt={props.authorImageAlt}
              src={props.authorImageUrl}
              className="aspect-[auto_35_/_35] box-border caret-transparent h-10 max-w-full w-10 mr-1.5 rounded-[100px]"
            />
            <div className="box-border caret-transparent leading-[14px]">
              <a
                href={props.authorUrl}
                title={`Posts by ${props.authorName}`}
                className="text-zinc-800 text-xs font-medium box-border caret-transparent opacity-60"
              >
                {props.authorName}
              </a>
            </div>
          </div>
          <div className="text-zinc-500 text-sm box-border caret-transparent leading-[14px] text-right w-6/12 mb-[15px] md:text-[15px]">
            <span className="text-zinc-800 text-xs border-b-zinc-800 border-l-zinc-800 border-r-neutral-300 border-t-zinc-800 box-border caret-transparent opacity-60 pr-[5px] border-r">
              {props.publishDate}
            </span>
            <span className="text-zinc-800 text-xs box-border caret-transparent opacity-60 ml-px">
              <span className="box-border caret-transparent inline-block opacity-60 mr-[3px]">
                <span className="box-border caret-transparent opacity-60"></span>
                <span className="box-border caret-transparent">
                  {" "}
                  {props.readingTime}
                </span>
                <span className="box-border caret-transparent opacity-60"></span>
              </span>
              min
            </span>
          </div>
        </div>
      </div>
    </article>
  );
};
