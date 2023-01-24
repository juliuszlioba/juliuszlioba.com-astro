import { InView } from "react-intersection-observer";

export const Services = () => {
  return (
    <div id="services" class="relative z-0 py-10">
      <div class="m-auto max-w-6xl px-4 text-center md:px-8">
        {/* @ts-ignore */}
        <InView threshold={1} triggerOnce={true}>
          {/* @ts-ignore */}
          {({ inView, ref, entry }) => (
            <div
              className={`duration-500 ${
                inView ? "opacity-100" : "opacity-0 delay-500"
              }`}
              ref={ref}
            >
              <p className="uppercase tracking-widest text-gray-600 dark:text-gray-400">
                Skils
              </p>
              <h2 className="font-header mt-2 text-6xl">My expertise</h2>
            </div>
          )}
        </InView>

        {/* @ts-ignore */}
        <InView threshold={0.2} triggerOnce={true}>
          {/* @ts-ignore */}
          {({ inView, ref, entry }) => (
            <div
              class={`mt-16 grid gap-12 duration-500 md:grid-cols-2 ${
                inView ? "opacity-100" : "opacity-0 delay-500"
              }`}
              ref={ref}
            >
              <div class="row-span-2 aspect-square">
                <div class="max-h-lg max-w-lg">
                  <img
                    src="/assets/images/web-design.svg"
                    alt="Web Design"
                    width={512}
                    height={512}
                    class="relative"
                  />
                </div>
              </div>
              <div class="order-2 flex flex-col rounded-2xl bg-gray-900 bg-opacity-50 p-8 text-left shadow-xl-flat">
                <h2 class="font-header mt-auto text-3xl">Web Design</h2>
                <p class="mt-2 text-gray-600 dark:text-gray-400">
                  From small to medium size personal or corporate websites. User
                  interfaces. Revamp of old design to make everything look good
                  on the internet.
                </p>
                <p class="mt-2 mb-auto text-gray-600 dark:text-gray-400">
                  Next.js, Astro, Node.js, Gatsby, Wordpress or simply HTML.
                </p>
              </div>
              <div class="order-3 flex flex-col rounded-2xl bg-gray-900 bg-opacity-50 p-8 text-left  shadow-xl-flat">
                <h2 class="font-header mt-auto text-3xl">
                  Digital Media Design
                </h2>
                <p class="mt-2 mb-auto text-gray-600 dark:text-gray-400">
                  Photos, banners (including simple animations) and everything
                  else that are served through the internet.
                </p>
              </div>
            </div>
          )}
        </InView>

        {/* @ts-ignore */}
        <InView threshold={0.2} triggerOnce={true}>
          {/* @ts-ignore */}
          {({ inView, ref, entry }) => (
            <div
              class={`mt-12 grid gap-12 duration-500 md:grid-cols-2 ${
                inView ? "opacity-100" : "opacity-0 delay-500"
              }`}
              ref={ref}
            >
              <div class="order-1 row-span-2 aspect-square md:order-2">
                <div class="max-h-lg max-w-lg">
                  <img
                    src="/assets/images/web-design.svg"
                    alt="Web Design"
                    width={512}
                    height={512}
                    class="relative"
                  />
                </div>
              </div>
              <div class="order-2 flex flex-col rounded-2xl bg-gray-900 bg-opacity-50 p-8 text-left shadow-xl-flat md:order-1">
                <h2 class="font-header mt-auto text-3xl">Print Media</h2>
                <p class="mt-2 mb-auto text-gray-600 dark:text-gray-400">
                  Design projects of print media like flyers, brochures and
                  everything else that need visual esthetic in the digital or
                  physical world.
                </p>
              </div>
              <div class="order-3 flex flex-col rounded-2xl bg-gray-900 bg-opacity-50 p-8 text-left shadow-xl-flat">
                <h2 class="font-header mt-auto text-3xl">Coorporate design</h2>
                <p class="mt-2 mb-auto text-gray-600 dark:text-gray-400">
                  Corporate or product design. When it is important to make
                  great first impression about your brand.
                </p>
              </div>
            </div>
          )}
        </InView>
      </div>
    </div>
  );
};
