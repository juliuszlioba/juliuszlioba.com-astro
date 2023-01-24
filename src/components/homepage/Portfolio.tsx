import { InView } from "react-intersection-observer";

export const Portfolio = () => {
  return (
    <div id="works">
      {/* @ts-ignore */}
      <InView threshold={0.4} triggerOnce={true}>
        {/* @ts-ignore */}
        {({ inView, ref, entry }) => (
          <div
            className={`relative z-0 mt-20 overflow-visible py-20 duration-300 ${
              inView ? "opacity-100" : "opacity-0 delay-500"
            }`}
            ref={ref}
          >
            <div className="relative z-10 m-auto max-w-6xl px-4 md:px-8">
              <p className="uppercase tracking-widest text-gray-400">
                Portfolio
              </p>
              <h2 className="font-header mt-2 text-6xl">
                Examples of my work.
              </h2>
              <div>
                <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  <div className="relative aspect-square overflow-hidden rounded-2xl border-2 border-transparent bg-gray-900 duration-150 hover:scale-105 hover:border-2 hover:border-orange">
                    <a href="/portfolio/moviesnight/">
                      <div className="absolute inset-0 z-10 flex items-center justify-center opacity-0 duration-150 hover:bg-orange hover:bg-opacity-40 hover:opacity-100">
                        <p className="flex items-center rounded-2xl bg-orange py-2 px-3 text-xl">
                          Check it out
                        </p>
                      </div>
                    </a>

                    <img
                      src="/assets/images/thumbnails/moviesNight_thumbnail.jpg"
                      alt="moviesNight thumbnail"
                      width={1200}
                      height={680}
                      className="h-full object-cover object-left"
                    />
                  </div>
                  <div className="relative aspect-square overflow-hidden rounded-2xl border-2 border-transparent bg-gray-900 duration-150 hover:scale-105 hover:border-2 hover:border-orange">
                    <a href="/portfolio/connect724/">
                      <div className="absolute inset-0 z-10 flex items-center justify-center opacity-0 duration-150 hover:bg-orange hover:bg-opacity-40 hover:opacity-100">
                        <p className="flex items-center rounded-2xl bg-orange py-2 px-3 text-xl">
                          Check it out
                        </p>
                      </div>
                    </a>
                    <img
                      src="/assets/images/thumbnails/c724_thumbnail.jpg"
                      alt="c724 GmbH thumbnail"
                      className="h-full object-cover object-left"
                    />
                  </div>
                  <div className="relative aspect-square overflow-hidden rounded-2xl border-2 border-transparent bg-gray-900 duration-150 hover:scale-105 hover:border-2 hover:border-orange">
                    <a href="/portfolio/zustellpartner/">
                      <div className="absolute inset-0 z-10 flex items-center justify-center opacity-0 duration-150 hover:bg-orange hover:bg-opacity-40 hover:opacity-100">
                        <p className="flex items-center rounded-2xl bg-orange py-2 px-3 text-xl">
                          Check it out
                        </p>
                      </div>
                    </a>
                    <img
                      src="/assets/images/thumbnails/zp_thumbnail.jpg"
                      alt="zustellpartner.at thumbnail"
                      className="h-full object-cover object-left"
                    />
                  </div>
                  <div className="relative aspect-square overflow-hidden rounded-2xl border-2 border-transparent bg-gray-900 duration-150 hover:scale-105 hover:border-2 hover:border-orange">
                    <a href="/portfolio/hausbrot/">
                      <div className="absolute inset-0 z-10 flex items-center justify-center opacity-0 duration-150 hover:bg-orange hover:bg-opacity-40 hover:opacity-100">
                        <p className="flex items-center rounded-2xl bg-orange py-2 px-3 text-xl">
                          Check it out
                        </p>
                      </div>
                    </a>
                    <img
                      src="/assets/images/thumbnails/hbr_thumbnail.jpg"
                      alt="Hausbrot.at thumbnail"
                      className="h-full object-cover object-left"
                    />
                  </div>
                  <div className="relative aspect-square overflow-hidden rounded-2xl border-2 border-transparent bg-gray-900 duration-150 hover:scale-105 hover:border-2 hover:border-orange">
                    <a href="/portfolio/dariuszaida">
                      <div className="absolute inset-0 z-10 flex items-center justify-center opacity-0 duration-150 hover:bg-orange hover:bg-opacity-40 hover:opacity-100">
                        <p className="flex items-center rounded-2xl bg-orange py-2 px-3 text-xl">
                          Check it out
                        </p>
                      </div>
                    </a>
                    <img
                      src="/assets/images/thumbnails/portfolio_dariuszaida_thumbnail.jpg"
                      alt="dariuszaida.lt thumbnail"
                      className="h-full object-cover object-left"
                    />
                  </div>
                  <div className="flex aspect-square items-center justify-center overflow-hidden rounded-2xl bg-gray-900 bg-opacity-50">
                    <p className="tracking-widetext-gray-400 px-8 text-center text-lg">
                      More examples are comming soon. Come back a bit later.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 h-full w-full overflow-hidden">
              <div
                className={`lg:w-2/2 absolute inset-y-0 right-0 z-0 w-9/12 rounded-l-3xl bg-gray-900 opacity-50 duration-1000 ${
                  inView ? "translate-x-0" : "translate-x-full"
                }`}
              ></div>
            </div>
          </div>
        )}
      </InView>
    </div>
  );
};
