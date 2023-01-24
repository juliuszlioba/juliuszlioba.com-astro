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
                  I specialize in creating visually appealing and user-friendly
                  websites for personal and corporate clients, ranging from{" "}
                  <span className="text-orange">small to medium-sized</span>. It
                  is include designing user interfaces and modernizing outdated
                  designs to ensure a polished and professional online presence.
                </p>
                <p class="mt-2 mb-auto text-gray-600 dark:text-gray-400">
                  I know{" "}
                  <span className="text-orange">
                    Next.js, Astro, React, Node.js, WordPress
                  </span>{" "}
                  and many more frameworks to create simple static or heavily
                  interactive websites.
                </p>
              </div>
              <div class="order-3 flex flex-col rounded-2xl bg-gray-900 bg-opacity-50 p-8 text-left  shadow-xl-flat">
                <h2 class="font-header mt-auto text-3xl">
                  Digital Media Design
                </h2>
                <p class="mt-2 mb-auto text-gray-600 dark:text-gray-400">
                  My digital media design services include creating professional
                  and engaging visual content such as{" "}
                  <span className="text-orange">images, banners</span>, and{" "}
                  <span className="text-orange">simple animations</span> for use
                  on the internet. I am equipped to handle all your digital
                  media needs and ensure that your online presence is visually
                  stunning and effective.
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
                  I specialize in designing visually striking print media such
                  as <span className="text-orange">flyers, brochures</span>, and{" "}
                  <span className="text-orange">other materials</span> that
                  require a polished aesthetic in both digital and physical
                  formats. My goal is to create visually impactful designs that
                  effectively communicate your message and enhance your brand's
                  image.
                </p>
              </div>
              <div class="order-3 flex flex-col rounded-2xl bg-gray-900 bg-opacity-50 p-8 text-left shadow-xl-flat">
                <h2 class="font-header mt-auto text-3xl">Coorporate design</h2>
                <p class="mt-2 mb-auto text-gray-600 dark:text-gray-400">
                  As a corporate and product designer, my focus is on creating
                  designs that make a strong and lasting impression of your
                  brand. I understand the importance of representing your
                  company or product in the best possible light and work
                  diligently to craft designs that effectively communicate your
                  message and enhance your brand's image.
                </p>
              </div>
            </div>
          )}
        </InView>
      </div>
    </div>
  );
};
