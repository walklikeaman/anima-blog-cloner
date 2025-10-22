export const FooterCopyright = () => {
  return (
    <div className="relative box-border caret-transparent basis-auto shrink max-w-none min-h-px w-full px-[15px] md:basis-full md:shrink-0 md:max-w-full">
      <div className="text-white border-t-neutral-600 box-border caret-transparent mt-[60px] pt-[50px] border-t-2 border-b-white border-x-white">
        <div className="box-border caret-transparent">
          <div className="items-center box-border caret-transparent block md:flex">
            <p className="box-border caret-transparent min-h-0 min-w-0 w-full mb-4 md:min-h-[auto] md:min-w-[auto] md:w-3/5">
              <a
                href="https://animaapp.s3.amazonaws.com/home/TOS.pdf"
                className="box-border caret-transparent underline"
              >
                Privacy &amp; Terms of Use
              </a>
            </p>
            <p className="box-border caret-transparent min-h-0 min-w-0 text-left w-full mb-4 md:min-h-[auto] md:min-w-[auto] md:text-right md:w-2/5">
              © 2025 Anima | All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
