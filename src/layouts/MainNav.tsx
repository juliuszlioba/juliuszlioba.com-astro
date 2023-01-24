import { useState } from "preact/compat";

export const MainNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <div class="absolute top-0 left-0 z-10 w-full py-10">
      <div class="mx-auto flex max-w-6xl items-center justify-between px-4 md:px-8">
        <a href="/" class="font-pt-sans-bold z-50 order-1 text-2xl">
          juliuszlioba<span class="text-gray-400">.com</span>
        </a>

        <button
          onClick={() => setOpen(!open)}
          class="z-50 order-4 ml-3 self-stretch rounded-full bg-gray-700 p-2 lg:hidden"
        >
          {open ? (
            <>
              {/* prettier-ignore */}
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" > <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" /> </svg>
            </>
          ) : (
            <>
              {/* prettier-ignore */}
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
              </svg>
            </>
          )}
        </button>

        <div
          class={`absolute top-0 left-0 z-40 order-2 w-full bg-gray-100 px-4 pt-28 pb-10 text-center shadow-xl-flat dark:bg-gray-900 md:px-8 lg:relative lg:ml-auto lg:block lg:w-auto lg:bg-transparent lg:px-0 lg:py-0 lg:shadow-none dark:lg:bg-transparent ${
            open ? "" : "hidden"
          }`}
        >
          <div class="inline-flex flex-col gap-6 lg:flex-row lg:gap-10">
            <a
              href="/#about"
              class="text-gray-200 duration-75 hover:text-orange"
            >
              About
            </a>
            <a
              href="/#works"
              class="text-gray-200 duration-75 hover:text-orange"
            >
              Works
            </a>
            <a
              href="/#services"
              class="text-gray-200 duration-75 hover:text-orange"
            >
              Services
            </a>
            <a
              href="/contacts"
              class="text-gray-200 duration-75 hover:text-orange"
            >
              Contacts
            </a>
            <div class="flex flex-row gap-4 lg:gap-5">
              <div class="flex justify-center">
                <a
                  href="https://github.com/juliuszlioba"
                  target="_blank"
                  rel="nofollow noreferrer"
                  class="text-gray-600 duration-75 hover:text-orange"
                >
                  {/* prettier-ignore */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-6 h-6" viewBox="0 0 16 16" > <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" /> </svg>
                </a>
              </div>
              <div class="flex justify-center">
                <a
                  href="https://www.facebook.com/julius.zlioba"
                  target="_blank"
                  rel="nofollow noreferrer"
                  class="text-gray-600 duration-75 hover:text-orange"
                >
                  {/* prettier-ignore */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-6 h-6" viewBox="0 0 16 16" > <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" /> </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
