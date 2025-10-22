export const FloatingWidget = () => {
  return (
    <div className="fixed items-center box-border caret-transparent gap-x-2 flex gap-y-2 z-[2147483647] right-2.5 bottom-2.5">
      <div className="items-center box-border caret-transparent flex justify-center">
        <div className="items-center box-border caret-transparent gap-x-1 flex h-full justify-center gap-y-1 w-full">
          <div className="relative text-white items-center bg-neutral-700 box-border caret-transparent gap-x-0.5 flex h-[34px] justify-between gap-y-0.5 w-[75px] p-0.5 rounded-full">
            <div className="items-center box-border caret-transparent flex justify-center w-fit mx-0.5">
              <img
                src="https://c.animaapp.com/mh1uo1b9FcJfkA/assets/icon-1.svg"
                alt="Icon"
                className="box-border caret-transparent w-4/5"
              />
            </div>
            <span className="absolute items-center bg-white shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_10px_15px_-3px,rgba(0,0,0,0.1)_0px_4px_6px_-4px] box-border caret-transparent flex justify-center rounded-full left-0.5"></span>
            <div className="items-center box-border caret-transparent flex justify-center w-fit mx-0.5">
              <img
                src="https://c.animaapp.com/mh1uo1b9FcJfkA/assets/icon-2.svg"
                alt="Icon"
                className="box-border caret-transparent w-4/5"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
