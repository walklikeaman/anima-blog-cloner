export const SearchForm = () => {
  return (
    <div className="box-border caret-transparent table-cell align-middle">
      <form
        role="search"
        className="text-neutral-500 text-xl font-medium box-border caret-transparent inline-block leading-[30px] font-heebo"
      >
        <input
          type="search"
          name="s"
          value=" "
          className="text-transparent font-normal bg-transparent bg-[url('https://www.animaapp.com/blog/wp-content/themes/neori/img/search-icon.svg')] bg-no-repeat bg-size-[19px_21px] box-border -outline-offset-2 text-start w-[25px] bg-[position:0px_50%]"
        />
      </form>
    </div>
  );
};
