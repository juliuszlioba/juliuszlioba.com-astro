import { useState, useEffect, createRef } from "preact/compat";
import Cookies from "js-cookie";

export const CookiesConsent = () => {
  const [open, setOpen] = useState(false);
  const [openSettings, setOpenSettings] = useState(false);
  const consentRef = createRef<HTMLInputElement>();

  const handleAllAccept = () => {
    // @ts-ignore
    gtag("consent", "update", {
      ad_storage: "denied",
      analytics_storage: "granted",
    });
    Cookies.set("consent", "granted", { expires: 31 });
    setOpen(false);
  };

  const handleAllReject = () => {
    // @ts-ignore
    gtag("consent", "update", {
      ad_storage: "denied",
      analytics_storage: "denied",
    });
    Cookies.set("consent", "denied", { expires: 31 });
    setOpen(false);
  };

  const handelSaveSettings = () => {
    consentRef.current!.checked ? handleAllAccept() : handleAllReject();
  };

  useEffect(() => {
    const consent = Cookies.get("consent");
    if (!consent) {
      setOpen(true);
    }
  }, []);

  return (
    <>
      <button
        class="text-sm text-gray-600 duration-75 hover:text-orange"
        onClick={() => setOpen(!open)}
      >
        Consent Settings
      </button>

      {open && (
        <div
          className={`fixed bottom-0 left-0 z-50 m-4 flex max-w-3xl flex-col gap-2 rounded-xl bg-gray-700 p-4 shadow-xl-flat`}
        >
          <div className="items font-pt-sans flex items-center gap-2 text-2xl">
            {/* prettier-ignore */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"  className="shrink-0"> <path d="M21.598 11.064a1.006 1.006 0 0 0-.854-.172A2.938 2.938 0 0 1 20 11c-1.654 0-3-1.346-3.003-2.937.005-.034.016-.136.017-.17a.998.998 0 0 0-1.254-1.006A2.963 2.963 0 0 1 15 7c-1.654 0-3-1.346-3-3 0-.217.031-.444.099-.716a1 1 0 0 0-1.067-1.236A9.956 9.956 0 0 0 2 12c0 5.514 4.486 10 10 10s10-4.486 10-10c0-.049-.003-.097-.007-.16a1.004 1.004 0 0 0-.395-.776zM12 20c-4.411 0-8-3.589-8-8a7.962 7.962 0 0 1 6.006-7.75A5.006 5.006 0 0 0 15 9l.101-.001a5.007 5.007 0 0 0 4.837 4C19.444 16.941 16.073 20 12 20z"></path> <circle cx="12.5" cy="11.5" r="1.5"></circle> <circle cx="8.5" cy="8.5" r="1.5"></circle> <circle cx="7.5" cy="12.5" r="1.5"></circle> <circle cx="15.5" cy="15.5" r="1.5"></circle> <circle cx="10.5" cy="16.5" r="1.5"></circle> </svg>
            This website use Cookies
          </div>
          <div className="pb-1">
            <p className="text-gray-400">
              This website uses cookies to ensure you get best experiance on my
              website.
              <a href="/privacy-policy">
                <span className="hover:text-site-primary dark:hover:text-site-primary pl-1 underline">
                  Learn more
                </span>
              </a>
              .
            </p>
          </div>
          <div className="flex w-full flex-col gap-2 md:flex-row">
            <button
              className="grow rounded-lg border-2 border-orange bg-gray-600 py-2 px-4 hover:bg-orange"
              onClick={handleAllAccept}
            >
              I consent to all
            </button>
            <button
              className="rounded-lg border-2 border-gray-400 bg-gray-600 py-2 px-4 hover:border-orange hover:bg-orange"
              onClick={handleAllReject}
            >
              I do not consent
            </button>

            {openSettings ? (
              <button
                className="rounded-lg border-2 border-gray-400 bg-gray-600 py-2 px-4 hover:border-orange hover:bg-orange"
                onClick={handelSaveSettings}
              >
                Save settings
              </button>
            ) : (
              <button
                className="rounded-lg border-2 border-gray-400 bg-gray-600 py-2 px-4 hover:border-orange hover:bg-orange"
                onClick={() => setOpenSettings(!openSettings)}
              >
                I want to choose what I consent to
              </button>
            )}
          </div>

          {openSettings && (
            <div className="flex flex-col items-start gap-1">
              <h2 className="font-pt-sans pb-2 text-lg">Options</h2>
              <div className="flex flex-col items-start gap-1">
                <label>
                  <input
                    type="checkbox"
                    disabled={true}
                    checked={true}
                    className="focus:ring-site-primary mr-2 h-5 w-5 rounded-md border-transparent bg-gray-100 text-gray-400 focus:border-transparent focus:ring-4 focus:ring-offset-0"
                  />
                  <span>
                    Nessesary cookies{" "}
                    <i>(setting/data to keep between pages)</i>
                  </span>
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={false}
                    className="focus:ring-site-primary mr-2 h-5 w-5 rounded-md border-transparent bg-gray-100 text-gray-400 focus:border-transparent focus:ring-4 focus:ring-offset-0"
                    ref={consentRef}
                  />
                  <span>
                    Performance cookies{" "}
                    <i>(gather Analytics data abaut website performance)</i>
                  </span>
                </label>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};
