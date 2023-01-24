import { InView } from "react-intersection-observer";

export const AboutMe = () => {
  return (
    <div id="about">
      {/* @ts-ignore */}
      <InView threshold={0.4} triggerOnce={true}>
        {/* @ts-ignore */}
        {({ inView, ref, entry }) => (
          <div
            className={`relative mt-20 overflow-hidden py-20 duration-300 ${
              inView ? "opacity-100" : "opacity-0 delay-500"
            }`}
            ref={ref}
          >
            <div className="relative z-10 m-auto max-w-6xl px-4 md:px-8">
              <p className="uppercase tracking-widest text-gray-600 dark:text-gray-400">
                Hey, nice to meet you
              </p>
              <h2 className="font-header mt-2 text-6xl lg:w-2/3">
                I'm Julius, and I'm passionate abaut design.
              </h2>
              <p className="mt-5 max-w-prose text-lg tracking-wide text-gray-600 dark:text-gray-400">
                As I work with graphic design every day and from time to time
                take web development projects for almost a decade, I have
                gathered enough experience to tackle a variety of different
                projects. And the best fuel for my projects is a cup of my
                favourite black coffee with a little bit of milk and new
                challenges along the way.
              </p>
              <p className="mt-2 max-w-prose text-lg tracking-wide text-gray-600 dark:text-gray-400">
                Time off work is likewise important, so when I can, I like to
                take hiking or biking in nature to keep my mind fresh. And my
                second passion besides design is taking rides on a motorcycle.
              </p>
              <p className="mt-2 max-w-prose text-lg tracking-wide text-gray-600 dark:text-gray-400">
                Then the day's work is done and the sun is setting down I love
                to relax in front of some good movie or a book or just get lost
                in the computer game world from time to time.
              </p>
              <div className="mt-8 flex items-center">
                <div className="relative aspect-square h-20 w-20 overflow-hidden rounded-full border-4 border-white bg-orange">
                  <img
                    src="/assets/images/profile-picture-noBg-600x700.png"
                    alt="Julius Zlioba"
                    width={600}
                    height={700}
                    className="-ml-1 mt-1 scale-125 object-contain object-center"
                  />
                </div>
                <p className="ml-3 tracking-wide text-gray-800 dark:text-gray-200">
                  Julius Zlioba
                </p>
              </div>
            </div>
            <div
              className={`absolute inset-0 z-0 w-9/12 rounded-r-3xl bg-gray-900 opacity-50 duration-1000 lg:w-1/2 ${
                inView ? "translate-x-0" : "-translate-x-full"
              }`}
            ></div>
          </div>
        )}
      </InView>
    </div>
  );
};
