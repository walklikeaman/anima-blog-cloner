export const MobileBlogMenu = () => {
  return (
    <div className="fixed bg-zinc-800 box-border caret-transparent hidden z-[-1] overflow-scroll pt-[98px] pb-[7%] px-6 inset-0 md:bg-white md:z-[999999] md:pt-[30px] md:px-[7%]">
      <i className="text-neutral-700 text-[28px] font-black box-border caret-transparent hidden leading-7 text-center mb-[30px] mx-auto font-font_awesome_6_free md:block before:accent-auto before:box-border before:caret-transparent before:text-neutral-700 before:text-[28px] before:not-italic before:normal-nums before:font-black before:tracking-[normal] before:leading-7 before:list-outside before:list-disc before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_6_free"></i>
      <div className="box-border caret-transparent hidden text-center mb-[35px] md:block">
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
      <div className="box-border caret-transparent">
        <ul className="box-border caret-transparent list-none pl-0 font-roslindale_textregular">
          <li className="border-b-zinc-300/50 border-l-neutral-800 border-r-neutral-800 border-t-neutral-800 box-border caret-transparent uppercase mt-6 pb-[15px] border-b md:border-b-zinc-100 md:mt-[13px] md:pb-[13px] md:border-b-2">
            <a
              href="#"
              className="text-white text-2xl box-border caret-transparent leading-9 capitalize md:text-neutral-900 md:text-base md:leading-6 md:uppercase after:accent-auto after:border-t-neutral-900 after:box-border after:caret-transparent after:text-white after:hidden after:text-2xl after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-9 after:list-outside after:list-none after:pointer-events-auto after:absolute after:text-left after:indent-[0px] after:capitalize after:visible after:mt-2.5 after:border-t-[6px] after:border-b-transparent after:border-x-transparent after:border-x-4 after:border-separate after:border-solid after:right-[30px] after:font-roslindale_textregular after:md:text-neutral-900 after:md:block after:md:text-base after:md:leading-6 after:md:uppercase hover:text-black hover:border-black"
            >
              Solutions{" "}
              <span className="text-white text-[13px] font-black box-border caret-transparent block float-right leading-[13px] capitalize pt-2.5 font-font_awesome_6_free md:text-neutral-900 md:text-base md:inline-block md:float-none md:leading-4 md:uppercase md:pt-0 before:accent-auto before:box-border before:caret-transparent before:text-white before:text-[13px] before:not-italic before:normal-nums before:font-black before:tracking-[normal] before:leading-[13px] before:list-outside before:list-none before:pointer-events-auto before:text-left before:indent-[0px] before:capitalize before:visible before:border-separate before:font-font_awesome_6_free before:md:text-neutral-900 before:md:text-base before:md:leading-4 before:md:uppercase"></span>
            </a>
            <ul className="bg-neutral-700 box-border caret-transparent hidden w-full z-[999] mt-6 pl-[22px] pr-[70px] pt-[23px] pb-0.5 rounded-[10px] md:w-auto md:mt-5 md:pl-[35px] md:pr-5 md:py-5">
              <li className="items-center box-border caret-transparent flex normal-case mb-[22px] rounded-t-[5px] md:mb-1">
                <a
                  href="https://www.animaapp.com/figma"
                  className="text-white text-[15px] box-border caret-transparent block leading-10 capitalize md:text-neutral-600 md:leading-[22.5px] md:normal-case hover:text-black hover:border-black"
                >
                  <img
                    src="https://c.animaapp.com/mh1uo1b9FcJfkA/assets/image-2.gif"
                    className="text-white box-border caret-transparent h-[25px] leading-10 capitalize w-[25px] mr-2 md:text-neutral-600 md:leading-[22.5px] md:normal-case"
                  />
                  Figma
                </a>
              </li>
              <li className="items-center box-border caret-transparent flex normal-case mb-[22px] md:mb-1">
                <a
                  href="https://www.animaapp.com/api"
                  className="text-white text-[15px] box-border caret-transparent block leading-10 capitalize md:text-neutral-600 md:leading-[22.5px] md:normal-case hover:text-black hover:border-black"
                >
                  <img
                    src="https://c.animaapp.com/mh1uo1b9FcJfkA/assets/image-2.gif"
                    className="text-white box-border caret-transparent h-[25px] leading-10 capitalize w-[25px] mr-2 md:text-neutral-600 md:leading-[22.5px] md:normal-case"
                  />
                  API
                </a>
              </li>
              <li className="items-center box-border caret-transparent flex normal-case mb-[22px] md:mb-1">
                <a
                  href="https://www.animaapp.com/an?url=https%3A%2F%2Fchromewebstore.google.com%2Fdetail%2Fanima-website-importer%2Fpaddhneaanoeljlmdepnheehdkaegblo&utm_content=chrome-ext-nav&utm_campaign=chrome-ext&utm_medium=website&utm_source=content"
                  className="text-white text-[15px] box-border caret-transparent block leading-10 capitalize md:text-neutral-600 md:leading-[22.5px] md:normal-case hover:text-black hover:border-black"
                >
                  <img
                    src="https://c.animaapp.com/mh1uo1b9FcJfkA/assets/image-2.gif"
                    className="text-white box-border caret-transparent h-[25px] leading-10 capitalize w-[25px] mr-2 md:text-neutral-600 md:leading-[22.5px] md:normal-case"
                  />
                  Web to code extension
                </a>
              </li>
              <li className="items-center box-border caret-transparent flex normal-case mb-[22px] rounded-b-[5px] md:mb-1">
                <a
                  href="https://www.animaapp.com/xd"
                  className="text-white text-[15px] box-border caret-transparent block leading-10 capitalize md:text-neutral-600 md:leading-[22.5px] md:normal-case hover:text-black hover:border-black"
                >
                  <img
                    src="https://c.animaapp.com/mh1uo1b9FcJfkA/assets/image-2.gif"
                    className="text-white box-border caret-transparent h-[25px] leading-10 capitalize w-[25px] mr-2 md:text-neutral-600 md:leading-[22.5px] md:normal-case"
                  />
                  Adobe XD
                </a>
              </li>
            </ul>
          </li>
          <li className="border-b-zinc-300/50 border-l-neutral-800 border-r-neutral-800 border-t-neutral-800 box-border caret-transparent uppercase mt-6 pb-[15px] border-b md:border-b-zinc-100 md:mt-[13px] md:pb-[13px] md:border-b-2">
            <a
              href="#"
              className="text-white text-2xl box-border caret-transparent leading-9 capitalize md:text-neutral-900 md:text-base md:leading-6 md:uppercase after:accent-auto after:border-t-neutral-900 after:box-border after:caret-transparent after:text-white after:hidden after:text-2xl after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-9 after:list-outside after:list-none after:pointer-events-auto after:absolute after:text-left after:indent-[0px] after:capitalize after:visible after:mt-2.5 after:border-t-[6px] after:border-b-transparent after:border-x-transparent after:border-x-4 after:border-separate after:border-solid after:right-[30px] after:font-roslindale_textregular after:md:text-neutral-900 after:md:block after:md:text-base after:md:leading-6 after:md:uppercase hover:text-black hover:border-black"
            >
              Resources{" "}
              <span className="text-white text-[13px] font-black box-border caret-transparent block float-right leading-[13px] capitalize pt-2.5 font-font_awesome_6_free md:text-neutral-900 md:text-base md:inline-block md:float-none md:leading-4 md:uppercase md:pt-0 before:accent-auto before:box-border before:caret-transparent before:text-white before:text-[13px] before:not-italic before:normal-nums before:font-black before:tracking-[normal] before:leading-[13px] before:list-outside before:list-none before:pointer-events-auto before:text-left before:indent-[0px] before:capitalize before:visible before:border-separate before:font-font_awesome_6_free before:md:text-neutral-900 before:md:text-base before:md:leading-4 before:md:uppercase"></span>
            </a>
            <ul className="bg-neutral-700 box-border caret-transparent hidden w-full z-[999] mt-6 pl-[22px] pr-[70px] pt-[23px] pb-0.5 rounded-[10px] md:w-auto md:mt-5 md:pl-[35px] md:pr-5 md:py-5">
              <li className="items-center box-border caret-transparent flex normal-case mb-[22px] rounded-t-[5px] md:mb-1">
                <a
                  href="https://www.animaapp.com/blog"
                  className="text-white text-[15px] box-border caret-transparent block leading-10 capitalize md:text-neutral-600 md:leading-[22.5px] md:normal-case hover:text-black hover:border-black"
                >
                  Blog
                </a>
              </li>
              <li className="items-center box-border caret-transparent flex normal-case mb-[22px] md:mb-1">
                <a
                  href="https://docs.animaapp.com/docs/getting-started"
                  className="text-white text-[15px] box-border caret-transparent block leading-10 capitalize md:text-neutral-600 md:leading-[22.5px] md:normal-case hover:text-black hover:border-black"
                >
                  Documentation
                </a>
              </li>
              <li className="items-center box-border caret-transparent flex normal-case mb-[22px] md:mb-1">
                <a
                  href="https://forum.animaapp.com/"
                  className="text-white text-[15px] box-border caret-transparent block leading-10 capitalize md:text-neutral-600 md:leading-[22.5px] md:normal-case hover:text-black hover:border-black"
                >
                  Anima Forum
                </a>
              </li>
              <li className="items-center box-border caret-transparent flex normal-case mb-[22px] rounded-b-[5px] md:mb-1">
                <a
                  href="https://support.animaapp.com/en/"
                  className="text-white text-[15px] box-border caret-transparent block leading-10 capitalize md:text-neutral-600 md:leading-[22.5px] md:normal-case hover:text-black hover:border-black"
                >
                  Help Center
                </a>
              </li>
            </ul>
          </li>
          <li className="border-b-zinc-300/50 border-l-neutral-800 border-r-neutral-800 border-t-neutral-800 box-border caret-transparent uppercase mt-6 pb-[15px] border-b md:border-b-zinc-100 md:mt-[13px] md:pb-[13px] md:border-b-2">
            <a
              href="#"
              className="text-white text-2xl box-border caret-transparent leading-9 capitalize md:text-neutral-900 md:text-base md:leading-6 md:uppercase after:accent-auto after:border-t-neutral-900 after:box-border after:caret-transparent after:text-white after:hidden after:text-2xl after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-9 after:list-outside after:list-none after:pointer-events-auto after:absolute after:text-left after:indent-[0px] after:capitalize after:visible after:mt-2.5 after:border-t-[6px] after:border-b-transparent after:border-x-transparent after:border-x-4 after:border-separate after:border-solid after:right-[30px] after:font-roslindale_textregular after:md:text-neutral-900 after:md:block after:md:text-base after:md:leading-6 after:md:uppercase hover:text-black hover:border-black"
            >
              Community{" "}
              <span className="text-white text-[13px] font-black box-border caret-transparent block float-right leading-[13px] capitalize pt-2.5 font-font_awesome_6_free md:text-neutral-900 md:text-base md:inline-block md:float-none md:leading-4 md:uppercase md:pt-0 before:accent-auto before:box-border before:caret-transparent before:text-white before:text-[13px] before:not-italic before:normal-nums before:font-black before:tracking-[normal] before:leading-[13px] before:list-outside before:list-none before:pointer-events-auto before:text-left before:indent-[0px] before:capitalize before:visible before:border-separate before:font-font_awesome_6_free before:md:text-neutral-900 before:md:text-base before:md:leading-4 before:md:uppercase"></span>
            </a>
            <ul className="bg-neutral-700 box-border caret-transparent hidden w-full z-[999] mt-6 pl-[22px] pr-[70px] pt-[23px] pb-0.5 rounded-[10px] md:w-auto md:mt-5 md:pl-[35px] md:pr-5 md:py-5">
              <li className="items-center box-border caret-transparent flex normal-case mb-[22px] rounded-t-[5px] md:mb-1">
                <a
                  href="https://discord.com/invite/5T88sYNcSW"
                  className="text-white text-[15px] box-border caret-transparent block leading-10 capitalize md:text-neutral-600 md:leading-[22.5px] md:normal-case hover:text-black hover:border-black"
                >
                  <img
                    src="https://c.animaapp.com/mh1uo1b9FcJfkA/assets/image-2.gif"
                    className="text-white box-border caret-transparent h-[25px] leading-10 capitalize w-[25px] mr-2 md:text-neutral-600 md:leading-[22.5px] md:normal-case"
                  />
                  Discord
                </a>
              </li>
              <li className="items-center box-border caret-transparent flex normal-case mb-[22px] md:mb-1">
                <a
                  href="https://twitter.com/AnimaApp"
                  className="text-white text-[15px] box-border caret-transparent block leading-10 capitalize md:text-neutral-600 md:leading-[22.5px] md:normal-case hover:text-black hover:border-black"
                >
                  <img
                    src="https://c.animaapp.com/mh1uo1b9FcJfkA/assets/image-2.gif"
                    className="text-white box-border caret-transparent h-[25px] leading-10 capitalize w-[25px] mr-2 md:text-neutral-600 md:leading-[22.5px] md:normal-case"
                  />
                  Twitter
                </a>
              </li>
              <li className="items-center box-border caret-transparent flex normal-case mb-[22px] rounded-b-[5px] md:mb-1">
                <a
                  href="https://github.com/AnimaApp"
                  className="text-white text-[15px] box-border caret-transparent block leading-10 capitalize md:text-neutral-600 md:leading-[22.5px] md:normal-case hover:text-black hover:border-black"
                >
                  <img
                    src="https://c.animaapp.com/mh1uo1b9FcJfkA/assets/image-2.gif"
                    className="text-white box-border caret-transparent h-[25px] leading-10 capitalize w-[25px] mr-2 md:text-neutral-600 md:leading-[22.5px] md:normal-case"
                  />
                  GitHub
                </a>
              </li>
            </ul>
          </li>
          <li className="border-b-zinc-300/50 border-l-neutral-800 border-r-neutral-800 border-t-neutral-800 box-border caret-transparent uppercase mt-6 pb-[15px] border-b md:border-b-zinc-100 md:mt-[13px] md:pb-[13px] md:border-b-2">
            <a
              href="https://www.animaapp.com/pricing"
              className="text-white text-2xl box-border caret-transparent leading-9 capitalize md:text-neutral-900 md:text-base md:leading-6 md:uppercase hover:text-black hover:border-black"
            >
              Pricing
            </a>
          </li>
          <li className="border-b-zinc-300/50 border-l-neutral-800 border-r-neutral-800 border-t-neutral-800 box-border caret-transparent hidden uppercase mt-6 pb-[15px] border-b md:border-b-zinc-100 md:list-item md:mt-[13px] md:pb-[13px] md:border-b-2">
            <a
              href="https://projects.animaapp.com/signup"
              className="text-white text-2xl box-border caret-transparent leading-9 capitalize md:text-neutral-900 md:text-base md:leading-6 md:uppercase hover:text-black hover:border-black"
            >
              Start free
            </a>
          </li>
          <li className="border-b-zinc-300/50 border-l-neutral-800 border-r-neutral-800 border-t-neutral-800 box-border caret-transparent hidden uppercase mt-6 pb-[15px] border-b md:border-b-zinc-100 md:list-item md:mt-[13px] md:pb-[13px] md:border-b-2">
            <a
              href="https://projects.animaapp.com/login"
              className="text-white text-2xl box-border caret-transparent leading-9 capitalize md:text-neutral-900 md:text-base md:leading-6 md:uppercase hover:text-black hover:border-black"
            >
              Login
            </a>
          </li>
          <li className="border-b-zinc-300/50 border-l-neutral-800 border-r-neutral-800 border-t-neutral-800 box-border caret-transparent uppercase mt-6 pb-[15px] border-b md:border-b-neutral-800 md:mt-[13px] md:pb-[13px] md:border-b-0">
            <a
              href="#pll_switcher"
              className="text-white text-2xl box-border caret-transparent leading-9 capitalize md:text-neutral-900 md:text-base md:leading-6 md:uppercase after:accent-auto after:border-t-neutral-900 after:box-border after:caret-transparent after:text-white after:hidden after:text-2xl after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-9 after:list-outside after:list-none after:pointer-events-auto after:absolute after:text-left after:indent-[0px] after:capitalize after:visible after:mt-2.5 after:border-t-[6px] after:border-b-transparent after:border-x-transparent after:border-x-4 after:border-separate after:border-solid after:right-[30px] after:font-roslindale_textregular after:md:text-neutral-900 after:md:block after:md:text-base after:md:leading-6 after:md:uppercase hover:text-black hover:border-black"
            >
              <img
                src="https://c.animaapp.com/mh1uo1b9FcJfkA/assets/image-3.png"
                alt="English"
                className="text-white text-2xl aspect-[auto_16_/_11] box-border caret-transparent h-[11px] leading-9 capitalize w-4 md:text-neutral-900 md:text-base md:leading-6 md:uppercase"
              />
            </a>
            <ul className="bg-neutral-700 box-border caret-transparent hidden w-[90px] z-[999] mt-6 pl-[22px] pr-[70px] pt-[23px] pb-0.5 rounded-[10px] md:mt-5 md:pl-[35px] md:pr-5 md:py-5">
              <li className="items-center box-border caret-transparent flex normal-case mb-[22px] rounded-t-[5px] md:mb-1">
                <a
                  href="/blog/es/"
                  className="text-white text-[15px] box-border caret-transparent block leading-10 capitalize md:text-neutral-600 md:leading-[22.5px] md:normal-case hover:text-black hover:border-black"
                >
                  <img
                    src="https://c.animaapp.com/mh1uo1b9FcJfkA/assets/image-4.png"
                    alt="Español"
                    className="text-white aspect-[auto_16_/_11] box-border caret-transparent h-[11px] leading-10 capitalize w-4 mr-2 md:text-neutral-600 md:leading-[22.5px] md:normal-case"
                  />
                </a>
              </li>
              <li className="items-center box-border caret-transparent flex normal-case mb-[22px] md:mb-1">
                <a
                  href="/blog/fr/"
                  className="text-white text-[15px] box-border caret-transparent block leading-10 capitalize md:text-neutral-600 md:leading-[22.5px] md:normal-case hover:text-black hover:border-black"
                >
                  <img
                    src="https://c.animaapp.com/mh1uo1b9FcJfkA/assets/image-5.png"
                    alt="Français"
                    className="text-white aspect-[auto_16_/_11] box-border caret-transparent h-[11px] leading-10 capitalize w-4 mr-2 md:text-neutral-600 md:leading-[22.5px] md:normal-case"
                  />
                </a>
              </li>
              <li className="items-center box-border caret-transparent flex normal-case mb-[22px] md:mb-1">
                <a
                  href="/blog/pt/"
                  className="text-white text-[15px] box-border caret-transparent block leading-10 capitalize md:text-neutral-600 md:leading-[22.5px] md:normal-case hover:text-black hover:border-black"
                >
                  <img
                    src="https://c.animaapp.com/mh1uo1b9FcJfkA/assets/image-6.png"
                    alt="Português"
                    className="text-white aspect-[auto_16_/_11] box-border caret-transparent h-[11px] leading-10 capitalize w-4 mr-2 md:text-neutral-600 md:leading-[22.5px] md:normal-case"
                  />
                </a>
              </li>
              <li className="items-center box-border caret-transparent flex normal-case mb-[22px] md:mb-1">
                <a
                  href="/blog/ja/"
                  className="text-white text-[15px] box-border caret-transparent block leading-10 capitalize md:text-neutral-600 md:leading-[22.5px] md:normal-case hover:text-black hover:border-black"
                >
                  <img
                    src="https://c.animaapp.com/mh1uo1b9FcJfkA/assets/image-7.png"
                    alt="日本語"
                    className="text-white aspect-[auto_16_/_11] box-border caret-transparent h-[11px] leading-10 capitalize w-4 mr-2 md:text-neutral-600 md:leading-[22.5px] md:normal-case"
                  />
                </a>
              </li>
              <li className="items-center box-border caret-transparent flex normal-case mb-[22px] md:mb-1">
                <a
                  href="/blog/ko/"
                  className="text-white text-[15px] box-border caret-transparent block leading-10 capitalize md:text-neutral-600 md:leading-[22.5px] md:normal-case hover:text-black hover:border-black"
                >
                  <img
                    src="https://c.animaapp.com/mh1uo1b9FcJfkA/assets/image-8.png"
                    alt="한국어"
                    className="text-white aspect-[auto_16_/_11] box-border caret-transparent h-[11px] leading-10 capitalize w-4 mr-2 md:text-neutral-600 md:leading-[22.5px] md:normal-case"
                  />
                </a>
              </li>
              <li className="items-center box-border caret-transparent flex normal-case mb-[22px] md:mb-1">
                <a
                  href="/blog/de/"
                  className="text-white text-[15px] box-border caret-transparent block leading-10 capitalize md:text-neutral-600 md:leading-[22.5px] md:normal-case hover:text-black hover:border-black"
                >
                  <img
                    src="https://c.animaapp.com/mh1uo1b9FcJfkA/assets/image-9.png"
                    alt="Deutsch"
                    className="text-white aspect-[auto_16_/_11] box-border caret-transparent h-[11px] leading-10 capitalize w-4 mr-2 md:text-neutral-600 md:leading-[22.5px] md:normal-case"
                  />
                </a>
              </li>
              <li className="items-center box-border caret-transparent flex normal-case mb-[22px] rounded-b-[5px] md:mb-1">
                <a
                  href="/blog/"
                  className="text-white text-[15px] box-border caret-transparent block leading-10 capitalize md:text-neutral-600 md:leading-[22.5px] md:normal-case hover:text-black hover:border-black"
                >
                  <img
                    src="https://c.animaapp.com/mh1uo1b9FcJfkA/assets/image-3.png"
                    alt="English"
                    className="text-white aspect-[auto_16_/_11] box-border caret-transparent h-[11px] leading-10 capitalize w-4 mr-2 md:text-neutral-600 md:leading-[22.5px] md:normal-case"
                  />
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};
